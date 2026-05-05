"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ProductsService = class ProductsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    canSellerMarkSold(product, userId) {
        return product.seller.userId === userId;
    }
    canBuyerMarkReceived(product, userId) {
        return product.seller.userId !== userId;
    }
    async create(userId, createProductDto) {
        const seller = await this.prisma.seller.findUnique({
            where: { id: createProductDto.sellerId },
            select: { userId: true },
        });
        if (!seller) {
            throw new common_1.NotFoundException('Seller not found');
        }
        if (seller.userId !== userId) {
            throw new common_1.ForbiddenException('Only the seller owner can add products');
        }
        return this.prisma.product.create({
            data: {
                ...createProductDto,
                name: createProductDto.title,
                imageUrl: createProductDto.imageUrl ?? '',
                images: createProductDto.images ?? [],
                videoUrl: createProductDto.videoUrl ?? '',
                videoStory: createProductDto.videoStory ?? '',
            },
            include: {
                seller: true,
                reviews: true,
            },
        });
    }
    findAll(productQueryDto) {
        return this.prisma.product.findMany({
            where: {
                sellerId: productQueryDto.sellerId,
                category: productQueryDto.category,
                location: productQueryDto.location
                    ? {
                        contains: productQueryDto.location,
                        mode: 'insensitive',
                    }
                    : undefined,
                title: productQueryDto.search
                    ? {
                        contains: productQueryDto.search,
                        mode: 'insensitive',
                    }
                    : undefined,
            },
            include: {
                seller: {
                    include: {
                        reviews: true,
                    },
                },
                reviews: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async findById(id) {
        const product = await this.prisma.product.findUnique({
            where: { id },
            include: {
                seller: true,
                reviews: true,
                purchases: true,
            },
        });
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        return product;
    }
    async getTransactionStatus(productId, userId) {
        const product = await this.findById(productId);
        const isSellerOwner = userId
            ? this.canSellerMarkSold(product, userId)
            : false;
        const viewerPurchase = userId
            ? product.purchases.find((purchase) => purchase.buyerId === userId)
            : undefined;
        const confirmedBuyer = product.purchases.find((purchase) => purchase.buyerConfirmedAt) ?? null;
        const buyerConfirmed = Boolean(viewerPurchase?.buyerConfirmedAt);
        const sellerMarkedSold = Boolean(product.sellerMarkedSoldAt);
        const canMarkSold = Boolean(userId && isSellerOwner && !sellerMarkedSold);
        const canMarkReceived = Boolean(userId && !isSellerOwner && !buyerConfirmed);
        const canBuyerReviewSeller = Boolean(userId && !isSellerOwner && (sellerMarkedSold || buyerConfirmed));
        const canSellerReviewBuyer = Boolean(userId && isSellerOwner && confirmedBuyer?.buyerConfirmedAt);
        return {
            productId: product.id,
            isSellerOwner,
            sellerMarkedSold,
            sellerMarkedSoldAt: product.sellerMarkedSoldAt,
            buyerConfirmed,
            buyerConfirmedAt: viewerPurchase?.buyerConfirmedAt ?? null,
            buyerIdForSellerReview: isSellerOwner ? confirmedBuyer?.buyerId ?? null : null,
            canMarkSold,
            canMarkReceived,
            canBuyerReviewSeller,
            canBuyerReviewProduct: canBuyerReviewSeller,
            canSellerReviewBuyer,
            message: this.getTransactionStatusMessage({
                isSellerOwner,
                sellerMarkedSold,
                buyerConfirmed,
                canSellerReviewBuyer,
            }),
        };
    }
    getTransactionStatusMessage(status) {
        if (status.isSellerOwner) {
            if (status.buyerConfirmed || status.canSellerReviewBuyer) {
                return 'The buyer confirmed they received this product. You can now review the buyer.';
            }
            return 'Waiting for buyer to confirm they received this product before buyer review is enabled.';
        }
        if (status.sellerMarkedSold) {
            return 'The seller marked this product as sold. If you bought this item, please confirm and leave a review.';
        }
        if (status.buyerConfirmed) {
            return 'You confirmed you received this product. You can now leave a review.';
        }
        return 'Waiting for seller to mark this product as sold before reviews are enabled.';
    }
    async confirmBought(userId, confirmProductDto) {
        const product = await this.findById(confirmProductDto.productId);
        if (!this.canBuyerMarkReceived(product, userId)) {
            throw new common_1.ForbiddenException('Seller cannot confirm buying own product');
        }
        const existingPurchase = await this.prisma.purchase.findUnique({
            where: {
                productId_buyerId: {
                    productId: product.id,
                    buyerId: userId,
                },
            },
        });
        if (existingPurchase?.buyerConfirmedAt) {
            throw new common_1.ConflictException('Product receipt already confirmed');
        }
        return this.prisma.purchase.upsert({
            where: {
                productId_buyerId: {
                    productId: product.id,
                    buyerId: userId,
                },
            },
            create: {
                productId: product.id,
                buyerId: userId,
                sellerId: product.sellerId,
                buyerConfirmedAt: new Date(),
            },
            update: {
                buyerConfirmedAt: new Date(),
            },
            include: {
                product: true,
                buyer: true,
            },
        });
    }
    async confirmSold(userId, confirmProductDto) {
        const product = await this.findById(confirmProductDto.productId);
        if (!this.canSellerMarkSold(product, userId)) {
            throw new common_1.ForbiddenException('Only the seller can confirm this sale');
        }
        if (product.sellerMarkedSoldAt) {
            throw new common_1.ConflictException('Product is already marked as sold');
        }
        return this.prisma.product.update({
            where: {
                id: product.id,
            },
            data: {
                sellerMarkedSoldAt: new Date(),
            },
            include: {
                seller: true,
                purchases: true,
                reviews: true,
            },
        });
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map
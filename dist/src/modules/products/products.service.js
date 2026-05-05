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
    async confirmBought(userId, confirmProductDto) {
        const product = await this.findById(confirmProductDto.productId);
        if (product.seller.userId === userId) {
            throw new common_1.ForbiddenException('Seller cannot confirm buying own product');
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
        if (product.seller.userId !== userId) {
            throw new common_1.ForbiddenException('Only the seller can confirm this sale');
        }
        const purchase = await this.prisma.purchase.findFirst({
            where: {
                productId: product.id,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
        if (!purchase) {
            throw new common_1.NotFoundException('Buyer confirmation not found');
        }
        return this.prisma.purchase.update({
            where: {
                id: purchase.id,
            },
            data: {
                sellerConfirmedAt: new Date(),
            },
            include: {
                product: true,
                buyer: true,
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
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
exports.ReviewsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../../generated/prisma/client");
const prisma_service_1 = require("../../prisma/prisma.service");
let ReviewsService = class ReviewsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createSellerReview(userId, createSellerReviewDto) {
        this.validateHalfStepRating(createSellerReviewDto.rating);
        await this.validateBuyerReviewEligibility(userId, createSellerReviewDto.productId, createSellerReviewDto.sellerId, 'seller');
        try {
            return await this.prisma.sellerReview.create({
                data: {
                    userId,
                    ...createSellerReviewDto,
                },
                include: {
                    user: true,
                    seller: true,
                },
            });
        }
        catch (error) {
            this.handleUniqueReviewError(error, 'User has already reviewed this seller');
        }
    }
    findSellerReviews(sellerId) {
        return this.prisma.sellerReview.findMany({
            where: { sellerId },
            select: {
                id: true,
                rating: true,
                comment: true,
                createdAt: true,
                user: {
                    select: {
                        name: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async createProductReview(userId, createProductReviewDto) {
        this.validateHalfStepRating(createProductReviewDto.rating);
        await this.validateBuyerReviewEligibility(userId, createProductReviewDto.productId, createProductReviewDto.sellerId, 'product');
        try {
            return await this.prisma.productReview.create({
                data: {
                    userId,
                    ...createProductReviewDto,
                },
                include: {
                    user: true,
                    product: true,
                },
            });
        }
        catch (error) {
            this.handleUniqueReviewError(error, 'User has already reviewed this product');
        }
    }
    findProductReviews(productId) {
        return this.prisma.productReview.findMany({
            where: { productId },
            select: {
                id: true,
                rating: true,
                comment: true,
                createdAt: true,
                user: {
                    select: {
                        name: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async createBuyerReview(reviewerId, createBuyerReviewDto) {
        this.validateHalfStepRating(createBuyerReviewDto.rating);
        await this.validateSellerReviewEligibility(reviewerId, createBuyerReviewDto.productId, createBuyerReviewDto.buyerId);
        try {
            return await this.prisma.buyerReview.create({
                data: {
                    reviewerId,
                    ...createBuyerReviewDto,
                },
                include: {
                    reviewer: true,
                    buyer: true,
                    product: true,
                },
            });
        }
        catch (error) {
            this.handleUniqueReviewError(error, 'Seller has already reviewed this buyer for this product');
        }
    }
    findBuyerReviews(buyerId) {
        return this.prisma.buyerReview.findMany({
            where: { buyerId },
            select: {
                id: true,
                rating: true,
                comment: true,
                createdAt: true,
                reviewer: {
                    select: {
                        name: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async validateBuyerReviewEligibility(userId, productId, sellerId, target) {
        const product = await this.prisma.product.findUnique({
            where: { id: productId },
            select: {
                id: true,
                sellerId: true,
                sellerMarkedSoldAt: true,
                seller: {
                    select: {
                        userId: true,
                    },
                },
            },
        });
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        if (product.sellerId !== sellerId) {
            throw new common_1.ConflictException('Product does not belong to this seller');
        }
        if (product.seller.userId === userId) {
            throw new common_1.ForbiddenException(target === 'product'
                ? 'Seller cannot review their own product'
                : 'Seller cannot review their own profile');
        }
        const purchase = await this.prisma.purchase.findFirst({
            where: {
                buyerId: userId,
                productId,
                sellerId,
                buyerConfirmedAt: {
                    not: null,
                },
            },
            select: { id: true },
        });
        if (!purchase && !product.sellerMarkedSoldAt) {
            throw new common_1.ConflictException('Review is not enabled until the seller marks sold or the buyer confirms receipt');
        }
    }
    async validateSellerReviewEligibility(reviewerId, productId, buyerId) {
        if (reviewerId === buyerId) {
            throw new common_1.ForbiddenException('Seller cannot review themselves');
        }
        const product = await this.prisma.product.findUnique({
            where: { id: productId },
            select: {
                id: true,
                seller: {
                    select: {
                        userId: true,
                    },
                },
            },
        });
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        if (product.seller.userId !== reviewerId) {
            throw new common_1.ForbiddenException('Only the product seller can review this buyer');
        }
        const purchase = await this.prisma.purchase.findFirst({
            where: {
                buyerId,
                productId,
                buyerConfirmedAt: {
                    not: null,
                },
            },
            select: { id: true },
        });
        if (!purchase) {
            throw new common_1.ConflictException('Seller can review the buyer only after the buyer confirms receipt');
        }
    }
    handleUniqueReviewError(error, message) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError &&
            error.code === 'P2002') {
            throw new common_1.ConflictException(message);
        }
        throw error;
    }
    validateHalfStepRating(rating) {
        if (!Number.isFinite(rating) || rating < 1 || rating > 5 || !Number.isInteger(rating * 2)) {
            throw new common_1.ConflictException('Rating must be between 1 and 5 in 0.5 increments');
        }
    }
};
exports.ReviewsService = ReviewsService;
exports.ReviewsService = ReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReviewsService);
//# sourceMappingURL=reviews.service.js.map
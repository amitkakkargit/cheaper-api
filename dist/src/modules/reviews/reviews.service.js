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
        await this.ensureSellerCanBeReviewed(userId, createSellerReviewDto.sellerId);
        await this.ensureCompletedPurchase(userId, createSellerReviewDto.productId, createSellerReviewDto.sellerId);
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
    findSellerReviews(sellerId, userId) {
        return this.prisma.sellerReview.findMany({
            where: { sellerId },
            include: {
                user: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        }).then(reviews => this.filterVisibleSellerReviews(reviews, sellerId, userId));
    }
    async createProductReview(userId, createProductReviewDto) {
        await this.ensureProductCanBeReviewed(userId, createProductReviewDto.productId, createProductReviewDto.sellerId);
        await this.ensureCompletedPurchase(userId, createProductReviewDto.productId, createProductReviewDto.sellerId);
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
    findProductReviews(productId, userId) {
        return this.prisma.productReview.findMany({
            where: { productId },
            include: {
                user: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        }).then(reviews => this.filterVisibleReviews(reviews, productId, userId));
    }
    async ensureSellerCanBeReviewed(userId, sellerId) {
        const seller = await this.prisma.seller.findUnique({
            where: { id: sellerId },
            select: { id: true, userId: true },
        });
        if (!seller) {
            throw new common_1.NotFoundException('Seller not found');
        }
        if (seller.userId === userId) {
            throw new common_1.ForbiddenException('Seller cannot review their own profile');
        }
    }
    async ensureProductCanBeReviewed(userId, productId, sellerId) {
        const product = await this.prisma.product.findUnique({
            where: { id: productId },
            select: {
                id: true,
                sellerId: true,
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
            throw new common_1.ForbiddenException('Seller cannot review their own product');
        }
    }
    async ensureCompletedPurchase(userId, productId, sellerId) {
        const purchase = await this.prisma.purchase.findFirst({
            where: {
                buyerId: userId,
                productId,
                sellerId,
                buyerConfirmedAt: {
                    not: null,
                },
                sellerConfirmedAt: {
                    not: null,
                },
            },
            select: { id: true },
        });
        if (!purchase) {
            throw new common_1.ConflictException('Buyer and seller must confirm the product handoff before review');
        }
    }
    handleUniqueReviewError(error, message) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError &&
            error.code === 'P2002') {
            throw new common_1.ConflictException(message);
        }
        throw error;
    }
    async filterVisibleReviews(reviews, productId, userId) {
        if (!userId) {
            const productReviews = await this.prisma.productReview.findMany({
                where: { productId },
                select: { userId: true },
            });
            const sellerReviews = await this.prisma.sellerReview.findMany({
                where: { productId: { not: null } },
                select: { userId: true, productId: true },
            });
            const reviewedUserIds = new Set(productReviews.map(r => r.userId));
            const sellerReviewedUserIds = new Set(sellerReviews.filter(r => r.productId === productId).map(r => r.userId));
            return reviews.filter(review => reviewedUserIds.has(review.userId) && sellerReviewedUserIds.has(review.userId));
        }
        const userSellerIds = await this.prisma.seller.findMany({
            where: { userId },
            select: { id: true },
        });
        const productSeller = await this.prisma.product.findUnique({
            where: { id: productId },
            select: { sellerId: true },
        });
        const isProductSeller = productSeller && userSellerIds.some(s => s.id === productSeller.sellerId);
        if (isProductSeller) {
            return reviews;
        }
        else {
            const productReviews = await this.prisma.productReview.findMany({
                where: { productId },
                select: { userId: true },
            });
            const sellerReviews = await this.prisma.sellerReview.findMany({
                where: { productId: { not: null } },
                select: { userId: true, productId: true },
            });
            const reviewedUserIds = new Set(productReviews.map(r => r.userId));
            const sellerReviewedUserIds = new Set(sellerReviews.filter(r => r.productId === productId).map(r => r.userId));
            return reviews.filter(review => review.userId === userId ||
                (reviewedUserIds.has(review.userId) && sellerReviewedUserIds.has(review.userId)));
        }
    }
    async filterVisibleSellerReviews(reviews, sellerId, userId) {
        if (!userId) {
            const sellerReviews = await this.prisma.sellerReview.findMany({
                where: { sellerId },
                select: { userId: true, productId: true },
            });
            const productReviews = await this.prisma.productReview.findMany({
                where: { sellerId },
                select: { userId: true, productId: true },
            });
            const reviewedUserIds = new Set(sellerReviews.map(r => r.userId));
            const buyerReviewedUserIds = new Set(productReviews.map(r => r.userId));
            return reviews.filter(review => reviewedUserIds.has(review.userId) && buyerReviewedUserIds.has(review.userId));
        }
        const userSellerIds = await this.prisma.seller.findMany({
            where: { userId },
            select: { id: true },
        });
        const isSeller = userSellerIds.some(s => s.id === sellerId);
        if (isSeller) {
            const sellerReviews = await this.prisma.sellerReview.findMany({
                where: { sellerId },
                select: { userId: true },
            });
            const productReviews = await this.prisma.productReview.findMany({
                where: { sellerId },
                select: { userId: true },
            });
            const reviewedUserIds = new Set(sellerReviews.map(r => r.userId));
            const buyerReviewedUserIds = new Set(productReviews.map(r => r.userId));
            return reviews.filter(review => reviewedUserIds.has(review.userId) && buyerReviewedUserIds.has(review.userId));
        }
        else {
            return reviews.filter(review => review.userId === userId || true);
        }
    }
};
exports.ReviewsService = ReviewsService;
exports.ReviewsService = ReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReviewsService);
//# sourceMappingURL=reviews.service.js.map
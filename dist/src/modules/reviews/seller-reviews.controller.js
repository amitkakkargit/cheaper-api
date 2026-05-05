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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerReviewsController = void 0;
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const create_seller_review_dto_1 = require("./dto/create-seller-review.dto");
const reviews_service_1 = require("./reviews.service");
let SellerReviewsController = class SellerReviewsController {
    constructor(reviewsService) {
        this.reviewsService = reviewsService;
    }
    create(user, createSellerReviewDto) {
        return this.reviewsService.createSellerReview(user.userId, createSellerReviewDto);
    }
    findBySeller(sellerId) {
        return this.reviewsService.findSellerReviews(sellerId);
    }
};
exports.SellerReviewsController = SellerReviewsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_seller_review_dto_1.CreateSellerReviewDto]),
    __metadata("design:returntype", void 0)
], SellerReviewsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':sellerId'),
    __param(0, (0, common_1.Param)('sellerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SellerReviewsController.prototype, "findBySeller", null);
exports.SellerReviewsController = SellerReviewsController = __decorate([
    (0, common_1.Controller)('seller-reviews'),
    __metadata("design:paramtypes", [reviews_service_1.ReviewsService])
], SellerReviewsController);
//# sourceMappingURL=seller-reviews.controller.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.ProductReviewScalarFieldEnum = exports.SellerReviewScalarFieldEnum = exports.PurchaseScalarFieldEnum = exports.ProductScalarFieldEnum = exports.SellerScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = require("@prisma/client/runtime/index-browser");
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Seller: 'Seller',
    Product: 'Product',
    Purchase: 'Purchase',
    SellerReview: 'SellerReview',
    ProductReview: 'ProductReview'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    phone: 'phone',
    name: 'name',
    createdAt: 'createdAt'
};
exports.SellerScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    name: 'name',
    location: 'location',
    bio: 'bio',
    avatarUrl: 'avatarUrl',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt'
};
exports.ProductScalarFieldEnum = {
    id: 'id',
    sellerId: 'sellerId',
    name: 'name',
    title: 'title',
    description: 'description',
    imageUrl: 'imageUrl',
    images: 'images',
    videoUrl: 'videoUrl',
    videoStory: 'videoStory',
    currentPrice: 'currentPrice',
    previousPrice: 'previousPrice',
    discountPercentage: 'discountPercentage',
    condition: 'condition',
    location: 'location',
    category: 'category',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt'
};
exports.PurchaseScalarFieldEnum = {
    id: 'id',
    productId: 'productId',
    buyerId: 'buyerId',
    sellerId: 'sellerId',
    buyerConfirmedAt: 'buyerConfirmedAt',
    sellerConfirmedAt: 'sellerConfirmedAt',
    createdAt: 'createdAt'
};
exports.SellerReviewScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    sellerId: 'sellerId',
    productId: 'productId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
};
exports.ProductReviewScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    sellerId: 'sellerId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map
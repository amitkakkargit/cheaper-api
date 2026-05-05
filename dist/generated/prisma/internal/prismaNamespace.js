"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.SupportTicketScalarFieldEnum = exports.BuyerReviewScalarFieldEnum = exports.ProductReviewScalarFieldEnum = exports.SellerReviewScalarFieldEnum = exports.PurchaseScalarFieldEnum = exports.ProductScalarFieldEnum = exports.SellerScalarFieldEnum = exports.OtpCodeScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = require("@prisma/client/runtime/client");
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.8.0",
    engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
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
    OtpCode: 'OtpCode',
    Seller: 'Seller',
    Product: 'Product',
    Purchase: 'Purchase',
    SellerReview: 'SellerReview',
    ProductReview: 'ProductReview',
    BuyerReview: 'BuyerReview',
    SupportTicket: 'SupportTicket'
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
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt'
};
exports.OtpCodeScalarFieldEnum = {
    id: 'id',
    channel: 'channel',
    target: 'target',
    code: 'code',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    createdAt: 'createdAt',
    userId: 'userId'
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
    createdAt: 'createdAt',
    sellerMarkedSoldAt: 'sellerMarkedSoldAt'
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
exports.BuyerReviewScalarFieldEnum = {
    id: 'id',
    reviewerId: 'reviewerId',
    buyerId: 'buyerId',
    productId: 'productId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
};
exports.SupportTicketScalarFieldEnum = {
    id: 'id',
    subject: 'subject',
    description: 'description',
    category: 'category',
    email: 'email',
    source: 'source',
    deviceInfo: 'deviceInfo',
    appVersion: 'appVersion',
    screenshotUrl: 'screenshotUrl',
    productId: 'productId',
    userId: 'userId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
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
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map
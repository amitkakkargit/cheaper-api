"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("../generated/prisma/client");
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error('DATABASE_URL is required');
}
const prisma = new client_1.PrismaClient({
    adapter: new adapter_pg_1.PrismaPg({ connectionString }),
});
const dataRoot = (0, node_path_1.join)(__dirname, '..', '..', 'cheaper', 'data');
function readJson(fileName) {
    return JSON.parse((0, node_fs_1.readFileSync)((0, node_path_1.join)(dataRoot, fileName), 'utf8'));
}
function locationToCoordinates(location) {
    const seed = Array.from(location).reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return {
        latitude: Number((8 + (seed % 2800) / 100).toFixed(6)),
        longitude: Number((68 + (seed % 2900) / 100).toFixed(6)),
    };
}
function ratingToInt(score) {
    return Math.min(5, Math.max(1, Math.round(score)));
}
async function main() {
    const sellers = readJson('sellers.json');
    const products = readJson('products.json');
    const sellerRatings = readJson('sellerRatings.json');
    const productRatings = readJson('productRatings.json');
    const buyer = await prisma.user.upsert({
        where: { email: 'buyer@example.com' },
        update: {},
        create: {
            email: 'buyer@example.com',
            name: 'Sample Buyer',
            phone: '+15550001001',
        },
    });
    await Promise.all(sellers.map(async (seller) => {
        const owner = await prisma.user.upsert({
            where: { email: `${seller.id}@seller.cheaper.local` },
            update: {
                name: seller.name,
            },
            create: {
                email: `${seller.id}@seller.cheaper.local`,
                name: seller.name,
            },
        });
        const coordinates = locationToCoordinates(seller.location);
        return prisma.seller.upsert({
            where: { id: seller.id },
            update: {
                userId: owner.id,
                name: seller.name,
                location: seller.location,
                bio: seller.bio,
                avatarUrl: seller.avatarUrl,
                ...coordinates,
            },
            create: {
                id: seller.id,
                userId: owner.id,
                name: seller.name,
                location: seller.location,
                bio: seller.bio,
                avatarUrl: seller.avatarUrl,
                ...coordinates,
            },
        });
    }));
    await Promise.all(products.map((product) => {
        const coordinates = locationToCoordinates(product.location);
        return prisma.product.upsert({
            where: { id: product.id },
            update: {
                sellerId: product.sellerId,
                name: product.title,
                title: product.title,
                description: product.description,
                imageUrl: product.imageUrl,
                images: product.images ?? [],
                videoUrl: product.videoUrl,
                videoStory: product.videoStory ?? '',
                currentPrice: product.currentPrice,
                previousPrice: product.previousPrice,
                discountPercentage: product.discountPercentage,
                condition: product.condition,
                location: product.location,
                category: product.category,
                ...coordinates,
            },
            create: {
                id: product.id,
                sellerId: product.sellerId,
                name: product.title,
                title: product.title,
                description: product.description,
                imageUrl: product.imageUrl,
                images: product.images ?? [],
                videoUrl: product.videoUrl,
                videoStory: product.videoStory ?? '',
                currentPrice: product.currentPrice,
                previousPrice: product.previousPrice,
                discountPercentage: product.discountPercentage,
                condition: product.condition,
                location: product.location,
                category: product.category,
                ...coordinates,
            },
        });
    }));
    for (const rating of productRatings) {
        const product = products.find((item) => item.id === rating.targetId);
        if (!product)
            continue;
        await prisma.purchase.upsert({
            where: {
                productId_buyerId: {
                    productId: product.id,
                    buyerId: buyer.id,
                },
            },
            update: {
                buyerConfirmedAt: new Date(),
                sellerConfirmedAt: new Date(),
            },
            create: {
                productId: product.id,
                sellerId: product.sellerId,
                buyerId: buyer.id,
                buyerConfirmedAt: new Date(),
                sellerConfirmedAt: new Date(),
            },
        });
        await prisma.productReview.upsert({
            where: {
                userId_productId: {
                    userId: buyer.id,
                    productId: product.id,
                },
            },
            update: {
                sellerId: product.sellerId,
                rating: ratingToInt(rating.score),
                comment: rating.review,
            },
            create: {
                userId: buyer.id,
                productId: product.id,
                sellerId: product.sellerId,
                rating: ratingToInt(rating.score),
                comment: rating.review,
            },
        });
    }
    for (const rating of sellerRatings) {
        const product = products.find((item) => item.sellerId === rating.targetId);
        if (!product)
            continue;
        await prisma.purchase.upsert({
            where: {
                productId_buyerId: {
                    productId: product.id,
                    buyerId: buyer.id,
                },
            },
            update: {
                buyerConfirmedAt: new Date(),
                sellerConfirmedAt: new Date(),
            },
            create: {
                productId: product.id,
                sellerId: product.sellerId,
                buyerId: buyer.id,
                buyerConfirmedAt: new Date(),
                sellerConfirmedAt: new Date(),
            },
        });
        await prisma.sellerReview.upsert({
            where: {
                userId_sellerId: {
                    userId: buyer.id,
                    sellerId: rating.targetId,
                },
            },
            update: {
                productId: product.id,
                rating: ratingToInt(rating.score),
                comment: rating.review,
            },
            create: {
                userId: buyer.id,
                sellerId: rating.targetId,
                productId: product.id,
                rating: ratingToInt(rating.score),
                comment: rating.review,
            },
        });
    }
}
main()
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map
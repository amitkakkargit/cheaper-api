import 'dotenv/config';

import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { PrismaPg } from '@prisma/adapter-pg';

import { PrismaClient } from '../generated/prisma/client';

type JsonSeller = {
  id: string;
  name: string;
  location: string;
  bio: string;
  avatarUrl: string;
};

type JsonProduct = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  images?: string[];
  videoUrl: string;
  videoStory?: string;
  currentPrice: number;
  previousPrice: number;
  discountPercentage: number;
  condition: string;
  location: string;
  category: string;
  sellerId: string;
};

type JsonRating = {
  id: string;
  targetId: string;
  score: number;
  review: string;
};

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is required');
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});

const dataRoot = join(__dirname, '..', '..', 'cheaper', 'data');

function readJson<T>(fileName: string): T {
  return JSON.parse(readFileSync(join(dataRoot, fileName), 'utf8')) as T;
}

function locationToCoordinates(location: string): { latitude: number; longitude: number } {
  const seed = Array.from(location).reduce((sum, char) => sum + char.charCodeAt(0), 0);

  return {
    latitude: Number((8 + (seed % 2800) / 100).toFixed(6)),
    longitude: Number((68 + (seed % 2900) / 100).toFixed(6)),
  };
}

function ratingToInt(score: number): number {
  return Math.min(5, Math.max(1, Math.round(score)));
}

function safeVideoUrl(videoUrl: string): string {
  if (videoUrl.includes('commondatastorage.googleapis.com')) {
    return '';
  }

  return videoUrl;
}

function safeImageUrl(imageUrl: string): string {
  if (imageUrl.includes('fakeimg.pl')) {
    return '';
  }

  return imageUrl;
}

function safeImages(images?: string[]): string[] {
  return (images ?? []).filter((image) => !image.includes('fakeimg.pl'));
}

async function main(): Promise<void> {
  const sellers = readJson<JsonSeller[]>('sellers.json');
  const products = readJson<JsonProduct[]>('products.json');
  const sellerRatings = readJson<JsonRating[]>('sellerRatings.json');
  const productRatings = readJson<JsonRating[]>('productRatings.json');

  const buyer = await prisma.user.upsert({
    where: { email: 'seeded-reviewer@cheaper.local' },
    update: {},
    create: {
      email: 'seeded-reviewer@cheaper.local',
      name: 'Seeded Reviewer',
    },
  });

  await Promise.all(
    sellers.map(async (seller) => {
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
    }),
  );

  await Promise.all(
    products.map((product) => {
      const coordinates = locationToCoordinates(product.location);

      return prisma.product.upsert({
        where: { id: product.id },
        update: {
          sellerId: product.sellerId,
          name: product.title,
          title: product.title,
          description: product.description,
          imageUrl: safeImageUrl(product.imageUrl),
          images: safeImages(product.images),
          videoUrl: safeVideoUrl(product.videoUrl),
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
          imageUrl: safeImageUrl(product.imageUrl),
          images: safeImages(product.images),
          videoUrl: safeVideoUrl(product.videoUrl),
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
    }),
  );

  for (const rating of productRatings) {
    const product = products.find((item) => item.id === rating.targetId);
    if (!product) continue;

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
    if (!product) continue;

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

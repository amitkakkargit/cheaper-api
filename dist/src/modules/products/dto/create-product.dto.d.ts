export declare class CreateProductDto {
    sellerId: string;
    title: string;
    description: string;
    imageUrl?: string;
    images?: string[];
    videoUrl?: string;
    videoStory?: string;
    currentPrice: number;
    previousPrice: number;
    discountPercentage: number;
    condition: string;
    location: string;
    category: string;
    latitude: number;
    longitude: number;
}

import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type SellerModel = runtime.Types.Result.DefaultSelection<Prisma.$SellerPayload>;
export type AggregateSeller = {
    _count: SellerCountAggregateOutputType | null;
    _avg: SellerAvgAggregateOutputType | null;
    _sum: SellerSumAggregateOutputType | null;
    _min: SellerMinAggregateOutputType | null;
    _max: SellerMaxAggregateOutputType | null;
};
export type SellerAvgAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
};
export type SellerSumAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
};
export type SellerMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    location: string | null;
    bio: string | null;
    avatarUrl: string | null;
    latitude: number | null;
    longitude: number | null;
    createdAt: Date | null;
};
export type SellerMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    location: string | null;
    bio: string | null;
    avatarUrl: string | null;
    latitude: number | null;
    longitude: number | null;
    createdAt: Date | null;
};
export type SellerCountAggregateOutputType = {
    id: number;
    userId: number;
    name: number;
    location: number;
    bio: number;
    avatarUrl: number;
    latitude: number;
    longitude: number;
    createdAt: number;
    _all: number;
};
export type SellerAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
};
export type SellerSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
};
export type SellerMinAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    location?: true;
    bio?: true;
    avatarUrl?: true;
    latitude?: true;
    longitude?: true;
    createdAt?: true;
};
export type SellerMaxAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    location?: true;
    bio?: true;
    avatarUrl?: true;
    latitude?: true;
    longitude?: true;
    createdAt?: true;
};
export type SellerCountAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    location?: true;
    bio?: true;
    avatarUrl?: true;
    latitude?: true;
    longitude?: true;
    createdAt?: true;
    _all?: true;
};
export type SellerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerWhereInput;
    orderBy?: Prisma.SellerOrderByWithRelationInput | Prisma.SellerOrderByWithRelationInput[];
    cursor?: Prisma.SellerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SellerCountAggregateInputType;
    _avg?: SellerAvgAggregateInputType;
    _sum?: SellerSumAggregateInputType;
    _min?: SellerMinAggregateInputType;
    _max?: SellerMaxAggregateInputType;
};
export type GetSellerAggregateType<T extends SellerAggregateArgs> = {
    [P in keyof T & keyof AggregateSeller]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSeller[P]> : Prisma.GetScalarType<T[P], AggregateSeller[P]>;
};
export type SellerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerWhereInput;
    orderBy?: Prisma.SellerOrderByWithAggregationInput | Prisma.SellerOrderByWithAggregationInput[];
    by: Prisma.SellerScalarFieldEnum[] | Prisma.SellerScalarFieldEnum;
    having?: Prisma.SellerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SellerCountAggregateInputType | true;
    _avg?: SellerAvgAggregateInputType;
    _sum?: SellerSumAggregateInputType;
    _min?: SellerMinAggregateInputType;
    _max?: SellerMaxAggregateInputType;
};
export type SellerGroupByOutputType = {
    id: string;
    userId: string;
    name: string;
    location: string;
    bio: string;
    avatarUrl: string;
    latitude: number;
    longitude: number;
    createdAt: Date;
    _count: SellerCountAggregateOutputType | null;
    _avg: SellerAvgAggregateOutputType | null;
    _sum: SellerSumAggregateOutputType | null;
    _min: SellerMinAggregateOutputType | null;
    _max: SellerMaxAggregateOutputType | null;
};
export type GetSellerGroupByPayload<T extends SellerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SellerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SellerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SellerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SellerGroupByOutputType[P]>;
}>>;
export type SellerWhereInput = {
    AND?: Prisma.SellerWhereInput | Prisma.SellerWhereInput[];
    OR?: Prisma.SellerWhereInput[];
    NOT?: Prisma.SellerWhereInput | Prisma.SellerWhereInput[];
    id?: Prisma.StringFilter<"Seller"> | string;
    userId?: Prisma.StringFilter<"Seller"> | string;
    name?: Prisma.StringFilter<"Seller"> | string;
    location?: Prisma.StringFilter<"Seller"> | string;
    bio?: Prisma.StringFilter<"Seller"> | string;
    avatarUrl?: Prisma.StringFilter<"Seller"> | string;
    latitude?: Prisma.FloatFilter<"Seller"> | number;
    longitude?: Prisma.FloatFilter<"Seller"> | number;
    createdAt?: Prisma.DateTimeFilter<"Seller"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    products?: Prisma.ProductListRelationFilter;
    reviews?: Prisma.SellerReviewListRelationFilter;
};
export type SellerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    products?: Prisma.ProductOrderByRelationAggregateInput;
    reviews?: Prisma.SellerReviewOrderByRelationAggregateInput;
};
export type SellerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SellerWhereInput | Prisma.SellerWhereInput[];
    OR?: Prisma.SellerWhereInput[];
    NOT?: Prisma.SellerWhereInput | Prisma.SellerWhereInput[];
    userId?: Prisma.StringFilter<"Seller"> | string;
    name?: Prisma.StringFilter<"Seller"> | string;
    location?: Prisma.StringFilter<"Seller"> | string;
    bio?: Prisma.StringFilter<"Seller"> | string;
    avatarUrl?: Prisma.StringFilter<"Seller"> | string;
    latitude?: Prisma.FloatFilter<"Seller"> | number;
    longitude?: Prisma.FloatFilter<"Seller"> | number;
    createdAt?: Prisma.DateTimeFilter<"Seller"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    products?: Prisma.ProductListRelationFilter;
    reviews?: Prisma.SellerReviewListRelationFilter;
}, "id">;
export type SellerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SellerCountOrderByAggregateInput;
    _avg?: Prisma.SellerAvgOrderByAggregateInput;
    _max?: Prisma.SellerMaxOrderByAggregateInput;
    _min?: Prisma.SellerMinOrderByAggregateInput;
    _sum?: Prisma.SellerSumOrderByAggregateInput;
};
export type SellerScalarWhereWithAggregatesInput = {
    AND?: Prisma.SellerScalarWhereWithAggregatesInput | Prisma.SellerScalarWhereWithAggregatesInput[];
    OR?: Prisma.SellerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SellerScalarWhereWithAggregatesInput | Prisma.SellerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Seller"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Seller"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Seller"> | string;
    location?: Prisma.StringWithAggregatesFilter<"Seller"> | string;
    bio?: Prisma.StringWithAggregatesFilter<"Seller"> | string;
    avatarUrl?: Prisma.StringWithAggregatesFilter<"Seller"> | string;
    latitude?: Prisma.FloatWithAggregatesFilter<"Seller"> | number;
    longitude?: Prisma.FloatWithAggregatesFilter<"Seller"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Seller"> | Date | string;
};
export type SellerCreateInput = {
    id?: string;
    name: string;
    location?: string;
    bio?: string;
    avatarUrl?: string;
    latitude: number;
    longitude: number;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSellersInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    reviews?: Prisma.SellerReviewCreateNestedManyWithoutSellerInput;
};
export type SellerUncheckedCreateInput = {
    id?: string;
    userId: string;
    name: string;
    location?: string;
    bio?: string;
    avatarUrl?: string;
    latitude: number;
    longitude: number;
    createdAt?: Date | string;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    reviews?: Prisma.SellerReviewUncheckedCreateNestedManyWithoutSellerInput;
};
export type SellerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSellersNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    reviews?: Prisma.SellerReviewUpdateManyWithoutSellerNestedInput;
};
export type SellerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    reviews?: Prisma.SellerReviewUncheckedUpdateManyWithoutSellerNestedInput;
};
export type SellerCreateManyInput = {
    id?: string;
    userId: string;
    name: string;
    location?: string;
    bio?: string;
    avatarUrl?: string;
    latitude: number;
    longitude: number;
    createdAt?: Date | string;
};
export type SellerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerListRelationFilter = {
    every?: Prisma.SellerWhereInput;
    some?: Prisma.SellerWhereInput;
    none?: Prisma.SellerWhereInput;
};
export type SellerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SellerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SellerAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type SellerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SellerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SellerSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type SellerScalarRelationFilter = {
    is?: Prisma.SellerWhereInput;
    isNot?: Prisma.SellerWhereInput;
};
export type SellerCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SellerCreateWithoutUserInput, Prisma.SellerUncheckedCreateWithoutUserInput> | Prisma.SellerCreateWithoutUserInput[] | Prisma.SellerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SellerCreateOrConnectWithoutUserInput | Prisma.SellerCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SellerCreateManyUserInputEnvelope;
    connect?: Prisma.SellerWhereUniqueInput | Prisma.SellerWhereUniqueInput[];
};
export type SellerUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SellerCreateWithoutUserInput, Prisma.SellerUncheckedCreateWithoutUserInput> | Prisma.SellerCreateWithoutUserInput[] | Prisma.SellerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SellerCreateOrConnectWithoutUserInput | Prisma.SellerCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SellerCreateManyUserInputEnvelope;
    connect?: Prisma.SellerWhereUniqueInput | Prisma.SellerWhereUniqueInput[];
};
export type SellerUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SellerCreateWithoutUserInput, Prisma.SellerUncheckedCreateWithoutUserInput> | Prisma.SellerCreateWithoutUserInput[] | Prisma.SellerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SellerCreateOrConnectWithoutUserInput | Prisma.SellerCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SellerUpsertWithWhereUniqueWithoutUserInput | Prisma.SellerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SellerCreateManyUserInputEnvelope;
    set?: Prisma.SellerWhereUniqueInput | Prisma.SellerWhereUniqueInput[];
    disconnect?: Prisma.SellerWhereUniqueInput | Prisma.SellerWhereUniqueInput[];
    delete?: Prisma.SellerWhereUniqueInput | Prisma.SellerWhereUniqueInput[];
    connect?: Prisma.SellerWhereUniqueInput | Prisma.SellerWhereUniqueInput[];
    update?: Prisma.SellerUpdateWithWhereUniqueWithoutUserInput | Prisma.SellerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SellerUpdateManyWithWhereWithoutUserInput | Prisma.SellerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SellerScalarWhereInput | Prisma.SellerScalarWhereInput[];
};
export type SellerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SellerCreateWithoutUserInput, Prisma.SellerUncheckedCreateWithoutUserInput> | Prisma.SellerCreateWithoutUserInput[] | Prisma.SellerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SellerCreateOrConnectWithoutUserInput | Prisma.SellerCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SellerUpsertWithWhereUniqueWithoutUserInput | Prisma.SellerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SellerCreateManyUserInputEnvelope;
    set?: Prisma.SellerWhereUniqueInput | Prisma.SellerWhereUniqueInput[];
    disconnect?: Prisma.SellerWhereUniqueInput | Prisma.SellerWhereUniqueInput[];
    delete?: Prisma.SellerWhereUniqueInput | Prisma.SellerWhereUniqueInput[];
    connect?: Prisma.SellerWhereUniqueInput | Prisma.SellerWhereUniqueInput[];
    update?: Prisma.SellerUpdateWithWhereUniqueWithoutUserInput | Prisma.SellerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SellerUpdateManyWithWhereWithoutUserInput | Prisma.SellerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SellerScalarWhereInput | Prisma.SellerScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type SellerCreateNestedOneWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.SellerCreateWithoutProductsInput, Prisma.SellerUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.SellerCreateOrConnectWithoutProductsInput;
    connect?: Prisma.SellerWhereUniqueInput;
};
export type SellerUpdateOneRequiredWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.SellerCreateWithoutProductsInput, Prisma.SellerUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.SellerCreateOrConnectWithoutProductsInput;
    upsert?: Prisma.SellerUpsertWithoutProductsInput;
    connect?: Prisma.SellerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SellerUpdateToOneWithWhereWithoutProductsInput, Prisma.SellerUpdateWithoutProductsInput>, Prisma.SellerUncheckedUpdateWithoutProductsInput>;
};
export type SellerCreateNestedOneWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.SellerCreateWithoutReviewsInput, Prisma.SellerUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.SellerCreateOrConnectWithoutReviewsInput;
    connect?: Prisma.SellerWhereUniqueInput;
};
export type SellerUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.SellerCreateWithoutReviewsInput, Prisma.SellerUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.SellerCreateOrConnectWithoutReviewsInput;
    upsert?: Prisma.SellerUpsertWithoutReviewsInput;
    connect?: Prisma.SellerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SellerUpdateToOneWithWhereWithoutReviewsInput, Prisma.SellerUpdateWithoutReviewsInput>, Prisma.SellerUncheckedUpdateWithoutReviewsInput>;
};
export type SellerCreateWithoutUserInput = {
    id?: string;
    name: string;
    location?: string;
    bio?: string;
    avatarUrl?: string;
    latitude: number;
    longitude: number;
    createdAt?: Date | string;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
    reviews?: Prisma.SellerReviewCreateNestedManyWithoutSellerInput;
};
export type SellerUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    location?: string;
    bio?: string;
    avatarUrl?: string;
    latitude: number;
    longitude: number;
    createdAt?: Date | string;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
    reviews?: Prisma.SellerReviewUncheckedCreateNestedManyWithoutSellerInput;
};
export type SellerCreateOrConnectWithoutUserInput = {
    where: Prisma.SellerWhereUniqueInput;
    create: Prisma.XOR<Prisma.SellerCreateWithoutUserInput, Prisma.SellerUncheckedCreateWithoutUserInput>;
};
export type SellerCreateManyUserInputEnvelope = {
    data: Prisma.SellerCreateManyUserInput | Prisma.SellerCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type SellerUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.SellerWhereUniqueInput;
    update: Prisma.XOR<Prisma.SellerUpdateWithoutUserInput, Prisma.SellerUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.SellerCreateWithoutUserInput, Prisma.SellerUncheckedCreateWithoutUserInput>;
};
export type SellerUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.SellerWhereUniqueInput;
    data: Prisma.XOR<Prisma.SellerUpdateWithoutUserInput, Prisma.SellerUncheckedUpdateWithoutUserInput>;
};
export type SellerUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.SellerScalarWhereInput;
    data: Prisma.XOR<Prisma.SellerUpdateManyMutationInput, Prisma.SellerUncheckedUpdateManyWithoutUserInput>;
};
export type SellerScalarWhereInput = {
    AND?: Prisma.SellerScalarWhereInput | Prisma.SellerScalarWhereInput[];
    OR?: Prisma.SellerScalarWhereInput[];
    NOT?: Prisma.SellerScalarWhereInput | Prisma.SellerScalarWhereInput[];
    id?: Prisma.StringFilter<"Seller"> | string;
    userId?: Prisma.StringFilter<"Seller"> | string;
    name?: Prisma.StringFilter<"Seller"> | string;
    location?: Prisma.StringFilter<"Seller"> | string;
    bio?: Prisma.StringFilter<"Seller"> | string;
    avatarUrl?: Prisma.StringFilter<"Seller"> | string;
    latitude?: Prisma.FloatFilter<"Seller"> | number;
    longitude?: Prisma.FloatFilter<"Seller"> | number;
    createdAt?: Prisma.DateTimeFilter<"Seller"> | Date | string;
};
export type SellerCreateWithoutProductsInput = {
    id?: string;
    name: string;
    location?: string;
    bio?: string;
    avatarUrl?: string;
    latitude: number;
    longitude: number;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSellersInput;
    reviews?: Prisma.SellerReviewCreateNestedManyWithoutSellerInput;
};
export type SellerUncheckedCreateWithoutProductsInput = {
    id?: string;
    userId: string;
    name: string;
    location?: string;
    bio?: string;
    avatarUrl?: string;
    latitude: number;
    longitude: number;
    createdAt?: Date | string;
    reviews?: Prisma.SellerReviewUncheckedCreateNestedManyWithoutSellerInput;
};
export type SellerCreateOrConnectWithoutProductsInput = {
    where: Prisma.SellerWhereUniqueInput;
    create: Prisma.XOR<Prisma.SellerCreateWithoutProductsInput, Prisma.SellerUncheckedCreateWithoutProductsInput>;
};
export type SellerUpsertWithoutProductsInput = {
    update: Prisma.XOR<Prisma.SellerUpdateWithoutProductsInput, Prisma.SellerUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.SellerCreateWithoutProductsInput, Prisma.SellerUncheckedCreateWithoutProductsInput>;
    where?: Prisma.SellerWhereInput;
};
export type SellerUpdateToOneWithWhereWithoutProductsInput = {
    where?: Prisma.SellerWhereInput;
    data: Prisma.XOR<Prisma.SellerUpdateWithoutProductsInput, Prisma.SellerUncheckedUpdateWithoutProductsInput>;
};
export type SellerUpdateWithoutProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSellersNestedInput;
    reviews?: Prisma.SellerReviewUpdateManyWithoutSellerNestedInput;
};
export type SellerUncheckedUpdateWithoutProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: Prisma.SellerReviewUncheckedUpdateManyWithoutSellerNestedInput;
};
export type SellerCreateWithoutReviewsInput = {
    id?: string;
    name: string;
    location?: string;
    bio?: string;
    avatarUrl?: string;
    latitude: number;
    longitude: number;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSellersInput;
    products?: Prisma.ProductCreateNestedManyWithoutSellerInput;
};
export type SellerUncheckedCreateWithoutReviewsInput = {
    id?: string;
    userId: string;
    name: string;
    location?: string;
    bio?: string;
    avatarUrl?: string;
    latitude: number;
    longitude: number;
    createdAt?: Date | string;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSellerInput;
};
export type SellerCreateOrConnectWithoutReviewsInput = {
    where: Prisma.SellerWhereUniqueInput;
    create: Prisma.XOR<Prisma.SellerCreateWithoutReviewsInput, Prisma.SellerUncheckedCreateWithoutReviewsInput>;
};
export type SellerUpsertWithoutReviewsInput = {
    update: Prisma.XOR<Prisma.SellerUpdateWithoutReviewsInput, Prisma.SellerUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.SellerCreateWithoutReviewsInput, Prisma.SellerUncheckedCreateWithoutReviewsInput>;
    where?: Prisma.SellerWhereInput;
};
export type SellerUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Prisma.SellerWhereInput;
    data: Prisma.XOR<Prisma.SellerUpdateWithoutReviewsInput, Prisma.SellerUncheckedUpdateWithoutReviewsInput>;
};
export type SellerUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSellersNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
};
export type SellerUncheckedUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
};
export type SellerCreateManyUserInput = {
    id?: string;
    name: string;
    location?: string;
    bio?: string;
    avatarUrl?: string;
    latitude: number;
    longitude: number;
    createdAt?: Date | string;
};
export type SellerUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    products?: Prisma.ProductUpdateManyWithoutSellerNestedInput;
    reviews?: Prisma.SellerReviewUpdateManyWithoutSellerNestedInput;
};
export type SellerUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSellerNestedInput;
    reviews?: Prisma.SellerReviewUncheckedUpdateManyWithoutSellerNestedInput;
};
export type SellerUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerCountOutputType = {
    products: number;
    reviews: number;
};
export type SellerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | SellerCountOutputTypeCountProductsArgs;
    reviews?: boolean | SellerCountOutputTypeCountReviewsArgs;
};
export type SellerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerCountOutputTypeSelect<ExtArgs> | null;
};
export type SellerCountOutputTypeCountProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
};
export type SellerCountOutputTypeCountReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerReviewWhereInput;
};
export type SellerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    location?: boolean;
    bio?: boolean;
    avatarUrl?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    products?: boolean | Prisma.Seller$productsArgs<ExtArgs>;
    reviews?: boolean | Prisma.Seller$reviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.SellerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["seller"]>;
export type SellerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    location?: boolean;
    bio?: boolean;
    avatarUrl?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["seller"]>;
export type SellerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    location?: boolean;
    bio?: boolean;
    avatarUrl?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["seller"]>;
export type SellerSelectScalar = {
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    location?: boolean;
    bio?: boolean;
    avatarUrl?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    createdAt?: boolean;
};
export type SellerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "name" | "location" | "bio" | "avatarUrl" | "latitude" | "longitude" | "createdAt", ExtArgs["result"]["seller"]>;
export type SellerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    products?: boolean | Prisma.Seller$productsArgs<ExtArgs>;
    reviews?: boolean | Prisma.Seller$reviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.SellerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SellerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SellerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $SellerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Seller";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        products: Prisma.$ProductPayload<ExtArgs>[];
        reviews: Prisma.$SellerReviewPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        name: string;
        location: string;
        bio: string;
        avatarUrl: string;
        latitude: number;
        longitude: number;
        createdAt: Date;
    }, ExtArgs["result"]["seller"]>;
    composites: {};
};
export type SellerGetPayload<S extends boolean | null | undefined | SellerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SellerPayload, S>;
export type SellerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SellerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SellerCountAggregateInputType | true;
};
export interface SellerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Seller'];
        meta: {
            name: 'Seller';
        };
    };
    findUnique<T extends SellerFindUniqueArgs>(args: Prisma.SelectSubset<T, SellerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SellerClient<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SellerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SellerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SellerClient<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SellerFindFirstArgs>(args?: Prisma.SelectSubset<T, SellerFindFirstArgs<ExtArgs>>): Prisma.Prisma__SellerClient<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SellerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SellerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SellerClient<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SellerFindManyArgs>(args?: Prisma.SelectSubset<T, SellerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SellerCreateArgs>(args: Prisma.SelectSubset<T, SellerCreateArgs<ExtArgs>>): Prisma.Prisma__SellerClient<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SellerCreateManyArgs>(args?: Prisma.SelectSubset<T, SellerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SellerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SellerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SellerDeleteArgs>(args: Prisma.SelectSubset<T, SellerDeleteArgs<ExtArgs>>): Prisma.Prisma__SellerClient<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SellerUpdateArgs>(args: Prisma.SelectSubset<T, SellerUpdateArgs<ExtArgs>>): Prisma.Prisma__SellerClient<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SellerDeleteManyArgs>(args?: Prisma.SelectSubset<T, SellerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SellerUpdateManyArgs>(args: Prisma.SelectSubset<T, SellerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SellerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SellerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SellerUpsertArgs>(args: Prisma.SelectSubset<T, SellerUpsertArgs<ExtArgs>>): Prisma.Prisma__SellerClient<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SellerCountArgs>(args?: Prisma.Subset<T, SellerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SellerCountAggregateOutputType> : number>;
    aggregate<T extends SellerAggregateArgs>(args: Prisma.Subset<T, SellerAggregateArgs>): Prisma.PrismaPromise<GetSellerAggregateType<T>>;
    groupBy<T extends SellerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SellerGroupByArgs['orderBy'];
    } : {
        orderBy?: SellerGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SellerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SellerFieldRefs;
}
export interface Prisma__SellerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    products<T extends Prisma.Seller$productsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Seller$productsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reviews<T extends Prisma.Seller$reviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Seller$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SellerFieldRefs {
    readonly id: Prisma.FieldRef<"Seller", 'String'>;
    readonly userId: Prisma.FieldRef<"Seller", 'String'>;
    readonly name: Prisma.FieldRef<"Seller", 'String'>;
    readonly location: Prisma.FieldRef<"Seller", 'String'>;
    readonly bio: Prisma.FieldRef<"Seller", 'String'>;
    readonly avatarUrl: Prisma.FieldRef<"Seller", 'String'>;
    readonly latitude: Prisma.FieldRef<"Seller", 'Float'>;
    readonly longitude: Prisma.FieldRef<"Seller", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"Seller", 'DateTime'>;
}
export type SellerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelect<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    include?: Prisma.SellerInclude<ExtArgs> | null;
    where: Prisma.SellerWhereUniqueInput;
};
export type SellerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelect<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    include?: Prisma.SellerInclude<ExtArgs> | null;
    where: Prisma.SellerWhereUniqueInput;
};
export type SellerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelect<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    include?: Prisma.SellerInclude<ExtArgs> | null;
    where?: Prisma.SellerWhereInput;
    orderBy?: Prisma.SellerOrderByWithRelationInput | Prisma.SellerOrderByWithRelationInput[];
    cursor?: Prisma.SellerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SellerScalarFieldEnum | Prisma.SellerScalarFieldEnum[];
};
export type SellerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelect<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    include?: Prisma.SellerInclude<ExtArgs> | null;
    where?: Prisma.SellerWhereInput;
    orderBy?: Prisma.SellerOrderByWithRelationInput | Prisma.SellerOrderByWithRelationInput[];
    cursor?: Prisma.SellerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SellerScalarFieldEnum | Prisma.SellerScalarFieldEnum[];
};
export type SellerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelect<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    include?: Prisma.SellerInclude<ExtArgs> | null;
    where?: Prisma.SellerWhereInput;
    orderBy?: Prisma.SellerOrderByWithRelationInput | Prisma.SellerOrderByWithRelationInput[];
    cursor?: Prisma.SellerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SellerScalarFieldEnum | Prisma.SellerScalarFieldEnum[];
};
export type SellerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelect<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    include?: Prisma.SellerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SellerCreateInput, Prisma.SellerUncheckedCreateInput>;
};
export type SellerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SellerCreateManyInput | Prisma.SellerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SellerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    data: Prisma.SellerCreateManyInput | Prisma.SellerCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SellerIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SellerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelect<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    include?: Prisma.SellerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SellerUpdateInput, Prisma.SellerUncheckedUpdateInput>;
    where: Prisma.SellerWhereUniqueInput;
};
export type SellerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SellerUpdateManyMutationInput, Prisma.SellerUncheckedUpdateManyInput>;
    where?: Prisma.SellerWhereInput;
    limit?: number;
};
export type SellerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SellerUpdateManyMutationInput, Prisma.SellerUncheckedUpdateManyInput>;
    where?: Prisma.SellerWhereInput;
    limit?: number;
    include?: Prisma.SellerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SellerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelect<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    include?: Prisma.SellerInclude<ExtArgs> | null;
    where: Prisma.SellerWhereUniqueInput;
    create: Prisma.XOR<Prisma.SellerCreateInput, Prisma.SellerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SellerUpdateInput, Prisma.SellerUncheckedUpdateInput>;
};
export type SellerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelect<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    include?: Prisma.SellerInclude<ExtArgs> | null;
    where: Prisma.SellerWhereUniqueInput;
};
export type SellerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerWhereInput;
    limit?: number;
};
export type Seller$productsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type Seller$reviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerReviewSelect<ExtArgs> | null;
    omit?: Prisma.SellerReviewOmit<ExtArgs> | null;
    include?: Prisma.SellerReviewInclude<ExtArgs> | null;
    where?: Prisma.SellerReviewWhereInput;
    orderBy?: Prisma.SellerReviewOrderByWithRelationInput | Prisma.SellerReviewOrderByWithRelationInput[];
    cursor?: Prisma.SellerReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SellerReviewScalarFieldEnum | Prisma.SellerReviewScalarFieldEnum[];
};
export type SellerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerSelect<ExtArgs> | null;
    omit?: Prisma.SellerOmit<ExtArgs> | null;
    include?: Prisma.SellerInclude<ExtArgs> | null;
};

import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ProductReviewModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductReviewPayload>;
export type AggregateProductReview = {
    _count: ProductReviewCountAggregateOutputType | null;
    _avg: ProductReviewAvgAggregateOutputType | null;
    _sum: ProductReviewSumAggregateOutputType | null;
    _min: ProductReviewMinAggregateOutputType | null;
    _max: ProductReviewMaxAggregateOutputType | null;
};
export type ProductReviewAvgAggregateOutputType = {
    rating: number | null;
};
export type ProductReviewSumAggregateOutputType = {
    rating: number | null;
};
export type ProductReviewMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    productId: string | null;
    sellerId: string | null;
    rating: number | null;
    comment: string | null;
    createdAt: Date | null;
};
export type ProductReviewMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    productId: string | null;
    sellerId: string | null;
    rating: number | null;
    comment: string | null;
    createdAt: Date | null;
};
export type ProductReviewCountAggregateOutputType = {
    id: number;
    userId: number;
    productId: number;
    sellerId: number;
    rating: number;
    comment: number;
    createdAt: number;
    _all: number;
};
export type ProductReviewAvgAggregateInputType = {
    rating?: true;
};
export type ProductReviewSumAggregateInputType = {
    rating?: true;
};
export type ProductReviewMinAggregateInputType = {
    id?: true;
    userId?: true;
    productId?: true;
    sellerId?: true;
    rating?: true;
    comment?: true;
    createdAt?: true;
};
export type ProductReviewMaxAggregateInputType = {
    id?: true;
    userId?: true;
    productId?: true;
    sellerId?: true;
    rating?: true;
    comment?: true;
    createdAt?: true;
};
export type ProductReviewCountAggregateInputType = {
    id?: true;
    userId?: true;
    productId?: true;
    sellerId?: true;
    rating?: true;
    comment?: true;
    createdAt?: true;
    _all?: true;
};
export type ProductReviewAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductReviewWhereInput;
    orderBy?: Prisma.ProductReviewOrderByWithRelationInput | Prisma.ProductReviewOrderByWithRelationInput[];
    cursor?: Prisma.ProductReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductReviewCountAggregateInputType;
    _avg?: ProductReviewAvgAggregateInputType;
    _sum?: ProductReviewSumAggregateInputType;
    _min?: ProductReviewMinAggregateInputType;
    _max?: ProductReviewMaxAggregateInputType;
};
export type GetProductReviewAggregateType<T extends ProductReviewAggregateArgs> = {
    [P in keyof T & keyof AggregateProductReview]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductReview[P]> : Prisma.GetScalarType<T[P], AggregateProductReview[P]>;
};
export type ProductReviewGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductReviewWhereInput;
    orderBy?: Prisma.ProductReviewOrderByWithAggregationInput | Prisma.ProductReviewOrderByWithAggregationInput[];
    by: Prisma.ProductReviewScalarFieldEnum[] | Prisma.ProductReviewScalarFieldEnum;
    having?: Prisma.ProductReviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductReviewCountAggregateInputType | true;
    _avg?: ProductReviewAvgAggregateInputType;
    _sum?: ProductReviewSumAggregateInputType;
    _min?: ProductReviewMinAggregateInputType;
    _max?: ProductReviewMaxAggregateInputType;
};
export type ProductReviewGroupByOutputType = {
    id: string;
    userId: string;
    productId: string;
    sellerId: string | null;
    rating: number;
    comment: string | null;
    createdAt: Date;
    _count: ProductReviewCountAggregateOutputType | null;
    _avg: ProductReviewAvgAggregateOutputType | null;
    _sum: ProductReviewSumAggregateOutputType | null;
    _min: ProductReviewMinAggregateOutputType | null;
    _max: ProductReviewMaxAggregateOutputType | null;
};
export type GetProductReviewGroupByPayload<T extends ProductReviewGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductReviewGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductReviewGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductReviewGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductReviewGroupByOutputType[P]>;
}>>;
export type ProductReviewWhereInput = {
    AND?: Prisma.ProductReviewWhereInput | Prisma.ProductReviewWhereInput[];
    OR?: Prisma.ProductReviewWhereInput[];
    NOT?: Prisma.ProductReviewWhereInput | Prisma.ProductReviewWhereInput[];
    id?: Prisma.StringFilter<"ProductReview"> | string;
    userId?: Prisma.StringFilter<"ProductReview"> | string;
    productId?: Prisma.StringFilter<"ProductReview"> | string;
    sellerId?: Prisma.StringNullableFilter<"ProductReview"> | string | null;
    rating?: Prisma.IntFilter<"ProductReview"> | number;
    comment?: Prisma.StringNullableFilter<"ProductReview"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProductReview"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
};
export type ProductReviewOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    product?: Prisma.ProductOrderByWithRelationInput;
};
export type ProductReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_productId?: Prisma.ProductReviewUserIdProductIdCompoundUniqueInput;
    AND?: Prisma.ProductReviewWhereInput | Prisma.ProductReviewWhereInput[];
    OR?: Prisma.ProductReviewWhereInput[];
    NOT?: Prisma.ProductReviewWhereInput | Prisma.ProductReviewWhereInput[];
    userId?: Prisma.StringFilter<"ProductReview"> | string;
    productId?: Prisma.StringFilter<"ProductReview"> | string;
    sellerId?: Prisma.StringNullableFilter<"ProductReview"> | string | null;
    rating?: Prisma.IntFilter<"ProductReview"> | number;
    comment?: Prisma.StringNullableFilter<"ProductReview"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProductReview"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
}, "id" | "userId_productId">;
export type ProductReviewOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ProductReviewCountOrderByAggregateInput;
    _avg?: Prisma.ProductReviewAvgOrderByAggregateInput;
    _max?: Prisma.ProductReviewMaxOrderByAggregateInput;
    _min?: Prisma.ProductReviewMinOrderByAggregateInput;
    _sum?: Prisma.ProductReviewSumOrderByAggregateInput;
};
export type ProductReviewScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductReviewScalarWhereWithAggregatesInput | Prisma.ProductReviewScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductReviewScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductReviewScalarWhereWithAggregatesInput | Prisma.ProductReviewScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProductReview"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"ProductReview"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"ProductReview"> | string;
    sellerId?: Prisma.StringNullableWithAggregatesFilter<"ProductReview"> | string | null;
    rating?: Prisma.IntWithAggregatesFilter<"ProductReview"> | number;
    comment?: Prisma.StringNullableWithAggregatesFilter<"ProductReview"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProductReview"> | Date | string;
};
export type ProductReviewCreateInput = {
    id?: string;
    sellerId?: string | null;
    rating: number;
    comment?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutProductReviewsInput;
    product: Prisma.ProductCreateNestedOneWithoutReviewsInput;
};
export type ProductReviewUncheckedCreateInput = {
    id?: string;
    userId: string;
    productId: string;
    sellerId?: string | null;
    rating: number;
    comment?: string | null;
    createdAt?: Date | string;
};
export type ProductReviewUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProductReviewsNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutReviewsNestedInput;
};
export type ProductReviewUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewCreateManyInput = {
    id?: string;
    userId: string;
    productId: string;
    sellerId?: string | null;
    rating: number;
    comment?: string | null;
    createdAt?: Date | string;
};
export type ProductReviewUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewListRelationFilter = {
    every?: Prisma.ProductReviewWhereInput;
    some?: Prisma.ProductReviewWhereInput;
    none?: Prisma.ProductReviewWhereInput;
};
export type ProductReviewOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductReviewUserIdProductIdCompoundUniqueInput = {
    userId: string;
    productId: string;
};
export type ProductReviewCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProductReviewAvgOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
};
export type ProductReviewMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProductReviewMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProductReviewSumOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
};
export type ProductReviewCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutUserInput, Prisma.ProductReviewUncheckedCreateWithoutUserInput> | Prisma.ProductReviewCreateWithoutUserInput[] | Prisma.ProductReviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutUserInput | Prisma.ProductReviewCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ProductReviewCreateManyUserInputEnvelope;
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
};
export type ProductReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutUserInput, Prisma.ProductReviewUncheckedCreateWithoutUserInput> | Prisma.ProductReviewCreateWithoutUserInput[] | Prisma.ProductReviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutUserInput | Prisma.ProductReviewCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ProductReviewCreateManyUserInputEnvelope;
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
};
export type ProductReviewUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutUserInput, Prisma.ProductReviewUncheckedCreateWithoutUserInput> | Prisma.ProductReviewCreateWithoutUserInput[] | Prisma.ProductReviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutUserInput | Prisma.ProductReviewCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ProductReviewUpsertWithWhereUniqueWithoutUserInput | Prisma.ProductReviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ProductReviewCreateManyUserInputEnvelope;
    set?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    disconnect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    delete?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    update?: Prisma.ProductReviewUpdateWithWhereUniqueWithoutUserInput | Prisma.ProductReviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ProductReviewUpdateManyWithWhereWithoutUserInput | Prisma.ProductReviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ProductReviewScalarWhereInput | Prisma.ProductReviewScalarWhereInput[];
};
export type ProductReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutUserInput, Prisma.ProductReviewUncheckedCreateWithoutUserInput> | Prisma.ProductReviewCreateWithoutUserInput[] | Prisma.ProductReviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutUserInput | Prisma.ProductReviewCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ProductReviewUpsertWithWhereUniqueWithoutUserInput | Prisma.ProductReviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ProductReviewCreateManyUserInputEnvelope;
    set?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    disconnect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    delete?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    update?: Prisma.ProductReviewUpdateWithWhereUniqueWithoutUserInput | Prisma.ProductReviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ProductReviewUpdateManyWithWhereWithoutUserInput | Prisma.ProductReviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ProductReviewScalarWhereInput | Prisma.ProductReviewScalarWhereInput[];
};
export type ProductReviewCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutProductInput, Prisma.ProductReviewUncheckedCreateWithoutProductInput> | Prisma.ProductReviewCreateWithoutProductInput[] | Prisma.ProductReviewUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutProductInput | Prisma.ProductReviewCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ProductReviewCreateManyProductInputEnvelope;
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
};
export type ProductReviewUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutProductInput, Prisma.ProductReviewUncheckedCreateWithoutProductInput> | Prisma.ProductReviewCreateWithoutProductInput[] | Prisma.ProductReviewUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutProductInput | Prisma.ProductReviewCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ProductReviewCreateManyProductInputEnvelope;
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
};
export type ProductReviewUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutProductInput, Prisma.ProductReviewUncheckedCreateWithoutProductInput> | Prisma.ProductReviewCreateWithoutProductInput[] | Prisma.ProductReviewUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutProductInput | Prisma.ProductReviewCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ProductReviewUpsertWithWhereUniqueWithoutProductInput | Prisma.ProductReviewUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ProductReviewCreateManyProductInputEnvelope;
    set?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    disconnect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    delete?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    update?: Prisma.ProductReviewUpdateWithWhereUniqueWithoutProductInput | Prisma.ProductReviewUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ProductReviewUpdateManyWithWhereWithoutProductInput | Prisma.ProductReviewUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ProductReviewScalarWhereInput | Prisma.ProductReviewScalarWhereInput[];
};
export type ProductReviewUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutProductInput, Prisma.ProductReviewUncheckedCreateWithoutProductInput> | Prisma.ProductReviewCreateWithoutProductInput[] | Prisma.ProductReviewUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutProductInput | Prisma.ProductReviewCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ProductReviewUpsertWithWhereUniqueWithoutProductInput | Prisma.ProductReviewUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ProductReviewCreateManyProductInputEnvelope;
    set?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    disconnect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    delete?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    update?: Prisma.ProductReviewUpdateWithWhereUniqueWithoutProductInput | Prisma.ProductReviewUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ProductReviewUpdateManyWithWhereWithoutProductInput | Prisma.ProductReviewUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ProductReviewScalarWhereInput | Prisma.ProductReviewScalarWhereInput[];
};
export type ProductReviewCreateWithoutUserInput = {
    id?: string;
    sellerId?: string | null;
    rating: number;
    comment?: string | null;
    createdAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutReviewsInput;
};
export type ProductReviewUncheckedCreateWithoutUserInput = {
    id?: string;
    productId: string;
    sellerId?: string | null;
    rating: number;
    comment?: string | null;
    createdAt?: Date | string;
};
export type ProductReviewCreateOrConnectWithoutUserInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductReviewCreateWithoutUserInput, Prisma.ProductReviewUncheckedCreateWithoutUserInput>;
};
export type ProductReviewCreateManyUserInputEnvelope = {
    data: Prisma.ProductReviewCreateManyUserInput | Prisma.ProductReviewCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ProductReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductReviewUpdateWithoutUserInput, Prisma.ProductReviewUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ProductReviewCreateWithoutUserInput, Prisma.ProductReviewUncheckedCreateWithoutUserInput>;
};
export type ProductReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductReviewUpdateWithoutUserInput, Prisma.ProductReviewUncheckedUpdateWithoutUserInput>;
};
export type ProductReviewUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ProductReviewScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductReviewUpdateManyMutationInput, Prisma.ProductReviewUncheckedUpdateManyWithoutUserInput>;
};
export type ProductReviewScalarWhereInput = {
    AND?: Prisma.ProductReviewScalarWhereInput | Prisma.ProductReviewScalarWhereInput[];
    OR?: Prisma.ProductReviewScalarWhereInput[];
    NOT?: Prisma.ProductReviewScalarWhereInput | Prisma.ProductReviewScalarWhereInput[];
    id?: Prisma.StringFilter<"ProductReview"> | string;
    userId?: Prisma.StringFilter<"ProductReview"> | string;
    productId?: Prisma.StringFilter<"ProductReview"> | string;
    sellerId?: Prisma.StringNullableFilter<"ProductReview"> | string | null;
    rating?: Prisma.IntFilter<"ProductReview"> | number;
    comment?: Prisma.StringNullableFilter<"ProductReview"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProductReview"> | Date | string;
};
export type ProductReviewCreateWithoutProductInput = {
    id?: string;
    sellerId?: string | null;
    rating: number;
    comment?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutProductReviewsInput;
};
export type ProductReviewUncheckedCreateWithoutProductInput = {
    id?: string;
    userId: string;
    sellerId?: string | null;
    rating: number;
    comment?: string | null;
    createdAt?: Date | string;
};
export type ProductReviewCreateOrConnectWithoutProductInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductReviewCreateWithoutProductInput, Prisma.ProductReviewUncheckedCreateWithoutProductInput>;
};
export type ProductReviewCreateManyProductInputEnvelope = {
    data: Prisma.ProductReviewCreateManyProductInput | Prisma.ProductReviewCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type ProductReviewUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductReviewUpdateWithoutProductInput, Prisma.ProductReviewUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.ProductReviewCreateWithoutProductInput, Prisma.ProductReviewUncheckedCreateWithoutProductInput>;
};
export type ProductReviewUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductReviewUpdateWithoutProductInput, Prisma.ProductReviewUncheckedUpdateWithoutProductInput>;
};
export type ProductReviewUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.ProductReviewScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductReviewUpdateManyMutationInput, Prisma.ProductReviewUncheckedUpdateManyWithoutProductInput>;
};
export type ProductReviewCreateManyUserInput = {
    id?: string;
    productId: string;
    sellerId?: string | null;
    rating: number;
    comment?: string | null;
    createdAt?: Date | string;
};
export type ProductReviewUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutReviewsNestedInput;
};
export type ProductReviewUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewCreateManyProductInput = {
    id?: string;
    userId: string;
    sellerId?: string | null;
    rating: number;
    comment?: string | null;
    createdAt?: Date | string;
};
export type ProductReviewUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutProductReviewsNestedInput;
};
export type ProductReviewUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    productId?: boolean;
    sellerId?: boolean;
    rating?: boolean;
    comment?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productReview"]>;
export type ProductReviewSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    productId?: boolean;
    sellerId?: boolean;
    rating?: boolean;
    comment?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productReview"]>;
export type ProductReviewSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    productId?: boolean;
    sellerId?: boolean;
    rating?: boolean;
    comment?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productReview"]>;
export type ProductReviewSelectScalar = {
    id?: boolean;
    userId?: boolean;
    productId?: boolean;
    sellerId?: boolean;
    rating?: boolean;
    comment?: boolean;
    createdAt?: boolean;
};
export type ProductReviewOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "productId" | "sellerId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["productReview"]>;
export type ProductReviewInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type ProductReviewIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type ProductReviewIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type $ProductReviewPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProductReview";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        productId: string;
        sellerId: string | null;
        rating: number;
        comment: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["productReview"]>;
    composites: {};
};
export type ProductReviewGetPayload<S extends boolean | null | undefined | ProductReviewDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload, S>;
export type ProductReviewCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductReviewCountAggregateInputType | true;
};
export interface ProductReviewDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProductReview'];
        meta: {
            name: 'ProductReview';
        };
    };
    findUnique<T extends ProductReviewFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductReviewFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductReviewClient<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductReviewFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductReviewClient<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductReviewFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductReviewFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductReviewClient<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductReviewFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductReviewClient<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductReviewFindManyArgs>(args?: Prisma.SelectSubset<T, ProductReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductReviewCreateArgs>(args: Prisma.SelectSubset<T, ProductReviewCreateArgs<ExtArgs>>): Prisma.Prisma__ProductReviewClient<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductReviewCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductReviewCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductReviewDeleteArgs>(args: Prisma.SelectSubset<T, ProductReviewDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductReviewClient<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductReviewUpdateArgs>(args: Prisma.SelectSubset<T, ProductReviewUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductReviewClient<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductReviewDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductReviewUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductReviewUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductReviewUpsertArgs>(args: Prisma.SelectSubset<T, ProductReviewUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductReviewClient<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductReviewCountArgs>(args?: Prisma.Subset<T, ProductReviewCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductReviewCountAggregateOutputType> : number>;
    aggregate<T extends ProductReviewAggregateArgs>(args: Prisma.Subset<T, ProductReviewAggregateArgs>): Prisma.PrismaPromise<GetProductReviewAggregateType<T>>;
    groupBy<T extends ProductReviewGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductReviewGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductReviewGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductReviewFieldRefs;
}
export interface Prisma__ProductReviewClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductReviewFieldRefs {
    readonly id: Prisma.FieldRef<"ProductReview", 'String'>;
    readonly userId: Prisma.FieldRef<"ProductReview", 'String'>;
    readonly productId: Prisma.FieldRef<"ProductReview", 'String'>;
    readonly sellerId: Prisma.FieldRef<"ProductReview", 'String'>;
    readonly rating: Prisma.FieldRef<"ProductReview", 'Int'>;
    readonly comment: Prisma.FieldRef<"ProductReview", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ProductReview", 'DateTime'>;
}
export type ProductReviewFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    where: Prisma.ProductReviewWhereUniqueInput;
};
export type ProductReviewFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    where: Prisma.ProductReviewWhereUniqueInput;
};
export type ProductReviewFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    where?: Prisma.ProductReviewWhereInput;
    orderBy?: Prisma.ProductReviewOrderByWithRelationInput | Prisma.ProductReviewOrderByWithRelationInput[];
    cursor?: Prisma.ProductReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductReviewScalarFieldEnum | Prisma.ProductReviewScalarFieldEnum[];
};
export type ProductReviewFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    where?: Prisma.ProductReviewWhereInput;
    orderBy?: Prisma.ProductReviewOrderByWithRelationInput | Prisma.ProductReviewOrderByWithRelationInput[];
    cursor?: Prisma.ProductReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductReviewScalarFieldEnum | Prisma.ProductReviewScalarFieldEnum[];
};
export type ProductReviewFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    where?: Prisma.ProductReviewWhereInput;
    orderBy?: Prisma.ProductReviewOrderByWithRelationInput | Prisma.ProductReviewOrderByWithRelationInput[];
    cursor?: Prisma.ProductReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductReviewScalarFieldEnum | Prisma.ProductReviewScalarFieldEnum[];
};
export type ProductReviewCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductReviewCreateInput, Prisma.ProductReviewUncheckedCreateInput>;
};
export type ProductReviewCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductReviewCreateManyInput | Prisma.ProductReviewCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductReviewCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductReviewSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    data: Prisma.ProductReviewCreateManyInput | Prisma.ProductReviewCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductReviewIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductReviewUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductReviewUpdateInput, Prisma.ProductReviewUncheckedUpdateInput>;
    where: Prisma.ProductReviewWhereUniqueInput;
};
export type ProductReviewUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductReviewUpdateManyMutationInput, Prisma.ProductReviewUncheckedUpdateManyInput>;
    where?: Prisma.ProductReviewWhereInput;
    limit?: number;
};
export type ProductReviewUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductReviewSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductReviewUpdateManyMutationInput, Prisma.ProductReviewUncheckedUpdateManyInput>;
    where?: Prisma.ProductReviewWhereInput;
    limit?: number;
    include?: Prisma.ProductReviewIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductReviewUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    where: Prisma.ProductReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductReviewCreateInput, Prisma.ProductReviewUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductReviewUpdateInput, Prisma.ProductReviewUncheckedUpdateInput>;
};
export type ProductReviewDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    where: Prisma.ProductReviewWhereUniqueInput;
};
export type ProductReviewDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductReviewWhereInput;
    limit?: number;
};
export type ProductReviewDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
};

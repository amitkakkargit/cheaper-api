import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type SellerReviewModel = runtime.Types.Result.DefaultSelection<Prisma.$SellerReviewPayload>;
export type AggregateSellerReview = {
    _count: SellerReviewCountAggregateOutputType | null;
    _avg: SellerReviewAvgAggregateOutputType | null;
    _sum: SellerReviewSumAggregateOutputType | null;
    _min: SellerReviewMinAggregateOutputType | null;
    _max: SellerReviewMaxAggregateOutputType | null;
};
export type SellerReviewAvgAggregateOutputType = {
    rating: number | null;
};
export type SellerReviewSumAggregateOutputType = {
    rating: number | null;
};
export type SellerReviewMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    sellerId: string | null;
    productId: string | null;
    rating: number | null;
    comment: string | null;
    createdAt: Date | null;
};
export type SellerReviewMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    sellerId: string | null;
    productId: string | null;
    rating: number | null;
    comment: string | null;
    createdAt: Date | null;
};
export type SellerReviewCountAggregateOutputType = {
    id: number;
    userId: number;
    sellerId: number;
    productId: number;
    rating: number;
    comment: number;
    createdAt: number;
    _all: number;
};
export type SellerReviewAvgAggregateInputType = {
    rating?: true;
};
export type SellerReviewSumAggregateInputType = {
    rating?: true;
};
export type SellerReviewMinAggregateInputType = {
    id?: true;
    userId?: true;
    sellerId?: true;
    productId?: true;
    rating?: true;
    comment?: true;
    createdAt?: true;
};
export type SellerReviewMaxAggregateInputType = {
    id?: true;
    userId?: true;
    sellerId?: true;
    productId?: true;
    rating?: true;
    comment?: true;
    createdAt?: true;
};
export type SellerReviewCountAggregateInputType = {
    id?: true;
    userId?: true;
    sellerId?: true;
    productId?: true;
    rating?: true;
    comment?: true;
    createdAt?: true;
    _all?: true;
};
export type SellerReviewAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerReviewWhereInput;
    orderBy?: Prisma.SellerReviewOrderByWithRelationInput | Prisma.SellerReviewOrderByWithRelationInput[];
    cursor?: Prisma.SellerReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SellerReviewCountAggregateInputType;
    _avg?: SellerReviewAvgAggregateInputType;
    _sum?: SellerReviewSumAggregateInputType;
    _min?: SellerReviewMinAggregateInputType;
    _max?: SellerReviewMaxAggregateInputType;
};
export type GetSellerReviewAggregateType<T extends SellerReviewAggregateArgs> = {
    [P in keyof T & keyof AggregateSellerReview]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSellerReview[P]> : Prisma.GetScalarType<T[P], AggregateSellerReview[P]>;
};
export type SellerReviewGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerReviewWhereInput;
    orderBy?: Prisma.SellerReviewOrderByWithAggregationInput | Prisma.SellerReviewOrderByWithAggregationInput[];
    by: Prisma.SellerReviewScalarFieldEnum[] | Prisma.SellerReviewScalarFieldEnum;
    having?: Prisma.SellerReviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SellerReviewCountAggregateInputType | true;
    _avg?: SellerReviewAvgAggregateInputType;
    _sum?: SellerReviewSumAggregateInputType;
    _min?: SellerReviewMinAggregateInputType;
    _max?: SellerReviewMaxAggregateInputType;
};
export type SellerReviewGroupByOutputType = {
    id: string;
    userId: string;
    sellerId: string;
    productId: string | null;
    rating: number;
    comment: string | null;
    createdAt: Date;
    _count: SellerReviewCountAggregateOutputType | null;
    _avg: SellerReviewAvgAggregateOutputType | null;
    _sum: SellerReviewSumAggregateOutputType | null;
    _min: SellerReviewMinAggregateOutputType | null;
    _max: SellerReviewMaxAggregateOutputType | null;
};
export type GetSellerReviewGroupByPayload<T extends SellerReviewGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SellerReviewGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SellerReviewGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SellerReviewGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SellerReviewGroupByOutputType[P]>;
}>>;
export type SellerReviewWhereInput = {
    AND?: Prisma.SellerReviewWhereInput | Prisma.SellerReviewWhereInput[];
    OR?: Prisma.SellerReviewWhereInput[];
    NOT?: Prisma.SellerReviewWhereInput | Prisma.SellerReviewWhereInput[];
    id?: Prisma.StringFilter<"SellerReview"> | string;
    userId?: Prisma.StringFilter<"SellerReview"> | string;
    sellerId?: Prisma.StringFilter<"SellerReview"> | string;
    productId?: Prisma.StringNullableFilter<"SellerReview"> | string | null;
    rating?: Prisma.FloatFilter<"SellerReview"> | number;
    comment?: Prisma.StringNullableFilter<"SellerReview"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SellerReview"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    seller?: Prisma.XOR<Prisma.SellerScalarRelationFilter, Prisma.SellerWhereInput>;
};
export type SellerReviewOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    productId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    seller?: Prisma.SellerOrderByWithRelationInput;
};
export type SellerReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_sellerId?: Prisma.SellerReviewUserIdSellerIdCompoundUniqueInput;
    AND?: Prisma.SellerReviewWhereInput | Prisma.SellerReviewWhereInput[];
    OR?: Prisma.SellerReviewWhereInput[];
    NOT?: Prisma.SellerReviewWhereInput | Prisma.SellerReviewWhereInput[];
    userId?: Prisma.StringFilter<"SellerReview"> | string;
    sellerId?: Prisma.StringFilter<"SellerReview"> | string;
    productId?: Prisma.StringNullableFilter<"SellerReview"> | string | null;
    rating?: Prisma.FloatFilter<"SellerReview"> | number;
    comment?: Prisma.StringNullableFilter<"SellerReview"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SellerReview"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    seller?: Prisma.XOR<Prisma.SellerScalarRelationFilter, Prisma.SellerWhereInput>;
}, "id" | "userId_sellerId">;
export type SellerReviewOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    productId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SellerReviewCountOrderByAggregateInput;
    _avg?: Prisma.SellerReviewAvgOrderByAggregateInput;
    _max?: Prisma.SellerReviewMaxOrderByAggregateInput;
    _min?: Prisma.SellerReviewMinOrderByAggregateInput;
    _sum?: Prisma.SellerReviewSumOrderByAggregateInput;
};
export type SellerReviewScalarWhereWithAggregatesInput = {
    AND?: Prisma.SellerReviewScalarWhereWithAggregatesInput | Prisma.SellerReviewScalarWhereWithAggregatesInput[];
    OR?: Prisma.SellerReviewScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SellerReviewScalarWhereWithAggregatesInput | Prisma.SellerReviewScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SellerReview"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"SellerReview"> | string;
    sellerId?: Prisma.StringWithAggregatesFilter<"SellerReview"> | string;
    productId?: Prisma.StringNullableWithAggregatesFilter<"SellerReview"> | string | null;
    rating?: Prisma.FloatWithAggregatesFilter<"SellerReview"> | number;
    comment?: Prisma.StringNullableWithAggregatesFilter<"SellerReview"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SellerReview"> | Date | string;
};
export type SellerReviewCreateInput = {
    id?: string;
    productId?: string | null;
    rating: number;
    comment?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSellerReviewsInput;
    seller: Prisma.SellerCreateNestedOneWithoutReviewsInput;
};
export type SellerReviewUncheckedCreateInput = {
    id?: string;
    userId: string;
    sellerId: string;
    productId?: string | null;
    rating: number;
    comment?: string | null;
    createdAt?: Date | string;
};
export type SellerReviewUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSellerReviewsNestedInput;
    seller?: Prisma.SellerUpdateOneRequiredWithoutReviewsNestedInput;
};
export type SellerReviewUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerReviewCreateManyInput = {
    id?: string;
    userId: string;
    sellerId: string;
    productId?: string | null;
    rating: number;
    comment?: string | null;
    createdAt?: Date | string;
};
export type SellerReviewUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerReviewUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerReviewListRelationFilter = {
    every?: Prisma.SellerReviewWhereInput;
    some?: Prisma.SellerReviewWhereInput;
    none?: Prisma.SellerReviewWhereInput;
};
export type SellerReviewOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SellerReviewUserIdSellerIdCompoundUniqueInput = {
    userId: string;
    sellerId: string;
};
export type SellerReviewCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SellerReviewAvgOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
};
export type SellerReviewMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SellerReviewMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SellerReviewSumOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
};
export type SellerReviewCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SellerReviewCreateWithoutUserInput, Prisma.SellerReviewUncheckedCreateWithoutUserInput> | Prisma.SellerReviewCreateWithoutUserInput[] | Prisma.SellerReviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SellerReviewCreateOrConnectWithoutUserInput | Prisma.SellerReviewCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SellerReviewCreateManyUserInputEnvelope;
    connect?: Prisma.SellerReviewWhereUniqueInput | Prisma.SellerReviewWhereUniqueInput[];
};
export type SellerReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SellerReviewCreateWithoutUserInput, Prisma.SellerReviewUncheckedCreateWithoutUserInput> | Prisma.SellerReviewCreateWithoutUserInput[] | Prisma.SellerReviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SellerReviewCreateOrConnectWithoutUserInput | Prisma.SellerReviewCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SellerReviewCreateManyUserInputEnvelope;
    connect?: Prisma.SellerReviewWhereUniqueInput | Prisma.SellerReviewWhereUniqueInput[];
};
export type SellerReviewUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SellerReviewCreateWithoutUserInput, Prisma.SellerReviewUncheckedCreateWithoutUserInput> | Prisma.SellerReviewCreateWithoutUserInput[] | Prisma.SellerReviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SellerReviewCreateOrConnectWithoutUserInput | Prisma.SellerReviewCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SellerReviewUpsertWithWhereUniqueWithoutUserInput | Prisma.SellerReviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SellerReviewCreateManyUserInputEnvelope;
    set?: Prisma.SellerReviewWhereUniqueInput | Prisma.SellerReviewWhereUniqueInput[];
    disconnect?: Prisma.SellerReviewWhereUniqueInput | Prisma.SellerReviewWhereUniqueInput[];
    delete?: Prisma.SellerReviewWhereUniqueInput | Prisma.SellerReviewWhereUniqueInput[];
    connect?: Prisma.SellerReviewWhereUniqueInput | Prisma.SellerReviewWhereUniqueInput[];
    update?: Prisma.SellerReviewUpdateWithWhereUniqueWithoutUserInput | Prisma.SellerReviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SellerReviewUpdateManyWithWhereWithoutUserInput | Prisma.SellerReviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SellerReviewScalarWhereInput | Prisma.SellerReviewScalarWhereInput[];
};
export type SellerReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SellerReviewCreateWithoutUserInput, Prisma.SellerReviewUncheckedCreateWithoutUserInput> | Prisma.SellerReviewCreateWithoutUserInput[] | Prisma.SellerReviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SellerReviewCreateOrConnectWithoutUserInput | Prisma.SellerReviewCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SellerReviewUpsertWithWhereUniqueWithoutUserInput | Prisma.SellerReviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SellerReviewCreateManyUserInputEnvelope;
    set?: Prisma.SellerReviewWhereUniqueInput | Prisma.SellerReviewWhereUniqueInput[];
    disconnect?: Prisma.SellerReviewWhereUniqueInput | Prisma.SellerReviewWhereUniqueInput[];
    delete?: Prisma.SellerReviewWhereUniqueInput | Prisma.SellerReviewWhereUniqueInput[];
    connect?: Prisma.SellerReviewWhereUniqueInput | Prisma.SellerReviewWhereUniqueInput[];
    update?: Prisma.SellerReviewUpdateWithWhereUniqueWithoutUserInput | Prisma.SellerReviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SellerReviewUpdateManyWithWhereWithoutUserInput | Prisma.SellerReviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SellerReviewScalarWhereInput | Prisma.SellerReviewScalarWhereInput[];
};
export type SellerReviewCreateNestedManyWithoutSellerInput = {
    create?: Prisma.XOR<Prisma.SellerReviewCreateWithoutSellerInput, Prisma.SellerReviewUncheckedCreateWithoutSellerInput> | Prisma.SellerReviewCreateWithoutSellerInput[] | Prisma.SellerReviewUncheckedCreateWithoutSellerInput[];
    connectOrCreate?: Prisma.SellerReviewCreateOrConnectWithoutSellerInput | Prisma.SellerReviewCreateOrConnectWithoutSellerInput[];
    createMany?: Prisma.SellerReviewCreateManySellerInputEnvelope;
    connect?: Prisma.SellerReviewWhereUniqueInput | Prisma.SellerReviewWhereUniqueInput[];
};
export type SellerReviewUncheckedCreateNestedManyWithoutSellerInput = {
    create?: Prisma.XOR<Prisma.SellerReviewCreateWithoutSellerInput, Prisma.SellerReviewUncheckedCreateWithoutSellerInput> | Prisma.SellerReviewCreateWithoutSellerInput[] | Prisma.SellerReviewUncheckedCreateWithoutSellerInput[];
    connectOrCreate?: Prisma.SellerReviewCreateOrConnectWithoutSellerInput | Prisma.SellerReviewCreateOrConnectWithoutSellerInput[];
    createMany?: Prisma.SellerReviewCreateManySellerInputEnvelope;
    connect?: Prisma.SellerReviewWhereUniqueInput | Prisma.SellerReviewWhereUniqueInput[];
};
export type SellerReviewUpdateManyWithoutSellerNestedInput = {
    create?: Prisma.XOR<Prisma.SellerReviewCreateWithoutSellerInput, Prisma.SellerReviewUncheckedCreateWithoutSellerInput> | Prisma.SellerReviewCreateWithoutSellerInput[] | Prisma.SellerReviewUncheckedCreateWithoutSellerInput[];
    connectOrCreate?: Prisma.SellerReviewCreateOrConnectWithoutSellerInput | Prisma.SellerReviewCreateOrConnectWithoutSellerInput[];
    upsert?: Prisma.SellerReviewUpsertWithWhereUniqueWithoutSellerInput | Prisma.SellerReviewUpsertWithWhereUniqueWithoutSellerInput[];
    createMany?: Prisma.SellerReviewCreateManySellerInputEnvelope;
    set?: Prisma.SellerReviewWhereUniqueInput | Prisma.SellerReviewWhereUniqueInput[];
    disconnect?: Prisma.SellerReviewWhereUniqueInput | Prisma.SellerReviewWhereUniqueInput[];
    delete?: Prisma.SellerReviewWhereUniqueInput | Prisma.SellerReviewWhereUniqueInput[];
    connect?: Prisma.SellerReviewWhereUniqueInput | Prisma.SellerReviewWhereUniqueInput[];
    update?: Prisma.SellerReviewUpdateWithWhereUniqueWithoutSellerInput | Prisma.SellerReviewUpdateWithWhereUniqueWithoutSellerInput[];
    updateMany?: Prisma.SellerReviewUpdateManyWithWhereWithoutSellerInput | Prisma.SellerReviewUpdateManyWithWhereWithoutSellerInput[];
    deleteMany?: Prisma.SellerReviewScalarWhereInput | Prisma.SellerReviewScalarWhereInput[];
};
export type SellerReviewUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: Prisma.XOR<Prisma.SellerReviewCreateWithoutSellerInput, Prisma.SellerReviewUncheckedCreateWithoutSellerInput> | Prisma.SellerReviewCreateWithoutSellerInput[] | Prisma.SellerReviewUncheckedCreateWithoutSellerInput[];
    connectOrCreate?: Prisma.SellerReviewCreateOrConnectWithoutSellerInput | Prisma.SellerReviewCreateOrConnectWithoutSellerInput[];
    upsert?: Prisma.SellerReviewUpsertWithWhereUniqueWithoutSellerInput | Prisma.SellerReviewUpsertWithWhereUniqueWithoutSellerInput[];
    createMany?: Prisma.SellerReviewCreateManySellerInputEnvelope;
    set?: Prisma.SellerReviewWhereUniqueInput | Prisma.SellerReviewWhereUniqueInput[];
    disconnect?: Prisma.SellerReviewWhereUniqueInput | Prisma.SellerReviewWhereUniqueInput[];
    delete?: Prisma.SellerReviewWhereUniqueInput | Prisma.SellerReviewWhereUniqueInput[];
    connect?: Prisma.SellerReviewWhereUniqueInput | Prisma.SellerReviewWhereUniqueInput[];
    update?: Prisma.SellerReviewUpdateWithWhereUniqueWithoutSellerInput | Prisma.SellerReviewUpdateWithWhereUniqueWithoutSellerInput[];
    updateMany?: Prisma.SellerReviewUpdateManyWithWhereWithoutSellerInput | Prisma.SellerReviewUpdateManyWithWhereWithoutSellerInput[];
    deleteMany?: Prisma.SellerReviewScalarWhereInput | Prisma.SellerReviewScalarWhereInput[];
};
export type SellerReviewCreateWithoutUserInput = {
    id?: string;
    productId?: string | null;
    rating: number;
    comment?: string | null;
    createdAt?: Date | string;
    seller: Prisma.SellerCreateNestedOneWithoutReviewsInput;
};
export type SellerReviewUncheckedCreateWithoutUserInput = {
    id?: string;
    sellerId: string;
    productId?: string | null;
    rating: number;
    comment?: string | null;
    createdAt?: Date | string;
};
export type SellerReviewCreateOrConnectWithoutUserInput = {
    where: Prisma.SellerReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.SellerReviewCreateWithoutUserInput, Prisma.SellerReviewUncheckedCreateWithoutUserInput>;
};
export type SellerReviewCreateManyUserInputEnvelope = {
    data: Prisma.SellerReviewCreateManyUserInput | Prisma.SellerReviewCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type SellerReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.SellerReviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.SellerReviewUpdateWithoutUserInput, Prisma.SellerReviewUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.SellerReviewCreateWithoutUserInput, Prisma.SellerReviewUncheckedCreateWithoutUserInput>;
};
export type SellerReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.SellerReviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.SellerReviewUpdateWithoutUserInput, Prisma.SellerReviewUncheckedUpdateWithoutUserInput>;
};
export type SellerReviewUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.SellerReviewScalarWhereInput;
    data: Prisma.XOR<Prisma.SellerReviewUpdateManyMutationInput, Prisma.SellerReviewUncheckedUpdateManyWithoutUserInput>;
};
export type SellerReviewScalarWhereInput = {
    AND?: Prisma.SellerReviewScalarWhereInput | Prisma.SellerReviewScalarWhereInput[];
    OR?: Prisma.SellerReviewScalarWhereInput[];
    NOT?: Prisma.SellerReviewScalarWhereInput | Prisma.SellerReviewScalarWhereInput[];
    id?: Prisma.StringFilter<"SellerReview"> | string;
    userId?: Prisma.StringFilter<"SellerReview"> | string;
    sellerId?: Prisma.StringFilter<"SellerReview"> | string;
    productId?: Prisma.StringNullableFilter<"SellerReview"> | string | null;
    rating?: Prisma.FloatFilter<"SellerReview"> | number;
    comment?: Prisma.StringNullableFilter<"SellerReview"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SellerReview"> | Date | string;
};
export type SellerReviewCreateWithoutSellerInput = {
    id?: string;
    productId?: string | null;
    rating: number;
    comment?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSellerReviewsInput;
};
export type SellerReviewUncheckedCreateWithoutSellerInput = {
    id?: string;
    userId: string;
    productId?: string | null;
    rating: number;
    comment?: string | null;
    createdAt?: Date | string;
};
export type SellerReviewCreateOrConnectWithoutSellerInput = {
    where: Prisma.SellerReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.SellerReviewCreateWithoutSellerInput, Prisma.SellerReviewUncheckedCreateWithoutSellerInput>;
};
export type SellerReviewCreateManySellerInputEnvelope = {
    data: Prisma.SellerReviewCreateManySellerInput | Prisma.SellerReviewCreateManySellerInput[];
    skipDuplicates?: boolean;
};
export type SellerReviewUpsertWithWhereUniqueWithoutSellerInput = {
    where: Prisma.SellerReviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.SellerReviewUpdateWithoutSellerInput, Prisma.SellerReviewUncheckedUpdateWithoutSellerInput>;
    create: Prisma.XOR<Prisma.SellerReviewCreateWithoutSellerInput, Prisma.SellerReviewUncheckedCreateWithoutSellerInput>;
};
export type SellerReviewUpdateWithWhereUniqueWithoutSellerInput = {
    where: Prisma.SellerReviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.SellerReviewUpdateWithoutSellerInput, Prisma.SellerReviewUncheckedUpdateWithoutSellerInput>;
};
export type SellerReviewUpdateManyWithWhereWithoutSellerInput = {
    where: Prisma.SellerReviewScalarWhereInput;
    data: Prisma.XOR<Prisma.SellerReviewUpdateManyMutationInput, Prisma.SellerReviewUncheckedUpdateManyWithoutSellerInput>;
};
export type SellerReviewCreateManyUserInput = {
    id?: string;
    sellerId: string;
    productId?: string | null;
    rating: number;
    comment?: string | null;
    createdAt?: Date | string;
};
export type SellerReviewUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    seller?: Prisma.SellerUpdateOneRequiredWithoutReviewsNestedInput;
};
export type SellerReviewUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerReviewUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerReviewCreateManySellerInput = {
    id?: string;
    userId: string;
    productId?: string | null;
    rating: number;
    comment?: string | null;
    createdAt?: Date | string;
};
export type SellerReviewUpdateWithoutSellerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSellerReviewsNestedInput;
};
export type SellerReviewUncheckedUpdateWithoutSellerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerReviewUncheckedUpdateManyWithoutSellerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.FloatFieldUpdateOperationsInput | number;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SellerReviewSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    sellerId?: boolean;
    productId?: boolean;
    rating?: boolean;
    comment?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sellerReview"]>;
export type SellerReviewSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    sellerId?: boolean;
    productId?: boolean;
    rating?: boolean;
    comment?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sellerReview"]>;
export type SellerReviewSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    sellerId?: boolean;
    productId?: boolean;
    rating?: boolean;
    comment?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sellerReview"]>;
export type SellerReviewSelectScalar = {
    id?: boolean;
    userId?: boolean;
    sellerId?: boolean;
    productId?: boolean;
    rating?: boolean;
    comment?: boolean;
    createdAt?: boolean;
};
export type SellerReviewOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "sellerId" | "productId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["sellerReview"]>;
export type SellerReviewInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
};
export type SellerReviewIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
};
export type SellerReviewIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    seller?: boolean | Prisma.SellerDefaultArgs<ExtArgs>;
};
export type $SellerReviewPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SellerReview";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        seller: Prisma.$SellerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        sellerId: string;
        productId: string | null;
        rating: number;
        comment: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["sellerReview"]>;
    composites: {};
};
export type SellerReviewGetPayload<S extends boolean | null | undefined | SellerReviewDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SellerReviewPayload, S>;
export type SellerReviewCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SellerReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SellerReviewCountAggregateInputType | true;
};
export interface SellerReviewDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SellerReview'];
        meta: {
            name: 'SellerReview';
        };
    };
    findUnique<T extends SellerReviewFindUniqueArgs>(args: Prisma.SelectSubset<T, SellerReviewFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SellerReviewClient<runtime.Types.Result.GetResult<Prisma.$SellerReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SellerReviewFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SellerReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SellerReviewClient<runtime.Types.Result.GetResult<Prisma.$SellerReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SellerReviewFindFirstArgs>(args?: Prisma.SelectSubset<T, SellerReviewFindFirstArgs<ExtArgs>>): Prisma.Prisma__SellerReviewClient<runtime.Types.Result.GetResult<Prisma.$SellerReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SellerReviewFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SellerReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SellerReviewClient<runtime.Types.Result.GetResult<Prisma.$SellerReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SellerReviewFindManyArgs>(args?: Prisma.SelectSubset<T, SellerReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SellerReviewCreateArgs>(args: Prisma.SelectSubset<T, SellerReviewCreateArgs<ExtArgs>>): Prisma.Prisma__SellerReviewClient<runtime.Types.Result.GetResult<Prisma.$SellerReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SellerReviewCreateManyArgs>(args?: Prisma.SelectSubset<T, SellerReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SellerReviewCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SellerReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SellerReviewDeleteArgs>(args: Prisma.SelectSubset<T, SellerReviewDeleteArgs<ExtArgs>>): Prisma.Prisma__SellerReviewClient<runtime.Types.Result.GetResult<Prisma.$SellerReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SellerReviewUpdateArgs>(args: Prisma.SelectSubset<T, SellerReviewUpdateArgs<ExtArgs>>): Prisma.Prisma__SellerReviewClient<runtime.Types.Result.GetResult<Prisma.$SellerReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SellerReviewDeleteManyArgs>(args?: Prisma.SelectSubset<T, SellerReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SellerReviewUpdateManyArgs>(args: Prisma.SelectSubset<T, SellerReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SellerReviewUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SellerReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SellerReviewUpsertArgs>(args: Prisma.SelectSubset<T, SellerReviewUpsertArgs<ExtArgs>>): Prisma.Prisma__SellerReviewClient<runtime.Types.Result.GetResult<Prisma.$SellerReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SellerReviewCountArgs>(args?: Prisma.Subset<T, SellerReviewCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SellerReviewCountAggregateOutputType> : number>;
    aggregate<T extends SellerReviewAggregateArgs>(args: Prisma.Subset<T, SellerReviewAggregateArgs>): Prisma.PrismaPromise<GetSellerReviewAggregateType<T>>;
    groupBy<T extends SellerReviewGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SellerReviewGroupByArgs['orderBy'];
    } : {
        orderBy?: SellerReviewGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SellerReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellerReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SellerReviewFieldRefs;
}
export interface Prisma__SellerReviewClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    seller<T extends Prisma.SellerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SellerDefaultArgs<ExtArgs>>): Prisma.Prisma__SellerClient<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SellerReviewFieldRefs {
    readonly id: Prisma.FieldRef<"SellerReview", 'String'>;
    readonly userId: Prisma.FieldRef<"SellerReview", 'String'>;
    readonly sellerId: Prisma.FieldRef<"SellerReview", 'String'>;
    readonly productId: Prisma.FieldRef<"SellerReview", 'String'>;
    readonly rating: Prisma.FieldRef<"SellerReview", 'Float'>;
    readonly comment: Prisma.FieldRef<"SellerReview", 'String'>;
    readonly createdAt: Prisma.FieldRef<"SellerReview", 'DateTime'>;
}
export type SellerReviewFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerReviewSelect<ExtArgs> | null;
    omit?: Prisma.SellerReviewOmit<ExtArgs> | null;
    include?: Prisma.SellerReviewInclude<ExtArgs> | null;
    where: Prisma.SellerReviewWhereUniqueInput;
};
export type SellerReviewFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerReviewSelect<ExtArgs> | null;
    omit?: Prisma.SellerReviewOmit<ExtArgs> | null;
    include?: Prisma.SellerReviewInclude<ExtArgs> | null;
    where: Prisma.SellerReviewWhereUniqueInput;
};
export type SellerReviewFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SellerReviewFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SellerReviewFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SellerReviewCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerReviewSelect<ExtArgs> | null;
    omit?: Prisma.SellerReviewOmit<ExtArgs> | null;
    include?: Prisma.SellerReviewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SellerReviewCreateInput, Prisma.SellerReviewUncheckedCreateInput>;
};
export type SellerReviewCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SellerReviewCreateManyInput | Prisma.SellerReviewCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SellerReviewCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerReviewSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SellerReviewOmit<ExtArgs> | null;
    data: Prisma.SellerReviewCreateManyInput | Prisma.SellerReviewCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SellerReviewIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SellerReviewUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerReviewSelect<ExtArgs> | null;
    omit?: Prisma.SellerReviewOmit<ExtArgs> | null;
    include?: Prisma.SellerReviewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SellerReviewUpdateInput, Prisma.SellerReviewUncheckedUpdateInput>;
    where: Prisma.SellerReviewWhereUniqueInput;
};
export type SellerReviewUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SellerReviewUpdateManyMutationInput, Prisma.SellerReviewUncheckedUpdateManyInput>;
    where?: Prisma.SellerReviewWhereInput;
    limit?: number;
};
export type SellerReviewUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerReviewSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SellerReviewOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SellerReviewUpdateManyMutationInput, Prisma.SellerReviewUncheckedUpdateManyInput>;
    where?: Prisma.SellerReviewWhereInput;
    limit?: number;
    include?: Prisma.SellerReviewIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SellerReviewUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerReviewSelect<ExtArgs> | null;
    omit?: Prisma.SellerReviewOmit<ExtArgs> | null;
    include?: Prisma.SellerReviewInclude<ExtArgs> | null;
    where: Prisma.SellerReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.SellerReviewCreateInput, Prisma.SellerReviewUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SellerReviewUpdateInput, Prisma.SellerReviewUncheckedUpdateInput>;
};
export type SellerReviewDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerReviewSelect<ExtArgs> | null;
    omit?: Prisma.SellerReviewOmit<ExtArgs> | null;
    include?: Prisma.SellerReviewInclude<ExtArgs> | null;
    where: Prisma.SellerReviewWhereUniqueInput;
};
export type SellerReviewDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerReviewWhereInput;
    limit?: number;
};
export type SellerReviewDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SellerReviewSelect<ExtArgs> | null;
    omit?: Prisma.SellerReviewOmit<ExtArgs> | null;
    include?: Prisma.SellerReviewInclude<ExtArgs> | null;
};

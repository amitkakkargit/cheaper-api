import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type PurchaseModel = runtime.Types.Result.DefaultSelection<Prisma.$PurchasePayload>;
export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null;
    _min: PurchaseMinAggregateOutputType | null;
    _max: PurchaseMaxAggregateOutputType | null;
};
export type PurchaseMinAggregateOutputType = {
    id: string | null;
    productId: string | null;
    buyerId: string | null;
    sellerId: string | null;
    buyerConfirmedAt: Date | null;
    sellerConfirmedAt: Date | null;
    createdAt: Date | null;
};
export type PurchaseMaxAggregateOutputType = {
    id: string | null;
    productId: string | null;
    buyerId: string | null;
    sellerId: string | null;
    buyerConfirmedAt: Date | null;
    sellerConfirmedAt: Date | null;
    createdAt: Date | null;
};
export type PurchaseCountAggregateOutputType = {
    id: number;
    productId: number;
    buyerId: number;
    sellerId: number;
    buyerConfirmedAt: number;
    sellerConfirmedAt: number;
    createdAt: number;
    _all: number;
};
export type PurchaseMinAggregateInputType = {
    id?: true;
    productId?: true;
    buyerId?: true;
    sellerId?: true;
    buyerConfirmedAt?: true;
    sellerConfirmedAt?: true;
    createdAt?: true;
};
export type PurchaseMaxAggregateInputType = {
    id?: true;
    productId?: true;
    buyerId?: true;
    sellerId?: true;
    buyerConfirmedAt?: true;
    sellerConfirmedAt?: true;
    createdAt?: true;
};
export type PurchaseCountAggregateInputType = {
    id?: true;
    productId?: true;
    buyerId?: true;
    sellerId?: true;
    buyerConfirmedAt?: true;
    sellerConfirmedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type PurchaseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseWhereInput;
    orderBy?: Prisma.PurchaseOrderByWithRelationInput | Prisma.PurchaseOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PurchaseCountAggregateInputType;
    _min?: PurchaseMinAggregateInputType;
    _max?: PurchaseMaxAggregateInputType;
};
export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
    [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePurchase[P]> : Prisma.GetScalarType<T[P], AggregatePurchase[P]>;
};
export type PurchaseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseWhereInput;
    orderBy?: Prisma.PurchaseOrderByWithAggregationInput | Prisma.PurchaseOrderByWithAggregationInput[];
    by: Prisma.PurchaseScalarFieldEnum[] | Prisma.PurchaseScalarFieldEnum;
    having?: Prisma.PurchaseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PurchaseCountAggregateInputType | true;
    _min?: PurchaseMinAggregateInputType;
    _max?: PurchaseMaxAggregateInputType;
};
export type PurchaseGroupByOutputType = {
    id: string;
    productId: string;
    buyerId: string;
    sellerId: string;
    buyerConfirmedAt: Date | null;
    sellerConfirmedAt: Date | null;
    createdAt: Date;
    _count: PurchaseCountAggregateOutputType | null;
    _min: PurchaseMinAggregateOutputType | null;
    _max: PurchaseMaxAggregateOutputType | null;
};
export type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PurchaseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PurchaseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PurchaseGroupByOutputType[P]>;
}>>;
export type PurchaseWhereInput = {
    AND?: Prisma.PurchaseWhereInput | Prisma.PurchaseWhereInput[];
    OR?: Prisma.PurchaseWhereInput[];
    NOT?: Prisma.PurchaseWhereInput | Prisma.PurchaseWhereInput[];
    id?: Prisma.StringFilter<"Purchase"> | string;
    productId?: Prisma.StringFilter<"Purchase"> | string;
    buyerId?: Prisma.StringFilter<"Purchase"> | string;
    sellerId?: Prisma.StringFilter<"Purchase"> | string;
    buyerConfirmedAt?: Prisma.DateTimeNullableFilter<"Purchase"> | Date | string | null;
    sellerConfirmedAt?: Prisma.DateTimeNullableFilter<"Purchase"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Purchase"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    buyer?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type PurchaseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    buyerId?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    buyerConfirmedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    sellerConfirmedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    product?: Prisma.ProductOrderByWithRelationInput;
    buyer?: Prisma.UserOrderByWithRelationInput;
};
export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    productId_buyerId?: Prisma.PurchaseProductIdBuyerIdCompoundUniqueInput;
    AND?: Prisma.PurchaseWhereInput | Prisma.PurchaseWhereInput[];
    OR?: Prisma.PurchaseWhereInput[];
    NOT?: Prisma.PurchaseWhereInput | Prisma.PurchaseWhereInput[];
    productId?: Prisma.StringFilter<"Purchase"> | string;
    buyerId?: Prisma.StringFilter<"Purchase"> | string;
    sellerId?: Prisma.StringFilter<"Purchase"> | string;
    buyerConfirmedAt?: Prisma.DateTimeNullableFilter<"Purchase"> | Date | string | null;
    sellerConfirmedAt?: Prisma.DateTimeNullableFilter<"Purchase"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Purchase"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    buyer?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "productId_buyerId">;
export type PurchaseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    buyerId?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    buyerConfirmedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    sellerConfirmedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PurchaseCountOrderByAggregateInput;
    _max?: Prisma.PurchaseMaxOrderByAggregateInput;
    _min?: Prisma.PurchaseMinOrderByAggregateInput;
};
export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: Prisma.PurchaseScalarWhereWithAggregatesInput | Prisma.PurchaseScalarWhereWithAggregatesInput[];
    OR?: Prisma.PurchaseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PurchaseScalarWhereWithAggregatesInput | Prisma.PurchaseScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Purchase"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"Purchase"> | string;
    buyerId?: Prisma.StringWithAggregatesFilter<"Purchase"> | string;
    sellerId?: Prisma.StringWithAggregatesFilter<"Purchase"> | string;
    buyerConfirmedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Purchase"> | Date | string | null;
    sellerConfirmedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Purchase"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Purchase"> | Date | string;
};
export type PurchaseCreateInput = {
    id?: string;
    sellerId: string;
    buyerConfirmedAt?: Date | string | null;
    sellerConfirmedAt?: Date | string | null;
    createdAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutPurchasesInput;
    buyer: Prisma.UserCreateNestedOneWithoutPurchasesInput;
};
export type PurchaseUncheckedCreateInput = {
    id?: string;
    productId: string;
    buyerId: string;
    sellerId: string;
    buyerConfirmedAt?: Date | string | null;
    sellerConfirmedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PurchaseUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerConfirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sellerConfirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutPurchasesNestedInput;
    buyer?: Prisma.UserUpdateOneRequiredWithoutPurchasesNestedInput;
};
export type PurchaseUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerId?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerConfirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sellerConfirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseCreateManyInput = {
    id?: string;
    productId: string;
    buyerId: string;
    sellerId: string;
    buyerConfirmedAt?: Date | string | null;
    sellerConfirmedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PurchaseUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerConfirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sellerConfirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerId?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerConfirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sellerConfirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseListRelationFilter = {
    every?: Prisma.PurchaseWhereInput;
    some?: Prisma.PurchaseWhereInput;
    none?: Prisma.PurchaseWhereInput;
};
export type PurchaseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PurchaseProductIdBuyerIdCompoundUniqueInput = {
    productId: string;
    buyerId: string;
};
export type PurchaseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    buyerId?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    buyerConfirmedAt?: Prisma.SortOrder;
    sellerConfirmedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PurchaseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    buyerId?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    buyerConfirmedAt?: Prisma.SortOrder;
    sellerConfirmedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PurchaseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    buyerId?: Prisma.SortOrder;
    sellerId?: Prisma.SortOrder;
    buyerConfirmedAt?: Prisma.SortOrder;
    sellerConfirmedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PurchaseCreateNestedManyWithoutBuyerInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutBuyerInput, Prisma.PurchaseUncheckedCreateWithoutBuyerInput> | Prisma.PurchaseCreateWithoutBuyerInput[] | Prisma.PurchaseUncheckedCreateWithoutBuyerInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutBuyerInput | Prisma.PurchaseCreateOrConnectWithoutBuyerInput[];
    createMany?: Prisma.PurchaseCreateManyBuyerInputEnvelope;
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
};
export type PurchaseUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutBuyerInput, Prisma.PurchaseUncheckedCreateWithoutBuyerInput> | Prisma.PurchaseCreateWithoutBuyerInput[] | Prisma.PurchaseUncheckedCreateWithoutBuyerInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutBuyerInput | Prisma.PurchaseCreateOrConnectWithoutBuyerInput[];
    createMany?: Prisma.PurchaseCreateManyBuyerInputEnvelope;
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
};
export type PurchaseUpdateManyWithoutBuyerNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutBuyerInput, Prisma.PurchaseUncheckedCreateWithoutBuyerInput> | Prisma.PurchaseCreateWithoutBuyerInput[] | Prisma.PurchaseUncheckedCreateWithoutBuyerInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutBuyerInput | Prisma.PurchaseCreateOrConnectWithoutBuyerInput[];
    upsert?: Prisma.PurchaseUpsertWithWhereUniqueWithoutBuyerInput | Prisma.PurchaseUpsertWithWhereUniqueWithoutBuyerInput[];
    createMany?: Prisma.PurchaseCreateManyBuyerInputEnvelope;
    set?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    disconnect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    delete?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    update?: Prisma.PurchaseUpdateWithWhereUniqueWithoutBuyerInput | Prisma.PurchaseUpdateWithWhereUniqueWithoutBuyerInput[];
    updateMany?: Prisma.PurchaseUpdateManyWithWhereWithoutBuyerInput | Prisma.PurchaseUpdateManyWithWhereWithoutBuyerInput[];
    deleteMany?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
};
export type PurchaseUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutBuyerInput, Prisma.PurchaseUncheckedCreateWithoutBuyerInput> | Prisma.PurchaseCreateWithoutBuyerInput[] | Prisma.PurchaseUncheckedCreateWithoutBuyerInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutBuyerInput | Prisma.PurchaseCreateOrConnectWithoutBuyerInput[];
    upsert?: Prisma.PurchaseUpsertWithWhereUniqueWithoutBuyerInput | Prisma.PurchaseUpsertWithWhereUniqueWithoutBuyerInput[];
    createMany?: Prisma.PurchaseCreateManyBuyerInputEnvelope;
    set?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    disconnect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    delete?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    update?: Prisma.PurchaseUpdateWithWhereUniqueWithoutBuyerInput | Prisma.PurchaseUpdateWithWhereUniqueWithoutBuyerInput[];
    updateMany?: Prisma.PurchaseUpdateManyWithWhereWithoutBuyerInput | Prisma.PurchaseUpdateManyWithWhereWithoutBuyerInput[];
    deleteMany?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
};
export type PurchaseCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutProductInput, Prisma.PurchaseUncheckedCreateWithoutProductInput> | Prisma.PurchaseCreateWithoutProductInput[] | Prisma.PurchaseUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutProductInput | Prisma.PurchaseCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.PurchaseCreateManyProductInputEnvelope;
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
};
export type PurchaseUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutProductInput, Prisma.PurchaseUncheckedCreateWithoutProductInput> | Prisma.PurchaseCreateWithoutProductInput[] | Prisma.PurchaseUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutProductInput | Prisma.PurchaseCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.PurchaseCreateManyProductInputEnvelope;
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
};
export type PurchaseUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutProductInput, Prisma.PurchaseUncheckedCreateWithoutProductInput> | Prisma.PurchaseCreateWithoutProductInput[] | Prisma.PurchaseUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutProductInput | Prisma.PurchaseCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.PurchaseUpsertWithWhereUniqueWithoutProductInput | Prisma.PurchaseUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.PurchaseCreateManyProductInputEnvelope;
    set?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    disconnect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    delete?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    update?: Prisma.PurchaseUpdateWithWhereUniqueWithoutProductInput | Prisma.PurchaseUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.PurchaseUpdateManyWithWhereWithoutProductInput | Prisma.PurchaseUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
};
export type PurchaseUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseCreateWithoutProductInput, Prisma.PurchaseUncheckedCreateWithoutProductInput> | Prisma.PurchaseCreateWithoutProductInput[] | Prisma.PurchaseUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.PurchaseCreateOrConnectWithoutProductInput | Prisma.PurchaseCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.PurchaseUpsertWithWhereUniqueWithoutProductInput | Prisma.PurchaseUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.PurchaseCreateManyProductInputEnvelope;
    set?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    disconnect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    delete?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    connect?: Prisma.PurchaseWhereUniqueInput | Prisma.PurchaseWhereUniqueInput[];
    update?: Prisma.PurchaseUpdateWithWhereUniqueWithoutProductInput | Prisma.PurchaseUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.PurchaseUpdateManyWithWhereWithoutProductInput | Prisma.PurchaseUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
};
export type PurchaseCreateWithoutBuyerInput = {
    id?: string;
    sellerId: string;
    buyerConfirmedAt?: Date | string | null;
    sellerConfirmedAt?: Date | string | null;
    createdAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutPurchasesInput;
};
export type PurchaseUncheckedCreateWithoutBuyerInput = {
    id?: string;
    productId: string;
    sellerId: string;
    buyerConfirmedAt?: Date | string | null;
    sellerConfirmedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PurchaseCreateOrConnectWithoutBuyerInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutBuyerInput, Prisma.PurchaseUncheckedCreateWithoutBuyerInput>;
};
export type PurchaseCreateManyBuyerInputEnvelope = {
    data: Prisma.PurchaseCreateManyBuyerInput | Prisma.PurchaseCreateManyBuyerInput[];
    skipDuplicates?: boolean;
};
export type PurchaseUpsertWithWhereUniqueWithoutBuyerInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    update: Prisma.XOR<Prisma.PurchaseUpdateWithoutBuyerInput, Prisma.PurchaseUncheckedUpdateWithoutBuyerInput>;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutBuyerInput, Prisma.PurchaseUncheckedCreateWithoutBuyerInput>;
};
export type PurchaseUpdateWithWhereUniqueWithoutBuyerInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    data: Prisma.XOR<Prisma.PurchaseUpdateWithoutBuyerInput, Prisma.PurchaseUncheckedUpdateWithoutBuyerInput>;
};
export type PurchaseUpdateManyWithWhereWithoutBuyerInput = {
    where: Prisma.PurchaseScalarWhereInput;
    data: Prisma.XOR<Prisma.PurchaseUpdateManyMutationInput, Prisma.PurchaseUncheckedUpdateManyWithoutBuyerInput>;
};
export type PurchaseScalarWhereInput = {
    AND?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
    OR?: Prisma.PurchaseScalarWhereInput[];
    NOT?: Prisma.PurchaseScalarWhereInput | Prisma.PurchaseScalarWhereInput[];
    id?: Prisma.StringFilter<"Purchase"> | string;
    productId?: Prisma.StringFilter<"Purchase"> | string;
    buyerId?: Prisma.StringFilter<"Purchase"> | string;
    sellerId?: Prisma.StringFilter<"Purchase"> | string;
    buyerConfirmedAt?: Prisma.DateTimeNullableFilter<"Purchase"> | Date | string | null;
    sellerConfirmedAt?: Prisma.DateTimeNullableFilter<"Purchase"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Purchase"> | Date | string;
};
export type PurchaseCreateWithoutProductInput = {
    id?: string;
    sellerId: string;
    buyerConfirmedAt?: Date | string | null;
    sellerConfirmedAt?: Date | string | null;
    createdAt?: Date | string;
    buyer: Prisma.UserCreateNestedOneWithoutPurchasesInput;
};
export type PurchaseUncheckedCreateWithoutProductInput = {
    id?: string;
    buyerId: string;
    sellerId: string;
    buyerConfirmedAt?: Date | string | null;
    sellerConfirmedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PurchaseCreateOrConnectWithoutProductInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutProductInput, Prisma.PurchaseUncheckedCreateWithoutProductInput>;
};
export type PurchaseCreateManyProductInputEnvelope = {
    data: Prisma.PurchaseCreateManyProductInput | Prisma.PurchaseCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type PurchaseUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    update: Prisma.XOR<Prisma.PurchaseUpdateWithoutProductInput, Prisma.PurchaseUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.PurchaseCreateWithoutProductInput, Prisma.PurchaseUncheckedCreateWithoutProductInput>;
};
export type PurchaseUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.PurchaseWhereUniqueInput;
    data: Prisma.XOR<Prisma.PurchaseUpdateWithoutProductInput, Prisma.PurchaseUncheckedUpdateWithoutProductInput>;
};
export type PurchaseUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.PurchaseScalarWhereInput;
    data: Prisma.XOR<Prisma.PurchaseUpdateManyMutationInput, Prisma.PurchaseUncheckedUpdateManyWithoutProductInput>;
};
export type PurchaseCreateManyBuyerInput = {
    id?: string;
    productId: string;
    sellerId: string;
    buyerConfirmedAt?: Date | string | null;
    sellerConfirmedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PurchaseUpdateWithoutBuyerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerConfirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sellerConfirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutPurchasesNestedInput;
};
export type PurchaseUncheckedUpdateWithoutBuyerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerConfirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sellerConfirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseUncheckedUpdateManyWithoutBuyerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerConfirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sellerConfirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseCreateManyProductInput = {
    id?: string;
    buyerId: string;
    sellerId: string;
    buyerConfirmedAt?: Date | string | null;
    sellerConfirmedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PurchaseUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerConfirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sellerConfirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    buyer?: Prisma.UserUpdateOneRequiredWithoutPurchasesNestedInput;
};
export type PurchaseUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerId?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerConfirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sellerConfirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerId?: Prisma.StringFieldUpdateOperationsInput | string;
    sellerId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerConfirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sellerConfirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    buyerId?: boolean;
    sellerId?: boolean;
    buyerConfirmedAt?: boolean;
    sellerConfirmedAt?: boolean;
    createdAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    buyer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchase"]>;
export type PurchaseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    buyerId?: boolean;
    sellerId?: boolean;
    buyerConfirmedAt?: boolean;
    sellerConfirmedAt?: boolean;
    createdAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    buyer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchase"]>;
export type PurchaseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    buyerId?: boolean;
    sellerId?: boolean;
    buyerConfirmedAt?: boolean;
    sellerConfirmedAt?: boolean;
    createdAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    buyer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchase"]>;
export type PurchaseSelectScalar = {
    id?: boolean;
    productId?: boolean;
    buyerId?: boolean;
    sellerId?: boolean;
    buyerConfirmedAt?: boolean;
    sellerConfirmedAt?: boolean;
    createdAt?: boolean;
};
export type PurchaseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productId" | "buyerId" | "sellerId" | "buyerConfirmedAt" | "sellerConfirmedAt" | "createdAt", ExtArgs["result"]["purchase"]>;
export type PurchaseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    buyer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PurchaseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    buyer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PurchaseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    buyer?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $PurchasePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Purchase";
    objects: {
        product: Prisma.$ProductPayload<ExtArgs>;
        buyer: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        productId: string;
        buyerId: string;
        sellerId: string;
        buyerConfirmedAt: Date | null;
        sellerConfirmedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["purchase"]>;
    composites: {};
};
export type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PurchasePayload, S>;
export type PurchaseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PurchaseCountAggregateInputType | true;
};
export interface PurchaseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Purchase'];
        meta: {
            name: 'Purchase';
        };
    };
    findUnique<T extends PurchaseFindUniqueArgs>(args: Prisma.SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PurchaseFindFirstArgs>(args?: Prisma.SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PurchaseFindManyArgs>(args?: Prisma.SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PurchaseCreateArgs>(args: Prisma.SelectSubset<T, PurchaseCreateArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PurchaseCreateManyArgs>(args?: Prisma.SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PurchaseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PurchaseDeleteArgs>(args: Prisma.SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PurchaseUpdateArgs>(args: Prisma.SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PurchaseDeleteManyArgs>(args?: Prisma.SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PurchaseUpdateManyArgs>(args: Prisma.SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PurchaseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PurchaseUpsertArgs>(args: Prisma.SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>): Prisma.Prisma__PurchaseClient<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PurchaseCountArgs>(args?: Prisma.Subset<T, PurchaseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PurchaseCountAggregateOutputType> : number>;
    aggregate<T extends PurchaseAggregateArgs>(args: Prisma.Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>;
    groupBy<T extends PurchaseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PurchaseGroupByArgs['orderBy'];
    } : {
        orderBy?: PurchaseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PurchaseFieldRefs;
}
export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    buyer<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PurchaseFieldRefs {
    readonly id: Prisma.FieldRef<"Purchase", 'String'>;
    readonly productId: Prisma.FieldRef<"Purchase", 'String'>;
    readonly buyerId: Prisma.FieldRef<"Purchase", 'String'>;
    readonly sellerId: Prisma.FieldRef<"Purchase", 'String'>;
    readonly buyerConfirmedAt: Prisma.FieldRef<"Purchase", 'DateTime'>;
    readonly sellerConfirmedAt: Prisma.FieldRef<"Purchase", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Purchase", 'DateTime'>;
}
export type PurchaseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where: Prisma.PurchaseWhereUniqueInput;
};
export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where: Prisma.PurchaseWhereUniqueInput;
};
export type PurchaseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where?: Prisma.PurchaseWhereInput;
    orderBy?: Prisma.PurchaseOrderByWithRelationInput | Prisma.PurchaseOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseScalarFieldEnum | Prisma.PurchaseScalarFieldEnum[];
};
export type PurchaseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where?: Prisma.PurchaseWhereInput;
    orderBy?: Prisma.PurchaseOrderByWithRelationInput | Prisma.PurchaseOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseScalarFieldEnum | Prisma.PurchaseScalarFieldEnum[];
};
export type PurchaseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where?: Prisma.PurchaseWhereInput;
    orderBy?: Prisma.PurchaseOrderByWithRelationInput | Prisma.PurchaseOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseScalarFieldEnum | Prisma.PurchaseScalarFieldEnum[];
};
export type PurchaseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseCreateInput, Prisma.PurchaseUncheckedCreateInput>;
};
export type PurchaseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PurchaseCreateManyInput | Prisma.PurchaseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PurchaseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    data: Prisma.PurchaseCreateManyInput | Prisma.PurchaseCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PurchaseIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PurchaseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseUpdateInput, Prisma.PurchaseUncheckedUpdateInput>;
    where: Prisma.PurchaseWhereUniqueInput;
};
export type PurchaseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PurchaseUpdateManyMutationInput, Prisma.PurchaseUncheckedUpdateManyInput>;
    where?: Prisma.PurchaseWhereInput;
    limit?: number;
};
export type PurchaseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseUpdateManyMutationInput, Prisma.PurchaseUncheckedUpdateManyInput>;
    where?: Prisma.PurchaseWhereInput;
    limit?: number;
    include?: Prisma.PurchaseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PurchaseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where: Prisma.PurchaseWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseCreateInput, Prisma.PurchaseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PurchaseUpdateInput, Prisma.PurchaseUncheckedUpdateInput>;
};
export type PurchaseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
    where: Prisma.PurchaseWhereUniqueInput;
};
export type PurchaseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseWhereInput;
    limit?: number;
};
export type PurchaseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOmit<ExtArgs> | null;
    include?: Prisma.PurchaseInclude<ExtArgs> | null;
};

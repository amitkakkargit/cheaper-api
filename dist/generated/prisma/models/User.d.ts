import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    phone: string | null;
    name: string | null;
    avatarUrl: string | null;
    createdAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    phone: string | null;
    name: string | null;
    avatarUrl: string | null;
    createdAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    phone: number;
    name: number;
    avatarUrl: number;
    createdAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    phone?: true;
    name?: true;
    avatarUrl?: true;
    createdAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    phone?: true;
    name?: true;
    avatarUrl?: true;
    createdAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    phone?: true;
    name?: true;
    avatarUrl?: true;
    createdAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string | null;
    phone: string | null;
    name: string | null;
    avatarUrl: string | null;
    createdAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringNullableFilter<"User"> | string | null;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    name?: Prisma.StringNullableFilter<"User"> | string | null;
    avatarUrl?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    otpCodes?: Prisma.OtpCodeListRelationFilter;
    sellers?: Prisma.SellerListRelationFilter;
    purchases?: Prisma.PurchaseListRelationFilter;
    sellerReviews?: Prisma.SellerReviewListRelationFilter;
    productReviews?: Prisma.ProductReviewListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    otpCodes?: Prisma.OtpCodeOrderByRelationAggregateInput;
    sellers?: Prisma.SellerOrderByRelationAggregateInput;
    purchases?: Prisma.PurchaseOrderByRelationAggregateInput;
    sellerReviews?: Prisma.SellerReviewOrderByRelationAggregateInput;
    productReviews?: Prisma.ProductReviewOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    phone?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringNullableFilter<"User"> | string | null;
    avatarUrl?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    otpCodes?: Prisma.OtpCodeListRelationFilter;
    sellers?: Prisma.SellerListRelationFilter;
    purchases?: Prisma.PurchaseListRelationFilter;
    sellerReviews?: Prisma.SellerReviewListRelationFilter;
    productReviews?: Prisma.ProductReviewListRelationFilter;
}, "id" | "email" | "phone">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    name?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    avatarUrl?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    email?: string | null;
    phone?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    otpCodes?: Prisma.OtpCodeCreateNestedManyWithoutUserInput;
    sellers?: Prisma.SellerCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseCreateNestedManyWithoutBuyerInput;
    sellerReviews?: Prisma.SellerReviewCreateNestedManyWithoutUserInput;
    productReviews?: Prisma.ProductReviewCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email?: string | null;
    phone?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    otpCodes?: Prisma.OtpCodeUncheckedCreateNestedManyWithoutUserInput;
    sellers?: Prisma.SellerUncheckedCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseUncheckedCreateNestedManyWithoutBuyerInput;
    sellerReviews?: Prisma.SellerReviewUncheckedCreateNestedManyWithoutUserInput;
    productReviews?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    otpCodes?: Prisma.OtpCodeUpdateManyWithoutUserNestedInput;
    sellers?: Prisma.SellerUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUpdateManyWithoutBuyerNestedInput;
    sellerReviews?: Prisma.SellerReviewUpdateManyWithoutUserNestedInput;
    productReviews?: Prisma.ProductReviewUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    otpCodes?: Prisma.OtpCodeUncheckedUpdateManyWithoutUserNestedInput;
    sellers?: Prisma.SellerUncheckedUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUncheckedUpdateManyWithoutBuyerNestedInput;
    sellerReviews?: Prisma.SellerReviewUncheckedUpdateManyWithoutUserNestedInput;
    productReviews?: Prisma.ProductReviewUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email?: string | null;
    phone?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutOtpCodesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOtpCodesInput, Prisma.UserUncheckedCreateWithoutOtpCodesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOtpCodesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutOtpCodesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOtpCodesInput, Prisma.UserUncheckedCreateWithoutOtpCodesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOtpCodesInput;
    upsert?: Prisma.UserUpsertWithoutOtpCodesInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOtpCodesInput, Prisma.UserUpdateWithoutOtpCodesInput>, Prisma.UserUncheckedUpdateWithoutOtpCodesInput>;
};
export type UserCreateNestedOneWithoutSellersInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSellersInput, Prisma.UserUncheckedCreateWithoutSellersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSellersInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSellersNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSellersInput, Prisma.UserUncheckedCreateWithoutSellersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSellersInput;
    upsert?: Prisma.UserUpsertWithoutSellersInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSellersInput, Prisma.UserUpdateWithoutSellersInput>, Prisma.UserUncheckedUpdateWithoutSellersInput>;
};
export type UserCreateNestedOneWithoutPurchasesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPurchasesInput, Prisma.UserUncheckedCreateWithoutPurchasesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPurchasesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPurchasesInput, Prisma.UserUncheckedCreateWithoutPurchasesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPurchasesInput;
    upsert?: Prisma.UserUpsertWithoutPurchasesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPurchasesInput, Prisma.UserUpdateWithoutPurchasesInput>, Prisma.UserUncheckedUpdateWithoutPurchasesInput>;
};
export type UserCreateNestedOneWithoutSellerReviewsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSellerReviewsInput, Prisma.UserUncheckedCreateWithoutSellerReviewsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSellerReviewsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSellerReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSellerReviewsInput, Prisma.UserUncheckedCreateWithoutSellerReviewsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSellerReviewsInput;
    upsert?: Prisma.UserUpsertWithoutSellerReviewsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSellerReviewsInput, Prisma.UserUpdateWithoutSellerReviewsInput>, Prisma.UserUncheckedUpdateWithoutSellerReviewsInput>;
};
export type UserCreateNestedOneWithoutProductReviewsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProductReviewsInput, Prisma.UserUncheckedCreateWithoutProductReviewsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProductReviewsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutProductReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProductReviewsInput, Prisma.UserUncheckedCreateWithoutProductReviewsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProductReviewsInput;
    upsert?: Prisma.UserUpsertWithoutProductReviewsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutProductReviewsInput, Prisma.UserUpdateWithoutProductReviewsInput>, Prisma.UserUncheckedUpdateWithoutProductReviewsInput>;
};
export type UserCreateWithoutOtpCodesInput = {
    id?: string;
    email?: string | null;
    phone?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    sellers?: Prisma.SellerCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseCreateNestedManyWithoutBuyerInput;
    sellerReviews?: Prisma.SellerReviewCreateNestedManyWithoutUserInput;
    productReviews?: Prisma.ProductReviewCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutOtpCodesInput = {
    id?: string;
    email?: string | null;
    phone?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    sellers?: Prisma.SellerUncheckedCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseUncheckedCreateNestedManyWithoutBuyerInput;
    sellerReviews?: Prisma.SellerReviewUncheckedCreateNestedManyWithoutUserInput;
    productReviews?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutOtpCodesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOtpCodesInput, Prisma.UserUncheckedCreateWithoutOtpCodesInput>;
};
export type UserUpsertWithoutOtpCodesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOtpCodesInput, Prisma.UserUncheckedUpdateWithoutOtpCodesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOtpCodesInput, Prisma.UserUncheckedCreateWithoutOtpCodesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOtpCodesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOtpCodesInput, Prisma.UserUncheckedUpdateWithoutOtpCodesInput>;
};
export type UserUpdateWithoutOtpCodesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sellers?: Prisma.SellerUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUpdateManyWithoutBuyerNestedInput;
    sellerReviews?: Prisma.SellerReviewUpdateManyWithoutUserNestedInput;
    productReviews?: Prisma.ProductReviewUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutOtpCodesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sellers?: Prisma.SellerUncheckedUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUncheckedUpdateManyWithoutBuyerNestedInput;
    sellerReviews?: Prisma.SellerReviewUncheckedUpdateManyWithoutUserNestedInput;
    productReviews?: Prisma.ProductReviewUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSellersInput = {
    id?: string;
    email?: string | null;
    phone?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    otpCodes?: Prisma.OtpCodeCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseCreateNestedManyWithoutBuyerInput;
    sellerReviews?: Prisma.SellerReviewCreateNestedManyWithoutUserInput;
    productReviews?: Prisma.ProductReviewCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSellersInput = {
    id?: string;
    email?: string | null;
    phone?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    otpCodes?: Prisma.OtpCodeUncheckedCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseUncheckedCreateNestedManyWithoutBuyerInput;
    sellerReviews?: Prisma.SellerReviewUncheckedCreateNestedManyWithoutUserInput;
    productReviews?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSellersInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSellersInput, Prisma.UserUncheckedCreateWithoutSellersInput>;
};
export type UserUpsertWithoutSellersInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSellersInput, Prisma.UserUncheckedUpdateWithoutSellersInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSellersInput, Prisma.UserUncheckedCreateWithoutSellersInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSellersInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSellersInput, Prisma.UserUncheckedUpdateWithoutSellersInput>;
};
export type UserUpdateWithoutSellersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    otpCodes?: Prisma.OtpCodeUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUpdateManyWithoutBuyerNestedInput;
    sellerReviews?: Prisma.SellerReviewUpdateManyWithoutUserNestedInput;
    productReviews?: Prisma.ProductReviewUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSellersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    otpCodes?: Prisma.OtpCodeUncheckedUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUncheckedUpdateManyWithoutBuyerNestedInput;
    sellerReviews?: Prisma.SellerReviewUncheckedUpdateManyWithoutUserNestedInput;
    productReviews?: Prisma.ProductReviewUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutPurchasesInput = {
    id?: string;
    email?: string | null;
    phone?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    otpCodes?: Prisma.OtpCodeCreateNestedManyWithoutUserInput;
    sellers?: Prisma.SellerCreateNestedManyWithoutUserInput;
    sellerReviews?: Prisma.SellerReviewCreateNestedManyWithoutUserInput;
    productReviews?: Prisma.ProductReviewCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutPurchasesInput = {
    id?: string;
    email?: string | null;
    phone?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    otpCodes?: Prisma.OtpCodeUncheckedCreateNestedManyWithoutUserInput;
    sellers?: Prisma.SellerUncheckedCreateNestedManyWithoutUserInput;
    sellerReviews?: Prisma.SellerReviewUncheckedCreateNestedManyWithoutUserInput;
    productReviews?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutPurchasesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPurchasesInput, Prisma.UserUncheckedCreateWithoutPurchasesInput>;
};
export type UserUpsertWithoutPurchasesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPurchasesInput, Prisma.UserUncheckedUpdateWithoutPurchasesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPurchasesInput, Prisma.UserUncheckedCreateWithoutPurchasesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPurchasesInput, Prisma.UserUncheckedUpdateWithoutPurchasesInput>;
};
export type UserUpdateWithoutPurchasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    otpCodes?: Prisma.OtpCodeUpdateManyWithoutUserNestedInput;
    sellers?: Prisma.SellerUpdateManyWithoutUserNestedInput;
    sellerReviews?: Prisma.SellerReviewUpdateManyWithoutUserNestedInput;
    productReviews?: Prisma.ProductReviewUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutPurchasesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    otpCodes?: Prisma.OtpCodeUncheckedUpdateManyWithoutUserNestedInput;
    sellers?: Prisma.SellerUncheckedUpdateManyWithoutUserNestedInput;
    sellerReviews?: Prisma.SellerReviewUncheckedUpdateManyWithoutUserNestedInput;
    productReviews?: Prisma.ProductReviewUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSellerReviewsInput = {
    id?: string;
    email?: string | null;
    phone?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    otpCodes?: Prisma.OtpCodeCreateNestedManyWithoutUserInput;
    sellers?: Prisma.SellerCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseCreateNestedManyWithoutBuyerInput;
    productReviews?: Prisma.ProductReviewCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSellerReviewsInput = {
    id?: string;
    email?: string | null;
    phone?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    otpCodes?: Prisma.OtpCodeUncheckedCreateNestedManyWithoutUserInput;
    sellers?: Prisma.SellerUncheckedCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseUncheckedCreateNestedManyWithoutBuyerInput;
    productReviews?: Prisma.ProductReviewUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSellerReviewsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSellerReviewsInput, Prisma.UserUncheckedCreateWithoutSellerReviewsInput>;
};
export type UserUpsertWithoutSellerReviewsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSellerReviewsInput, Prisma.UserUncheckedUpdateWithoutSellerReviewsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSellerReviewsInput, Prisma.UserUncheckedCreateWithoutSellerReviewsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSellerReviewsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSellerReviewsInput, Prisma.UserUncheckedUpdateWithoutSellerReviewsInput>;
};
export type UserUpdateWithoutSellerReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    otpCodes?: Prisma.OtpCodeUpdateManyWithoutUserNestedInput;
    sellers?: Prisma.SellerUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUpdateManyWithoutBuyerNestedInput;
    productReviews?: Prisma.ProductReviewUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSellerReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    otpCodes?: Prisma.OtpCodeUncheckedUpdateManyWithoutUserNestedInput;
    sellers?: Prisma.SellerUncheckedUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUncheckedUpdateManyWithoutBuyerNestedInput;
    productReviews?: Prisma.ProductReviewUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutProductReviewsInput = {
    id?: string;
    email?: string | null;
    phone?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    otpCodes?: Prisma.OtpCodeCreateNestedManyWithoutUserInput;
    sellers?: Prisma.SellerCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseCreateNestedManyWithoutBuyerInput;
    sellerReviews?: Prisma.SellerReviewCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutProductReviewsInput = {
    id?: string;
    email?: string | null;
    phone?: string | null;
    name?: string | null;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    otpCodes?: Prisma.OtpCodeUncheckedCreateNestedManyWithoutUserInput;
    sellers?: Prisma.SellerUncheckedCreateNestedManyWithoutUserInput;
    purchases?: Prisma.PurchaseUncheckedCreateNestedManyWithoutBuyerInput;
    sellerReviews?: Prisma.SellerReviewUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutProductReviewsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutProductReviewsInput, Prisma.UserUncheckedCreateWithoutProductReviewsInput>;
};
export type UserUpsertWithoutProductReviewsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutProductReviewsInput, Prisma.UserUncheckedUpdateWithoutProductReviewsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutProductReviewsInput, Prisma.UserUncheckedCreateWithoutProductReviewsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutProductReviewsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutProductReviewsInput, Prisma.UserUncheckedUpdateWithoutProductReviewsInput>;
};
export type UserUpdateWithoutProductReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    otpCodes?: Prisma.OtpCodeUpdateManyWithoutUserNestedInput;
    sellers?: Prisma.SellerUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUpdateManyWithoutBuyerNestedInput;
    sellerReviews?: Prisma.SellerReviewUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutProductReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    otpCodes?: Prisma.OtpCodeUncheckedUpdateManyWithoutUserNestedInput;
    sellers?: Prisma.SellerUncheckedUpdateManyWithoutUserNestedInput;
    purchases?: Prisma.PurchaseUncheckedUpdateManyWithoutBuyerNestedInput;
    sellerReviews?: Prisma.SellerReviewUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCountOutputType = {
    otpCodes: number;
    sellers: number;
    purchases: number;
    sellerReviews: number;
    productReviews: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    otpCodes?: boolean | UserCountOutputTypeCountOtpCodesArgs;
    sellers?: boolean | UserCountOutputTypeCountSellersArgs;
    purchases?: boolean | UserCountOutputTypeCountPurchasesArgs;
    sellerReviews?: boolean | UserCountOutputTypeCountSellerReviewsArgs;
    productReviews?: boolean | UserCountOutputTypeCountProductReviewsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountOtpCodesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OtpCodeWhereInput;
};
export type UserCountOutputTypeCountSellersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerWhereInput;
};
export type UserCountOutputTypeCountPurchasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseWhereInput;
};
export type UserCountOutputTypeCountSellerReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerReviewWhereInput;
};
export type UserCountOutputTypeCountProductReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductReviewWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    phone?: boolean;
    name?: boolean;
    avatarUrl?: boolean;
    createdAt?: boolean;
    otpCodes?: boolean | Prisma.User$otpCodesArgs<ExtArgs>;
    sellers?: boolean | Prisma.User$sellersArgs<ExtArgs>;
    purchases?: boolean | Prisma.User$purchasesArgs<ExtArgs>;
    sellerReviews?: boolean | Prisma.User$sellerReviewsArgs<ExtArgs>;
    productReviews?: boolean | Prisma.User$productReviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    phone?: boolean;
    name?: boolean;
    avatarUrl?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    phone?: boolean;
    name?: boolean;
    avatarUrl?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    phone?: boolean;
    name?: boolean;
    avatarUrl?: boolean;
    createdAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "phone" | "name" | "avatarUrl" | "createdAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    otpCodes?: boolean | Prisma.User$otpCodesArgs<ExtArgs>;
    sellers?: boolean | Prisma.User$sellersArgs<ExtArgs>;
    purchases?: boolean | Prisma.User$purchasesArgs<ExtArgs>;
    sellerReviews?: boolean | Prisma.User$sellerReviewsArgs<ExtArgs>;
    productReviews?: boolean | Prisma.User$productReviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        otpCodes: Prisma.$OtpCodePayload<ExtArgs>[];
        sellers: Prisma.$SellerPayload<ExtArgs>[];
        purchases: Prisma.$PurchasePayload<ExtArgs>[];
        sellerReviews: Prisma.$SellerReviewPayload<ExtArgs>[];
        productReviews: Prisma.$ProductReviewPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string | null;
        phone: string | null;
        name: string | null;
        avatarUrl: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    otpCodes<T extends Prisma.User$otpCodesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$otpCodesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtpCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sellers<T extends Prisma.User$sellersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$sellersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    purchases<T extends Prisma.User$purchasesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sellerReviews<T extends Prisma.User$sellerReviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$sellerReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    productReviews<T extends Prisma.User$productReviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$productReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly phone: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly avatarUrl: Prisma.FieldRef<"User", 'String'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$otpCodesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpCodeSelect<ExtArgs> | null;
    omit?: Prisma.OtpCodeOmit<ExtArgs> | null;
    include?: Prisma.OtpCodeInclude<ExtArgs> | null;
    where?: Prisma.OtpCodeWhereInput;
    orderBy?: Prisma.OtpCodeOrderByWithRelationInput | Prisma.OtpCodeOrderByWithRelationInput[];
    cursor?: Prisma.OtpCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OtpCodeScalarFieldEnum | Prisma.OtpCodeScalarFieldEnum[];
};
export type User$sellersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$purchasesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$sellerReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$productReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};

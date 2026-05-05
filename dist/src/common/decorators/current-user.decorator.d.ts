export type CurrentUser = {
    userId: string;
    email?: string | null;
    phone?: string | null;
};
export declare const CurrentUser: (...dataOrPipes: unknown[]) => ParameterDecorator;

export interface IUser {
    id?: number,
    login: string,
    email: string,
    password?: string,
    role: string
}

export interface IRefresh {
    user: IUser,
    accessToken: string
}

export interface IResponse {
    user: IUser,
    accessToken: string
    refreshToken: string
}
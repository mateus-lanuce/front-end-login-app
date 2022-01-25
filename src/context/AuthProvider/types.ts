import React from "react";

export interface IUser {
    email?: string;
    id?: string;
    token?: string;
}

export interface IContext extends IUser {
    authenticate: (email: string, password: string) => Promise<void>;
    logout: () => void;
    setUser: (user: IUser) => void;
    user: IUser | null;
}

export interface IAuthProvider {
    children: JSX.Element
}
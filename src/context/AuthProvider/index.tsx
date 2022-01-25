import React, { createContext, useEffect, useState } from 'react';
import { IAuthProvider, IContext, IUser } from './types';
import { getEmployeesList, getUserLocalStorage, LoginRequest, setToken, setUserLocalStorage } from './utils';



export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {

    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        const user = getUserLocalStorage();

        if(user) {
            setUser(user);
        }
    }, [])


    /**
     * função que faz a altenticação do email e senha com a API.
     * @param {string} email 
     * @param {string} password 
     */
    async function authenticate(email: string, password:string) {
        const response = await LoginRequest(email, password);

        const payLoad = { email: response.email, id: response.id , token: response.token };

        

        //setToken(response.token);
        console.log('deu certo', response.token)


        setUser(payLoad);
        setUserLocalStorage(payLoad)
    }

    function logout() {
        setUser(null);
        setUserLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{...user, user, setUser, authenticate, logout}}>
            { children }
        </AuthContext.Provider>
    );
}


import { Api } from '../../services/api';
import { IUser } from './types';


/**
 * função que faz a chamada para api e tenta fazer o login.
 * @param {string} email 
 * @param {string} password 
 */
export async function LoginRequest(email: string, password: string) {
    try {
        const request = await Api.post("users/login", {email, password})

        console.log(request);
        return request.data;
    } catch (error) {
        console.log(error)
        return null;
    }
}


/**
 * função que salva os dados do usuario no localStorage (email e token)
 * @param {IUser | null} user 
 */
export function setUserLocalStorage(user: IUser | null) {
    localStorage.setItem('u', JSON.stringify(user))
}

/**
 * função que retorna o Usuario salvo no localStorage
 * @returns {Iuser | null} user
 */
export function getUserLocalStorage(): IUser | null {
   const user = localStorage.getItem('u');

    if(!user) {
        return null;
    }

    return JSON.parse(user) ?? null;    
}


/**
 * função que seta o token no header
 * @param {string} token 
 */
export function setToken(token: string) {
   // Api.defaults.headers.Authorization = `Bearer ${token}`
}

export async function getEmployeesList() {
    try {
        const request = await Api.get("employees")

        console.log(request);
        return request.data;
    } catch (error) {
        console.log(error)
        return null;
    }
}

import { login, register } from "../services/UserService";

export const handlerLoginUser = async ( newUser ) =>{
    const res = await login(newUser)
    if (res.token) {
        localStorage.setItem('authToken', result.token);
        return res;
    }
    // const token = res.headers.authorization;
    // console.log('Token:', token)
    // user = { res, token}
    // return user;
}

export const handlerRegisterUser = async ( user ) =>{
    const res = await register(user)
    return res;
}
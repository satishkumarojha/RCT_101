import { LOGIN, LOGOUT } from "./auth.types"

export const login = (val)=>({type:LOGIN,payload:val});
export const logout = ()=>({type:LOGOUT});
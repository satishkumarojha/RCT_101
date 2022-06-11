import { LOGIN, LOGOUT } from "./auth.types";

const init = {
    login:false
}

export const authreducer = (state=init,{type,payload})=>{
    switch(type){
        case LOGIN :{
            console.log(payload);
            return {...state,login:true}
        }
        case LOGOUT :{
            return {...state,login:false}
        }
        default :{
            return state
        }
    }
}
import { GET_FEEDS } from "./feed.types"

const init = {
    dat:[]
}
export const feedreducer = (state=init,{type,payload})=>{
    switch(type){
        case GET_FEEDS :{
            return {...state,data:payload}
        }
        default :{
            return state;
        }
    }
}
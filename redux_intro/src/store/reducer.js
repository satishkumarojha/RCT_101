const init = {
    counter:0
}
export const reducer = (state = init,action)=>{
    switch(action.type){
        case "inc_count":{
            state.counter++;
            return {...state}
        }
        case "dec_count":{
            state.counter-=1;
            return {...state}
        }
        default:{
            return state;
        }
    }
}
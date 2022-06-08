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
        case "add_count":{
            // console.log(typeof(state.counter));
            // console.log(typeof(action.payload));
            state.counter+=action.payload;
            return {...state}
        }
        case "sub_count":{
            state.counter-=action.payload;
            return {...state}
        }
        case "mult_count":{
            state.counter*=action.payload;
            return {...state}
        }
        case "div_count":{
            state.counter/=action.payload;
            return {...state}
        }
        default:{
            return state;
        }
    }
}
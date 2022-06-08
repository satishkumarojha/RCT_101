import { add_count, dec_count, div_count, inc_count, mult_count, sub_count } from "./action.types";

export const inc = ()=>({type:inc_count});
export const dec = ()=>({type:dec_count})
export const add = (value)=>({type:add_count,payload:value});
export const sub = (value)=>({type:sub_count,payload:value});
export const mult = (value)=>({type:mult_count,payload:value});
export const div = (value)=>({type:div_count,payload:value});

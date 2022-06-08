import { dec_count, inc_count } from "./action.types";

export const inc = ()=>({type:inc_count});
export const dec = ()=>({type:dec_count})
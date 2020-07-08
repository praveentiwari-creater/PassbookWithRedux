import {MODAL_NOTSHOW,MODAL_SHOW,TEXT1,TEXT2,VALID,NOT_VALID,myData} from './actionType';

export const modalNotShow=()=>{
    return{
    type:'MODAL_NOTSHOW',
}
}

export const modalShow=()=>{
    return{
    type:'MODAL_SHOW',
}
}

export const myDataShow=(data)=>{
    return{
    type:'myData',
    payload:data
}
}

// export const textFun1=()=>{
//     return{
//     type:'TEXT1',
// }
// }

// export const textFun2=()=>{
//     return{
//     type:'TEXT2',
// }
// }

// export const validFun=()=>{
//     return{
//     type:'VALID',
// }
// }

// export const notValidFun=()=>{
//     return{
//     type:'NOT_VALID',
// }
// }
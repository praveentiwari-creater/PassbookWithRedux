import {MODAL_NOTSHOW, MODAL_SHOW,TEXT1,TEXT2,VALID,NOT_VALID,myData} from './actionType'
import {combineReducers} from 'redux';
const initialNotShowState={
    state_notshow:null,
    dataStore:[]

}

// const initialStateText1={
//     textState1:[]
// }

// const initialStateText2={
//     textState2:[]
// }

// const initialValidation={
//     validationValid:true
// }
//   const modalNotShowReducer
const ActionReducer  =(state=initialNotShowState, action)=>{
    switch(action.type){
        case MODAL_NOTSHOW:return{
            ...state,
            state_notshow:true
        }
        case MODAL_SHOW:return{
            ...state,
            state_notshow:false
        }

        case myData:return{
            ...state,
            dataStore:action.payload
        }
        default: return state;
    }

}

// const stateChange1=(state=initialStateText1, action)=>{
//     switch(action.type){
//         case TEXT1:return{
//             textState1:[]
//         }
//         default:return state;
//     }

// }

// const stateChange2=(state=initialStateText2, action)=>{
//     switch(action.type){
//         case TEXT2:return{
//             textState2:[]
//         }
//         default:return state;
//     }

// }

// const validationReducer=(state=initialValidation, action)=>{
//     switch(action.type){
//         case VALID:return{
//             ...state,
//             validationValid:false
//         }
//         case NOT_VALID:return{
//             ...state,
//             validationValid:true
//         }
//         default: return state;
//     }
// }

//  const ActionReducer=combineReducers({name:modalNotShowReducer,name1:stateChange1,name2:stateChange2,name3:validationReducer})
export default ActionReducer;
import { LOGIN_SUCCESS } from "./actiontype";
const initialState={
    isLoggedIn:false
}
const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                isLoggedIn:true
            }
        default:
            return state
    }

}
export {authReducer}
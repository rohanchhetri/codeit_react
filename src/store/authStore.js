const token=localStorage.getItem("_token_")??null
const initialState={
    isLoggedIn:token!==null?true:false,
    token:token
}
export const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case "LOGIN":
            return{
                ...state,
                isLoggedIn:action.payload.isLoggedIn,
                token:action.payload.token
            }
        
        default:
            return state
    }


}


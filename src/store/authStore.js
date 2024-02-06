const authState={
    isLoggedIn:false
}
const authReducer=(state=authState,action)=>{
    switch(action.type){
        case "LOGIN":
            return{
                ...state,
                isLoggedIn:action.payload
            }
        default:
            return state
    }
}
export default authReducer
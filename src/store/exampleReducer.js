import React from 'react'

const initialState={
    example:true
}


export const exampleReducer = (state=initialState,action) => {
  switch(action.type){
    case "exampleFalse":
        return{
            example:false
        }
    default:
        return state
  }
}

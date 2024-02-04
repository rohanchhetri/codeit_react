import React from 'react'
//this is a card component
const Card = (props) => {
  const{name,address,occupation}=props
 
  return (
 <div>
 <h2>Card Details</h2>
    <p>name:{name}</p>
    <p>address:{address}</p>
    <p>occupation:{occupation}</p>
 </div>
    
  )
}

export default Card
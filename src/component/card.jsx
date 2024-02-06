import React from 'react'
import PropsTypes from 'prop-types'
import{Link} from 'react-router-dom'
//this is a card component
const Card = (props) => {
  const{title,img,description,btnLabel,id}=props
  
  return (
    <div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" src={img} alt="Card image cap" alt=""/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <Link to={`/blog/${id}`}>
      <p className="btn btn-primary">{btnLabel}</p>
      </Link>
    </div>
  </div>
    
  )
}
Card.propsTypes={
  title:PropsTypes.string.isRequired,
  description:PropsTypes.string.isRequired,
  img:PropsTypes.string.isRequired,
  btnLabel:PropsTypes.string.isRequired,
  id:PropsTypes.number,

}

export default Card
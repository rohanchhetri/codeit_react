import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import{useLocation} from 'react-router-dom'
import PropsTypes from "prop-types"
const NavBar = (props) => {
  const{items}=props
  const loc=useLocation().pathname
 
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{width:"100%"}}>
  <div  style={{display:'flex',width:"100%",gap:"2rem",padding:"0.2rem 1rem"}}>
    <div>
        <h4>Logo</h4>
    </div>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav" style={{display:'flex',gap:"1rem"}}>
        {items.map((item,index)=>{
           
            return(
                <div key={index}>
                    <NavLink to={item.path} className={item.path===loc?"active":"navlink"}>
                    {item.name}
                    </NavLink>
                </div>
            )
        })}
      </ul>
    </div>
  </div>
</nav>
  )
}
NavBar.propTypes={
    items:PropsTypes.arrayOf(
        PropsTypes.shape({
            name:PropsTypes.string.isRequired,
            path:PropsTypes.string.isRequired
        })
    )
}

export default NavBar
import React from 'react'
import { useEffect } from 'react'
const About = () => {
  useEffect(()=>{
    document.title="About"
  },[])
  return (
    <div>About</div>
  )
}

export default About
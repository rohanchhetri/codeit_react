import React, { useEffect } from 'react'


const Home = () => {
  useEffect(()=>{
    document.title="Home"
  },[])
  return (
<>
<p>Home</p>
</>

)
}

export default Home

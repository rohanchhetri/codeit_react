import React from 'react'
import Card from '../component/card'
import cardIamge2 from '../assets/image/img2.png'

const Blog = () => {
  return (
   <div style={{
    padding:"1rem",
    display:'flex',
    alignItems:"center",
    justifyContent:"center",
    gap:"1rem"
   }}>
    {cardData?.map((item,index)=>(
   <div key={index}>
    <Card 
      btnLabel="show details"
      description={item.description}
      img={item.img}
      id={item.id}
    />
   </div>
    ))}
  
    
    

   </div>
  )
}

export default Blog

const cardData=[
  {
    id:1,
    title:"this is my first blog card",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
    img:"/img1.png",
  },
  {
    id:2,
    title:"this is my first blog card 2",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
    img:"/img1.png",
  },
  {
    id:3,
    title:"this is my first blog card 3",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
    img:cardIamge2,
  },
  {
    id:4,
    title:"this is my first blog card 4",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
    img:"/img1.png",
  }
]


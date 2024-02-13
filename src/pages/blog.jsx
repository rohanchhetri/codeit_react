import React, { useEffect, useState } from "react";
import Card from "../component/card";
import cardIamge2 from "../assets/image/img2.png";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const getBlog = async () => {
      const responseData = await fetch("http://localhost:8000/blog/");
      const responseJson = await responseData.json();
      if (responseJson.status === 200) {
        setBlogData(responseJson?.data);
      }
    };
    getBlog();
  }, []);
  // console.log(blogData, "data");

  return (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      {blogData.map((items, index) => (
        <div>
          <Card
            btnLabel="show details"
            title={items.title}
            description={items.description}
            img={items.image}
            id={items._id}
          />
        </div>
      ))}
    </div>
  );
};

export default Blog;

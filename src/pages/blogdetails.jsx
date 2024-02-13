import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [singleBlogData, setSingleBlogData] = useState({});
  useEffect(() => {
    const getSigleBlog = async () => {
      if (id) {
        const responseData = await fetch(`http://localhost:8000/blog/${id}`);
        const responseJson = await responseData.json();
        setSingleBlogData(responseJson.data);
      }
    };
    getSigleBlog();
  }, [id]);
  return (
    <>
      <div>
        <h6>{singleBlogData.titles}</h6>
        <img src={singleBlogData.image} alt="" />
        <p>{singleBlogData.description}</p>
      </div>
    </>
  );
};

export default BlogDetails;

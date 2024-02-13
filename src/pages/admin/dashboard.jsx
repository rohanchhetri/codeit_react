import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const nav = useNavigate();
  const onSubmit = async (payload) => {
    payload.preventDefault();
    const data = {
      title: payload.target.elements.title.value,
      image: payload.target.elements.image.value,
      description: payload.target.elements.description.value,
    };
    // console.log(data, "payloads");
    const responseData = await fetch("http://localhost:8000/blog-create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseJson = await responseData.json();
    if (responseJson.status === 200) {
      nav("/blog");
    }
  };
  return (
    <div style={{ marginTop: "10px" }}>
      <h4 style={{ textAlign: "center" }}>Create Blog</h4>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={onSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Title</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="title"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">image url</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="image url"
              name="image"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Description</label>
            <textarea
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="blog description"
              name="description"
            />
          </div>
          <button
            style={{ marginTop: "10px" }}
            type="submit"
            class="btn btn-primary"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;

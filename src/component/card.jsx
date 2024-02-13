import React from "react";
import PropsTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//this is a card component
const Card = (props) => {
  const { title, img, description, btnLabel, id } = props;
  const authCtx = useSelector((state) => state.authReducer);
  const { isLoggedIn } = authCtx;

  const handleDelete = async (blogId) => {
    const responseData = await fetch(`http://localhost:8000/blog/${blogId}`, {
      method: "DELETE",
    });
    const responseJson = await responseData.json();
    console.log(responseJson, "json");
    if (responseJson.status === 200) {
      window.location.href = "/blog";
    }
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={img} alt="Card image cap" alt="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link to={`/blog/${id}`}>
          <p className="btn btn-primary">{btnLabel}</p>
        </Link>
      </div>
      {isLoggedIn && (
        <div
          style={{
            padding: "0 1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link to={"/admin/blog-edit"}>
            <p className="btn btn-warning">Edit</p>
          </Link>
          <p className="btn btn-danger" onClick={() => handleDelete(id)}>
            Delete
          </p>
        </div>
      )}
    </div>
  );
};
Card.propsTypes = {
  title: PropsTypes.string.isRequired,
  description: PropsTypes.string.isRequired,
  img: PropsTypes.string.isRequired,
  btnLabel: PropsTypes.string.isRequired,
  id: PropsTypes.number,
};

export default Card;

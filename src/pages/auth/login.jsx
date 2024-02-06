import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    if (email === "admin@gmail.com" && password === "password") {
      dispatch({
        type: "LOGIN",
        payload: true,
      });
      nav("/");
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };
  return (
    <>
      {error && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <div class="alert alert-danger" role="alert">
            Sorry credential did not match.
          </div>
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
          width: "100%",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div class="form-group mt-4">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary mt-4"
            style={{ width: "100%" }}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;

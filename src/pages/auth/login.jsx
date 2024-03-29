import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [error, setError] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const responseData = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const responsJson = await responseData.json();
    if (responsJson.status === 200) {
      localStorage.setItem("_token_", responsJson?.data?.token);
      dispatch({
        type: "LOGIN",
        payload: {
          isLoggedIn: true,
        },
      });
      nav("/admin/dashboard");
    }
    // if (email === "admin@gmail.com" && password === "password") {
    //   const token = "12345678";
    //   localStorage.setItem("_token_", token);
    //   dispatch({
    //     type: "LOGIN",
    //     payload: {
    //       isLoggedIn: true,
    //       token: token,
    //     },
    //   });

    //   nav("/admin/dashboard");
    // } else {
    //   setError(true);
    // }
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
        <form onSubmit={handleLoginSubmit}>
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

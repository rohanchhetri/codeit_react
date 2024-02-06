import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  const authCtx = useSelector((state) => state.authReducer);
  console.log(authCtx.isLoggedIn);
  return (
    <>
      <p>Home</p>
    </>
  );
};

export default Home;

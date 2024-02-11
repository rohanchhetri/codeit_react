import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TextDisplay from "../component/TextDisplay";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  const authCtx = useSelector((state) => state.authReducer);

  return (
    <>
      <h1>home</h1>
    </>
  );
};

export default Home;

import React from "react";
import { useSelector } from "react-redux";
const NoRelationPage = () => {
  const authCtx = useSelector((state) => state.authReducer);
  console.log(authCtx, "for no page relation");
  return <div>NoRelationPage</div>;
};

export default NoRelationPage;

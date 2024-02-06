import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useLocation } from "react-router-dom";
import PropsTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const NavBar = (props) => {
  const { items } = props;
  const dispatch = useDispatch();
  const authCtx = useSelector((state) => state.authReducer);
  const { isLoggedIn } = authCtx;
  const nav = useNavigate();
  const loc = useLocation().pathname;
  const handleLogin = () => {
    nav("/login");
  };
  const handleLogout = () => {
    dispatch({
      type: "LOGIN",
      payload: false,
    });
  };
  return (
    <nav className="navbar  bg-body-tertiary" style={{ width: "100%" }}>
      <div
        style={{
          minWidth: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.2rem 1rem",
        }}
      >
        <div>
          <h4>Logo</h4>
        </div>
        <div>
          <ul className="navbar" style={{ display: "flex", gap: "1rem" }}>
            {items.map((item, index) => {
              return (
                <div key={index}>
                  <NavLink
                    to={item.path}
                    className={item.path === loc ? "active" : "navlink"}
                  >
                    {item.name}
                  </NavLink>
                </div>
              );
            })}
            {isLoggedIn && (
              <NavLink
                to={"/admin/dashboard"}
                className={loc === "/admin/dashboard" ? "active" : "navlink"}
              >
                Dashboard
              </NavLink>
            )}
          </ul>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {isLoggedIn ? (
            <p className="btn btn-primary" onClick={handleLogout}>
              Logout
            </p>
          ) : (
            <p className="btn btn-primary" onClick={handleLogin}>
              Login
            </p>
          )}
        </div>
      </div>
    </nav>
  );
};
NavBar.propTypes = {
  items: PropsTypes.arrayOf(
    PropsTypes.shape({
      name: PropsTypes.string.isRequired,
      path: PropsTypes.string.isRequired,
    })
  ),
};

export default NavBar;

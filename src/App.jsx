import "./App.css";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";
import PageNotFound from "./pages/pagenotfound";
import Blog from "./pages/blog";
import BlogDetails from "./pages/blogdetails";
import NavBar from "./component/navbar";
import { navBarItems } from "./component/navbaritems";
import Login from "./pages/auth/login";
import Dashboard from "./pages/admin/dashboard";
import { AuthWrapper } from "./wrapper/authwrapper";
import Setting from "./pages/admin/setting";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import EditBlog from "./pages/admin/editblog";

const routeItems = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:id",
    element: <BlogDetails />,
  },
];
const adminDashboard = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/setting",
    element: <Setting />,
  },
  {
    path: "/blog-edit",
    element: <EditBlog />,
  },
];
const App = () => {
  const path = useLocation().pathname;
  const authCtx = useSelector((state) => state.authReducer);
  const { isLoggedIn } = authCtx;

  useEffect(() => {
    if (isLoggedIn) {
      if (path === "/login") {
        window.location.href = "/admin/dashboard";
      }
    }
  }, [path]);
  return (
    <>
      <NavBar items={navBarItems} />
      <Routes>
        {routeItems.map((route) => (
          <>
            <Route path={route.path} element={route.element} />
          </>
        ))}
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        {adminDashboard.map((route) => (
          <Route
            element={
              <AuthWrapper>
                <Outlet />
              </AuthWrapper>
            }
          >
            {adminDashboard.map((route, index) => (
              <Route path={`/admin${route.path}`} element={route.element} />
            ))}
          </Route>
        ))}
        {/* <>
              <Route
                element={
                  <AuthWrapper>
                    <Outlet />
                  </AuthWrapper>
                }
              >
                {adminDashboard.map((route, index) => (
                  <Route path={`/admin${route.path}`} element={route.element} />
                ))}
              </Route>
            </> */}
      </Routes>
    </>
  );
};

export default App;

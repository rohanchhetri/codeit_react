import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
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
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AuthWrapper } from "./wrapper/authwrapper";
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
];
const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar items={navBarItems} />
          <Routes>
            {routeItems.map((route) => (
              <>
                <Route path={route.path} element={route.element} />
              </>
            ))}
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/login" element={<Login />} />
            <>
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
            </>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;

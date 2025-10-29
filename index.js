import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link, Outlet } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";


function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> {" / "}
        <Link to="/about">About</Link> {" / "}
        <Link to="/contact">Contact</Link>
      </nav>
      <div style={{ marginTop: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/a", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/b", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/c", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


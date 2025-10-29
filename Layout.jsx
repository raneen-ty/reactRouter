import React from "react";
import { Link, Outlet } from "react-router-dom";

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

export default Layout;


import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function Product() {
  return (
    <div>
      <h1>Product</h1>

      <Link to="elec">Elec</Link>
      <Outlet />
    </div>
  );
}

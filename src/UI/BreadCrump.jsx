import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function BreadCrump() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      <Link to={"/"}>خانه</Link>
    </div>
  );
}

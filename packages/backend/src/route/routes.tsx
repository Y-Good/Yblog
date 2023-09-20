import Home from "../views/Home";
import { Navigate, NavLink, RouteObject } from "react-router-dom";
import ABC from "../views/ABC";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="home" />,
  },
  {
    path: "home",
    element: <ABC />,
  },
];

export default routes;

import Home from "../views/Home";
import { Navigate, RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="home" />,
  },
  {
    path: "home",
    element: <Home />,
  },
];

export default routes;

import Home from "../views/Home";
import { Navigate, RouteObject } from "react-router-dom";
import Tag from "../views/Tag";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="home" />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "tag",
    element: <Tag />,
  },
];

export default routes;

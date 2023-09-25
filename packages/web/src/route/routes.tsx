import Home from "../views/Home";
import Post from "../views/Post";
import About from "../views/About";
import Error from "../views/Error";
import App from "../App";
import { Navigate, RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="blog/home" />,
  },
  {
    path: "blog",
    element: <App />,
    children: [
      {
        // index: true,
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "post",
        element: <Post />,
      },
      {
        path: "backend",
        element: <Error />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
];

export default routes;

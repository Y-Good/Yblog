import Home from "../views/Home";
import Post from "../views/Post";
import About from "../views/About";
import Error from "../views/Error";
import { RouteObject } from "react-router/dist/lib/context";
import App from "../App";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            {
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
    }
];

export default routes;

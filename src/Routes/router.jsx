import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <h1>Loading...</h1>,
    children: [
        {
            index: true,
            Component: Home,
        }
    ]
  },
]);

export default router;
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import AppsPage from "../Pages/AppsPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <h1>Loading...</h1>,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
          path: "/apps",
          Component: AppsPage,
        }
    ]
  },
]);

export default router;
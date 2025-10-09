import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import AppsPage from "../Pages/AppsPage";
import AppsDetails from "../Pages/AppsDetails";
import Error404 from "../Pages/ErrorPages/Error404";
import AppError from "../Pages/ErrorPages/AppError";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error404 />,
    Component: Root,
    hydrateFallbackElement: <p>Hello World</p>,
    children: [
        {
            index: true,
            errorElement: <Error404 />,
            Component: Home,
        },
        {
          path: "/apps",
          errorElement: <Error404 />,
          Component: AppsPage,
        },
        {
          path: "/app/:appId",
          errorElement: <AppError />,
          Component: AppsDetails,
        },
        {
          path: "/installed-app",
          errorElement: <Error404 />,
          Component: Installation
        },
    ]
  },
]);

export default router;
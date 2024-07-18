import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Register from "../dashboard/auth/Register";
import Auth from "../dashboard/auth/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Auth />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;

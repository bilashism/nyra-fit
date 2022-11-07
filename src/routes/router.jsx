import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ],
    errorElement: <NotFound />
  }
]);

import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
const APP_SERVER = import.meta.env.VITE_APP_SERVER;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch(`${APP_SERVER}/services`)
      }
    ],
    errorElement: <NotFound />
  }
]);

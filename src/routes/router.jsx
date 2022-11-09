import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Service from "../pages/Service/Service";
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
      },
      {
        path: "/service/:id",
        element: <Service />,
        loader: ({ params }) => fetch(`${APP_SERVER}/service/${params.id}`)
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      }
    ],
    errorElement: <NotFound />
  }
]);

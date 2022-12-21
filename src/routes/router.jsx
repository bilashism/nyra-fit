import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import Main from "../layouts/Main/Main";
import AddService from "../pages/AddService/AddService";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import Register from "../pages/Register/Register";
import Service from "../pages/Service/Service";
import Services from "../pages/Services/Services";
import PrivateRoute from "../routes/PrivateRoute/PrivateRoute";
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
        element: <Services />
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
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        )
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        )
      },
      {
        path: "/blogs",
        element: <Blogs />
      }
    ],
    errorElement: <NotFound />
  }
]);

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
export const APP_SERVER = import.meta.env.VITE_APP_SERVER;

function App() {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

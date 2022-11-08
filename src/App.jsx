import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

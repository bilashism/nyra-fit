import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="max-w-screen-xl mx-auto px-4">
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;

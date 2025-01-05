import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/ErrorPage";
import Shop from "./pages/Shop";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

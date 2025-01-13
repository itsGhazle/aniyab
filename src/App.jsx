import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/ErrorPage";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import GlobalStyles from "./styles/GlobalStyles";
import News from "./pages/News";
import ContactUs from "./pages/ContactUs";
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
      {
        path: "/AllNews",
        element: <Blog />,
      },
      {
        path: "/News",
        element: <News />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

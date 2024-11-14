import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root";
import { ThemeProvider } from "@material-tailwind/react";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import GadgetDetail from "./Components/Gadget/GadgetDetail/GadgetDetail";
import CartList from "./Components/CartList/CartList";
import WishList from "./Components/WishList/WishList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from "./Components/DashBoard/DashBoard";
import { HelmetProvider } from "react-helmet-async";
import Statistics from "./Components/Statistics/Statistics";
import ContactUs from "./Components/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("/gadgetData.json"),
      },
      {
        path: "/gadgets/:product_id",
        element: <GadgetDetail />,
        loader: () => fetch("/gadgetData.json"),
      },
      {
        path: "/cartlist",
        element: <CartList />,
        loader: () => fetch("/gadgetData.json"),
      },
      {
        path: "/wishlist",
        element: <WishList />,
        loader: () => fetch("/gadgetData.json"),
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
        children: [
          {
            index: true,
            element: <Navigate to="cartlist" replace />,
          },
          {
            path: "cartlist",
            element: <CartList />,
            loader: () => fetch("/gadgetData.json"),
          },
          {
            path: "wishlist",
            element: <WishList />,
            loader: () => fetch("/gadgetData.json"),
          },
        ],
      },
      {
        path:"/contact-us",
        element:<ContactUs />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);

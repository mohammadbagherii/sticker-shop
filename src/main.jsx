import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import NotFound from "./components/NotFound";
import "./index.css";
import { store } from "./store";
import MainLayout from "./components/layouts/MainLayout";
import { ToastContainer } from "react-toastify";
import ProductDetails from "./components/ProductDetails";

import "react-toastify/dist/ReactToastify.css";
import CartTable from "./components/CartTable";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
    },
    {
        path: "/products/:productID",
        element: (
            <MainLayout>
                <ProductDetails />
            </MainLayout>
        ),
    },
    {
        path: "/cart",
        element: (
            <MainLayout>
                <CartTable />
            </MainLayout>
        ),
    },
]);

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
            <ToastContainer />
        </Provider>
    </React.StrictMode>
);

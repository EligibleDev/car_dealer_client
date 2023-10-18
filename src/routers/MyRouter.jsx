import { createBrowserRouter } from "react-router-dom";
import MyLayout from "../layouts/MyLayout";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import AddProduct from "../pages/AddProduct/AddProduct";
import BrandDetails from "../pages/BrandDetails/BrandDetails";

const MyRouter = createBrowserRouter([
    {
        path: "/",
        element: <MyLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("/brands.json"),
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/add_product",
                element: <AddProduct />,
            },
            {
                path: "/brands/:name",
                element: <BrandDetails />,
                loader: () => fetch("/brands.json"),
            },
        ],
    },
]);

export default MyRouter;

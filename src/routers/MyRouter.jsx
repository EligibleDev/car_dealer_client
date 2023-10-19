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
                loader: () => fetch("http://localhost:5000/brands"),
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
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/brands/${params.name}`),
            },
        ],
    },
]);

export default MyRouter;
// pore brand json ta file er moddhe theke load korte hobe
// ar product gulo loader diye load korte hobe

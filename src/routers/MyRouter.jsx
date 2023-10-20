import { createBrowserRouter } from "react-router-dom";
import MyLayout from "../layouts/MyLayout";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import AddProduct from "../pages/AddProduct/AddProduct";
import BrandDetails from "../pages/BrandDetails/BrandDetails";
import CarDetails from "../pages/CarDetails/CarDetails";
import UpdateCar from "../pages/UpdateCar/UpdateCar";
import LoginRegister from "../pages/LoginRegister/LoginRegister";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

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
                element: (
                    <PrivateRoute>
                        <Cart />
                    </PrivateRoute>
                ),
                loader: () => fetch("http://localhost:5000/cart"),
            },
            {
                path: "/add_product",
                element: (
                    <PrivateRoute>
                        <AddProduct />
                    </PrivateRoute>
                ),
            },
            {
                path: "/update_car/:id",
                element: (
                    <PrivateRoute>
                        <UpdateCar />
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`http://localhost:5000/cars/${params.id}`),
            },
            {
                path: "/brands/:name",
                element: <BrandDetails />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/brands/${params.name}`),
            },
            {
                path: "cars/:id",
                element: (
                    <PrivateRoute>
                        <CarDetails />
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`http://localhost:5000/cars/${params.id}`),
            },
            {
                path: "/login-register",
                element: <LoginRegister />,
                children: [
                    {
                        path: "/login-register/login",
                        element: <Login />,
                    },
                    {
                        path: "/login-register/register",
                        element: <Register />,
                    },
                ],
            },
        ],
    },
]);

export default MyRouter;

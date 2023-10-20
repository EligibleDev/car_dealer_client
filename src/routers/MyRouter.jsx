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
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const MyRouter = createBrowserRouter([
    {
        path: "/",
        element: <MyLayout />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("https://assignment-10-server-lmg8qfdfu-mikails-projects-c152681f.vercel.app/brands"),
            },
            {
                path: "/my-cart/:email",
                element: (
                    <PrivateRoute>
                        <Cart />
                    </PrivateRoute>
                ),
                loader: ({params}) => fetch(`https://assignment-10-server-lmg8qfdfu-mikails-projects-c152681f.vercel.app/my-cart/${params.email}`),
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
                loader: ({ params }) => fetch(`https://assignment-10-server-lmg8qfdfu-mikails-projects-c152681f.vercel.app/cars/${params.id}`),
            },
            {
                path: "/brands/:name",
                element: <BrandDetails />,
                loader: ({ params }) =>
                    fetch(`https://assignment-10-server-lmg8qfdfu-mikails-projects-c152681f.vercel.app/brands/${params.name}`),
            },
            {
                path: "cars/:id",
                element: (
                    <PrivateRoute>
                        <CarDetails />
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`https://assignment-10-server-lmg8qfdfu-mikails-projects-c152681f.vercel.app/cars/${params.id}`),
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

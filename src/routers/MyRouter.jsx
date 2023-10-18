import { createBrowserRouter } from "react-router-dom";
import MyLayout from "../layouts/MyLayout";
import Home from "../pages/Home/Home";

const MyRouter = createBrowserRouter([
      {
            path:'/',
            element:<MyLayout/>,
            children: [
                  {
                        path: "/",
                        element:<Home/>
                  }
            ]
      }
]);

export default MyRouter;
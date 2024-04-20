import  App  from "@/App";
import { createBrowserRouter } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<App></App>
    },
    {
        path:"/register",
        element:<Register></Register>
    },
    {
        path:"/login",
        element:<Login></Login>
    },
]) ;

export default routes;
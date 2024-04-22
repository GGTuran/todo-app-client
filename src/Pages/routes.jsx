import  App  from "@/App";
import { createBrowserRouter } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Private from "./Private";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Private><App></App></Private>
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
/* eslint-disable react/prop-types */

import verifyToken from "@/Utils/verifyToken";
import { Navigate } from "react-router-dom";


const Private = ({children}) => {
   const accessToken = localStorage.getItem("AccessToken");
 
   

   
   if(!accessToken || !verifyToken){
    return <Navigate to='/login'></Navigate>
   }


   return children;
};

export default Private;
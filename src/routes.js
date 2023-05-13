import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Auth from "./views/auth/Auth";
import Details from "./views/details/Details";
import Users from "./views/users/Users";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Auth }  path="/" exact />
           <Route component = { Details }  path="/details/:login" />
           <Route component = { Users }  path="/users" />
       </BrowserRouter>
   )
}

export default Routes;
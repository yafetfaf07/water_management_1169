import { createBrowserRouter } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element:<Registration />
  },
  {
    path: "/login",
    element:<Login/>
  },
  {
    path: "/dashboard",
    element:<Dashboard /> 
  },
  {
    path: "/contact",
  },
  {
    path:'/exchange',
  },
]);
export default routes;

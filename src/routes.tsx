import { createBrowserRouter } from "react-router-dom";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import PayingPage from "./pages/PayingPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element:<Registration />
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
  {
    path:'/payment',
    element:<PayingPage />
  }
]);
export default routes;

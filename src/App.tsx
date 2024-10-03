import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import UserContextProvider from "./context/UserContextProvider";
const App = () => {
  return (
    <UserContextProvider>
      <RouterProvider router={routes} />
    </UserContextProvider>
  );
};

export default App;

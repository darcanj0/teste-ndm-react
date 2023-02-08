import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login/login";
import { Main } from "../pages/main/main";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

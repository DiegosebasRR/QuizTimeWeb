import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn.tsx";
import ErrorPage from "./components/global/ErrorPage/ErrorPage.tsx";
import SignUp from "./components/SignUp/SignUp.tsx";
import Home from "./components/Home/Home.tsx";
import ProtectedRoutes from "./router/ProtectedRoutes.tsx";
import { Provider } from "react-redux";
import store from "./store.ts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

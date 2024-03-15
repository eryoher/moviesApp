// import { Router, Routes } from "react-router-dom";
// import { createBrowserHistory } from "history";
// import { HOME } from "./utils/RoutePath";
// import { RouteWithSubRoutes } from "./utils/RouteUtils";
import Movies from "./Containers/Movies";
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

// const publicRoutes = [{ path: HOME, component: Movies, exact: true, key: 1 }];

// const history: any = createBrowserHistory();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Movies />,
  },
]);

const AppRouter = (props: any) => <RouterProvider router={router} />;

export default AppRouter;

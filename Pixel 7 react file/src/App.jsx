import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppDraw } from "./screens/AppDraw";
import { Contacts } from "./screens/Contacts";
import { Dialpad } from "./screens/Dialpad";
import { Favorites } from "./screens/Favorites";
import { HomeScreen } from "./screens/HomeScreen";
import { HomeScreens } from "./screens/HomeScreens";
import { LockScreen } from "./screens/LockScreen";
import { MessageApplication } from "./screens/MessageApplication";
import { Photos } from "./screens/Photos";
import { Recents } from "./screens/Recents";
import { Settings } from "./screens/Settings";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <LockScreen />,
  },
  {
    path: "/lock-screen",
    element: <LockScreen />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/home-screens",
    element: <HomeScreens />,
  },
  {
    path: "/dialpad",
    element: <Dialpad />,
  },
  {
    path: "/recents",
    element: <Recents />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/home-screen",
    element: <HomeScreen />,
  },
  {
    path: "/photos",
    element: <Photos />,
  },
  {
    path: "/message-application",
    element: <MessageApplication />,
  },
  {
    path: "/app-draw",
    element: <AppDraw />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

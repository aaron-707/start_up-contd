import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Amalod } from "./screens/Amalod";
import { AppDraw } from "./screens/AppDraw";
import { BootSplash } from "./screens/BootSplash";
import { CallAplication } from "./screens/CallAplication";
import { Contacts } from "./screens/Contacts";
import { HomeScreens } from "./screens/HomeScreens";
import { LockScreen } from "./screens/LockScreen";
import { Photos } from "./screens/Photos";
import QuickSetting from "./screens/QuickSetting/QuickSetting.jsx";
import { Settings } from "./screens/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BootSplash />,
  },
  {
    path: "/lock-screen",
    element: <LockScreen />,
  },
  {
    path: "/home-screens",
    element: <HomeScreens />,
  },
  {
    path: "/quick-setting",
    element: <QuickSetting />,
  },
  {
    path: "/photos",
    element: <Photos />,
  },
  {
    path: "/app-draw",
    element: <AppDraw />,
  },
  {
    path: "/amalod",
    element: <Amalod />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/call-aplication",
    element: <CallAplication />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
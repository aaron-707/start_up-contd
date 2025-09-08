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
import { QuickSetting } from "./screens/QuickSetting";
import { Settings } from "./screens/Settings";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <BootSplash />,
  },
  {
    path: "/boot-splash",
    element: <BootSplash />,
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
    path: "/lock-screen",
    element: <LockScreen />,
  },
  {
    path: "/amalod",
    element: <Amalod />,
  },
  {
    path: "/home-screens",
    element: <HomeScreens />,
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

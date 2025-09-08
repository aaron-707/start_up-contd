import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Albums } from "./screens/Albums";
import { AppDrawer } from "./screens/AppDrawer";
import { Contacts } from "./screens/Contacts";
import { Dial } from "./screens/Dial";
import { DialPad } from "./screens/DialPad";
import { Favorites } from "./screens/Favorites";
import { Home } from "./screens/Home";
import { LockScreen } from "./screens/LockScreen";
import { QuickBar } from "./screens/QuickBar";
import { Settings } from "./screens/Settings";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <LockScreen />,
  },
  {
    path: "/lockscreen",
    element: <LockScreen />,
  },
  {
    path: "/albums",
    element: <Albums />,
  },
  {
    path: "/dial",
    element: <Dial />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/dialpad",
    element: <DialPad />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/quick-bar",
    element: <QuickBar />,
  },
  {
    path: "/app-drawer",
    element: <AppDrawer />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

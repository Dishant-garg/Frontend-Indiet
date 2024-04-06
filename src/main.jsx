import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, RouterProvider, createBrowserRouter } from "react-router-dom";
// import { ThirdwebProvider} from "@thirdweb-dev/react";

import App from "./App.jsx";
import "./index.css";

import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import Contest from "./pages/Contest.jsx";
import LeaderBoard from "./pages/LeaderBoard.jsx";
import ProSubscription from "./pages/ProSubscription.jsx";
import Pricing from "./pages/Pricing.jsx";
import Shop from "./pages/Shop.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/profile",
            element: <Profile />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/contest",
            element: <Contest />,
        },
        {
            path: "/leaderboard",
            element: <LeaderBoard />,
        },
        {
            path: "/pro-subscription",
            element: <ProSubscription />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        },
        {
          path: "/shop",
          element: <Shop />,
        }
    ]
  }
])

// const activeChain = "mumbai";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ThirdwebProvider> */}
      <RouterProvider router={router}/>
    {/* </ThirdwebProvider> */}
  </React.StrictMode>
);

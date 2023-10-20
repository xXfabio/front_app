import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";

import { Layout } from "./components/layout";
import { About } from "./pages/about";
import { Notfound } from "./pages/notfound";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      }
    ]
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "*",
    element: <Notfound />
  }
])

export { router }
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import AdminDashboard from "./pages/AdminDashboard";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "inventory", Component: Inventory },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "faq", Component: FAQ },
      { path: "admin", Component: AdminDashboard },
    ],
  },
]);

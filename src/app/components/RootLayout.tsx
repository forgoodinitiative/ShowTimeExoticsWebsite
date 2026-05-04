import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

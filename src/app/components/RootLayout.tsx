import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

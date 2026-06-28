import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "./components/ui/sonner";
import LenisProvider from "./LenisProvider";

export default function App() {
  return (
    <LenisProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </LenisProvider>
  );
}
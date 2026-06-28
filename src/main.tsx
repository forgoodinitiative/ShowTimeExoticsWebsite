import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import emailjs from "@emailjs/browser";

emailjs.init("NwFD_cV4pjkswRfvm");

createRoot(document.getElementById("root")!).render(<App />);
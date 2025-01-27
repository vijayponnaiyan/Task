import { RouterProvider } from "react-router-dom";
import router from "../src/router/router";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function App() {
  return <RouterProvider router={router} />;
}

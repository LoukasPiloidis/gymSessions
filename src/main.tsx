import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Basics from "./routes/Basics.tsx";
import Dense from "./routes/Dense.tsx";
import Pro from "./routes/Pro.tsx";
import "./styles.css";
import Context from "./Context.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/basics",
    element: <Basics />,
  },
  {
    path: "/dense",
    element: <Dense />,
  },
  {
    path: "/pro",
    element: <Pro />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Context>
    <RouterProvider router={router} />
  </Context>
);

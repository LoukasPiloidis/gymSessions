import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Session from "./routes/Session.tsx";
import "./styles.css";
import Context from "./Context.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Session />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Context>
    <RouterProvider router={router} />
  </Context>
);

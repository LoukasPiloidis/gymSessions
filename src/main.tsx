import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Session from "./routes/Session.tsx";
import "./styles.css";
import Context from "./Context.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/basics",
    element: <Session />,
  },
  {
    path: "/dense",
    element: <Session />,
  },
  {
    path: "/pro",
    element: <Session />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Context>
    <RouterProvider router={router} />
  </Context>
);

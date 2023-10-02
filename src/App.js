import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import Store from "./pages/Store";
import Terms from "./pages/Terms";
import Dashboard from "./pages/Dashboard";
import Authentication from "./pages/Authentication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "Store",
        element: <Store />,
      },
      { path: "Terms", element: <Terms /> },
      { path: "Dashboard", element: <Dashboard /> },
      { path: "Auth", element: <Authentication /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

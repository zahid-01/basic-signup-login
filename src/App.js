import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Sign Up/SignUp";
import Welcome from "./Components/Welcome/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import App from "@/App";
import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path:"/",
          element: <Home/>
        }
      ]
    },
    {
      path: '/signup',
      element: <Signup/>
    },
    {
      path: '/login',
      element: <Login/>
    }
  ]);

  export default router;
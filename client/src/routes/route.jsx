import App from "@/App";
import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import About from "@/pages/About";
import Browse from "@/pages/Browse";
import Home from "@/pages/Home";
import Jobs from "@/pages/Jobs";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/jobs",
          element: <Jobs/>
        },
        {
          path:"/browse",
          element: <Browse/>
        },
        {
          path:"/about",
          element: <About/>
        },
      ]
    },
    {
      path: '/signup',
      element: <Signup/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '*',
      element: <NotFound/>
    }
  ]);

  export default router;
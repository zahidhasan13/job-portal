import App from "@/App";
import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import About from "@/pages/About";
import Browse from "@/pages/Browse";
import Home from "@/pages/Home";
import JobDetails from "@/pages/JobDetails";
import Jobs from "@/pages/Jobs";
import NotFound from "@/pages/NotFound";
import Profile from "@/pages/Profile";
import RecruiterCompanies from "@/pages/RecruiterCompanies";
import RecruiterJobs from "@/pages/RecruiterJobs";
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
          path:"/job-details/:id",
          element: <JobDetails/>
        },
        {
          path:"/browse",
          element: <Browse/>
        },
        {
          path:"/recruiter/companies",
          element: <RecruiterCompanies/>
        },
        {
          path:"/recruiter/jobs",
          element: <RecruiterJobs/>
        },
        {
          path:"/about",
          element: <About/>
        },
        {
          path:"/profile",
          element: <Profile/>
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
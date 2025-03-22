import App from "@/App";
import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import About from "@/pages/About";
import Browse from "@/pages/Browse";
import CompanyDetails from "@/pages/CompanyDetails";
import CreateCompany from "@/pages/CreateCompany";
import Home from "@/pages/Home";
import JobDetails from "@/pages/JobDetails";
import Jobs from "@/pages/Jobs";
import NotFound from "@/pages/NotFound";
import Profile from "@/pages/Profile";
import RecruiterCompanies from "@/pages/RecruiterCompanies";
import RecruiterJobs from "@/pages/RecruiterJobs";
import UpdateCompanyForm from "@/pages/UpdateCompanyForm";
import UpdateProfileForm from "@/pages/UpdateProfileForm";
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
          path:"/recruiter/companies/company-details/:id",
          element: <CompanyDetails/>
        },
        {
          path:"/recruiter/companies/create-company",
          element: <CreateCompany/>
        },
        {
          path:"/recruiter/companies/update-company",
          element: <UpdateCompanyForm/>
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
        {
          path:"/profile/update",
          element: <UpdateProfileForm/>
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
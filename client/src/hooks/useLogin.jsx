import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useLogin = () => {
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (email, password, role) => {
    const data = { email, password, role };
    setIsError("");
    setIsLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:8400/api/user/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if(res.status === 200){
        setIsLoading(false);
        toast.success("User Signup Successfullly!");
        navigate('/');
    }
    } catch (error) {
      setIsLoading(false);
      setIsError(
        error.response?.data?.message || "An error occurred during login"
      );
    }
  };

  return { login, isError, isLoading };
};

export default useLogin;

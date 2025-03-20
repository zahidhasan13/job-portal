import { setAllJobs } from '@/redux/slices/jobSlice';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetAllJobs = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        
            const getAllJobs = async ()=>{
                try {
                const res = await axios.get("http://localhost:8400/api/job",{withCredentials: true})
                if (res.status === 200) {
                    dispatch(setAllJobs(res.data));
                  }
            }catch (error) {
                console.log(error);
            }
        } 

        getAllJobs();
    },[dispatch])
};

export default useGetAllJobs;
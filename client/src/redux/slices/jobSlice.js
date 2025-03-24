import { createSlice } from "@reduxjs/toolkit";

const initialState={
    jobs:[],
    adminJobs:[],
    singleJob:null
}

const jobSlice = createSlice({
    name:"job",
    initialState,
    reducers:{
        setAllJobs:(state, action)=>{
            state.jobs = action.payload
        },
        setSingleJob:(state, action)=>{
            state.singleJob = action.payload
        },
        setRecruiterJobs:(state, action)=>{
            state.adminJobs = action.payload
        },
        deleteJob:(state, action)=>{
            state.adminJobs = state.adminJobs.filter(job=>job._id !== action.payload)
        }
    }
});
export const {setAllJobs,setSingleJob, setRecruiterJobs,deleteJob} = jobSlice.actions;
export default jobSlice.reducer;
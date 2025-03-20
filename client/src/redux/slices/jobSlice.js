import { createSlice } from "@reduxjs/toolkit";

const initialState={
    jobs:[],
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
        }
    }
});
export const {setAllJobs,setSingleJob} = jobSlice.actions;
export default jobSlice.reducer;
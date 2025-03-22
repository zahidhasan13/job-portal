import { createSlice } from "@reduxjs/toolkit";

const initialState={
    companies:[],
    singleCompany:null
}

const companySlice = createSlice({
    name:"company",
    initialState,
    reducers:{
        setAllCompanies:(state, action)=>{
            state.companies = action.payload
        },
        setSingleCompany:(state, action)=>{
            state.singleCompany = action.payload
        }
    }
});
export const {setAllCompanies,setSingleCompany} = companySlice.actions;
export default companySlice.reducer;
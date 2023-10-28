import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosInstance.js"

const initialState = {
    isLoggedIn:localStorage.getItem('isLoggedIn') || false,
    role:localStorage.getItem('role') || "",
    data:localStorage.getItem('data') || {},

}

 export const createAccount = createAsyncThunk("/auth/signup",async (data) =>{
    try {
        const res = axiosInstance.post("user/register", data)
        
        toast.promise(res,{
            loading:"Wait! Creating your account",
            success:(data) =>{
            
                return data?.data?.message
            },
            error: "Failed to create Account"
        })
        return (await res).data;
        
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
 })

 
 export const login = createAsyncThunk("/auth/signin",async (data) =>{
    try {
        const res = axiosInstance.post("user/login", data)
        
        toast.promise(res,{
            loading:"Wait ! Login your account",
            success:(data) =>{
            
                return data?.data?.message
            },
            error: "Failed to log in Account"
        })
        return (await res).data;
        
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
 })

 export const logout = createAsyncThunk("/auth/logout",async (data) =>{
    try {
        const res = axiosInstance.get("user/logout", data)
        
        toast.promise(res,{
            loading:"Wait ! logging out an account ",
            success:(data) =>{
            
                return data?.data?.message
            },
            error: "Failed to log out Account"
        })
        return (await res).data;
        
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
 })

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(login.fulfilled, (state, action) => {
            localStorage.setItem("data", JSON.stringify(action?.payload?.data));
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("role", action?.payload?.data?.user?.role);
            state.isLoggedIn = true;
            state.role = action?.payload?.data?.user?.role;
            state.data = action?.payload?.data?.user;
        })
        
        .addCase(logout.fulfilled,(state)=>{
            localStorage.clear();
            state.isLoggedIn = false;
            state.role = "";
            state.data = {};
        })
    }

})

// export const {} = authSlice.actions;
export default authSlice.reducer
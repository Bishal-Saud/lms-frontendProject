import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../Helpers/axiosInstance"

const initialState ={
    courseData:[]
}

export const getAllCourses = createAsyncThunk("/course/get", async() =>{
    try {
        const response = axiosInstance.get("/courses");
        toast.promise(response,{
            loading:"Loading Course data...",
            success:"Courses Loaded successfully",
            error:"Failed to get courses"
        })
        return( await response).data
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

const courseSlice = createSlice({
    name:"courses",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{

    }
})

export default courseSlice.reducer
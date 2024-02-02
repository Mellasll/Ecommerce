import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    categories: []
}

export const getCategories= createAsyncThunk('category', async() => {
    const response = await axios.get("https://fakestoreapi.com/products/categories")
    
    const data = response.data
    console.log(response,'')
    return data;
})

const categorySlice = createSlice({
    name:  "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
    }
})
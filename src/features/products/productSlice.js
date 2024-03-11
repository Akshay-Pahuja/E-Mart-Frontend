import { createSlice,createAsyncThunk,createAction } from "@reduxjs/toolkit";
import { productService } from "./productService";
// import {toast} from "react-toastify"

export const getAllProducts = createAsyncThunk("products/get",
  async(data,thunkAPI)=>{
    try{
         return await productService.getProducts(data);
    }
    catch(error){
          return thunkAPI.rejectWithValue(error);
    }
  }
)

export const getAProduct = createAsyncThunk("product/get",
  async(id,thunkAPI)=>{
    try{
         return await productService.getProduct(id);
    }
    catch(error){
          return thunkAPI.rejectWithValue(error);
    }
  }
)

export const addToWishlist = createAsyncThunk("product/wishlist",
  async(prodId,thunkAPI)=>{
    try{
         return await productService.addToWishlist(prodId);
    }
    catch(error){
          return thunkAPI.rejectWithValue(error);
    }
  }
)

export const rateAProduct = createAsyncThunk("product/rating",
  async(data,thunkAPI)=>{
    try{
         return await productService.rateaProduct(data);
    }
    catch(error){
          return thunkAPI.rejectWithValue(error);
    }
  }
)

export const resetState = createAction("Reset_all");

const initialState = {
    products : [],
    isError: false,
    isLoading:false,
    isSuccess : false,
    message:"",
};

export const productSlice = createSlice({
    name:"products",
    initialState:initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(getAllProducts.pending,(state) =>{
            state.isLoading = true;
         })
         .addCase(getAllProducts.fulfilled,(state,action) =>{
            state.isLoading = false;
            state.isSuccess=true;
            state.isError = false;
            state.products = action.payload;
         })
         .addCase(getAllProducts.rejected,(state,action) =>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
         })
        .addCase(getAProduct.pending,(state) =>{
            state.isLoading = true;
         })
         .addCase(getAProduct.fulfilled,(state,action) =>{
            state.isLoading = false;
            state.isSuccess=true;
            state.isError = false;
            state.singleproduct = action.payload;
         })
         .addCase(getAProduct.rejected,(state,action) =>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
         })
        .addCase(addToWishlist.pending,(state) =>{
            state.isLoading = true;
         })
         .addCase(addToWishlist.fulfilled,(state,action) =>{
            state.isLoading = false;
            state.isSuccess=true;
            state.isError = false;
            state.addToWishlist = action.payload;
         })
         .addCase(addToWishlist.rejected,(state,action) =>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
         })
        .addCase(rateAProduct.pending,(state) =>{
            state.isLoading = true;
         })
         .addCase(rateAProduct.fulfilled,(state,action) =>{
            state.isLoading = false;
            state.isSuccess=true;
            state.isError = false;
            state.ratedProduct = action.payload;
         })
         .addCase(rateAProduct.rejected,(state,action) =>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
         })
        // .addCase(resetState, () => initialState);
    }
})

export default productSlice.reducer;
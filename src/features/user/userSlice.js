import { createSlice,createAsyncThunk,createAction } from "@reduxjs/toolkit";
import { authService } from "./userService";
import {toast} from "react-toastify"

const getUserfromLocalStorage = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

export const registerUser = createAsyncThunk("auth/register",
  async(data,thunkAPI)=>{
    try{
         return await authService.register(data);
    }
    catch(error){
          return thunkAPI.rejectWithValue(error);
    }
  }
)

export const getUserProductWishlist = createAsyncThunk("user/wishlist",
   async(thunkAPI)=>{
    try{
          return await authService.getUserWishlist();
    }catch(error)
    {
        return thunkAPI.rejectWithValue(error);
    }
   }
)

export const login = createAsyncThunk(
    "auth/login",
    async(user,thunkAPI)=>{
        try{
            return await authService.login(user);
        } catch(error){
           return thunkAPI.rejectWithValue(error);
        }
    }
)

export const addProdToCart = createAsyncThunk(
    "auth/addcart",
    async(cartData,thunkAPI)=>{
        try{
            return await authService.addToCart(cartData);
        } catch(error){
           return thunkAPI.rejectWithValue(error);
        }
    }
)

export const getUserCart= createAsyncThunk(
    "auth/get-cart",
    async(thunkAPI)=>{
        try{
            return await authService.getCart();
        } catch(error){
           return thunkAPI.rejectWithValue(error);
        }
    }
)
export const deleteCartProduct= createAsyncThunk(
    "auth/delete-cart-product",
    async(cartItemId,thunkAPI)=>{
        try{
            return await authService.removeProductFromCart(cartItemId);
        } catch(error){
           return thunkAPI.rejectWithValue(error);
        }
    }
)

export const updateCartProduct= createAsyncThunk(
    "auth/update-cart-product",
    async(cartItemId,thunkAPI)=>{
        try{
            return await authService.updateProductFromCart(cartItemId);
        } catch(error){
           return thunkAPI.rejectWithValue(error);
        }
    }
)

export const createAOrder= createAsyncThunk(
    "auth/cart/create-order",
    async(orderData,thunkAPI)=>{
        try{
            return await authService.createOrder(orderData);
        } catch(error){
           return thunkAPI.rejectWithValue(error);
        }
    }
)
export const getMyOrders= createAsyncThunk(
    "auth/get-orders",
    async(thunkAPI)=>{
        try{
            return await authService.myOrders();
        } catch(error){
           return thunkAPI.rejectWithValue(error);
        }
    }
)
export const updateUserProfile= createAsyncThunk(
    "auth/update-profile",
    async(data,thunkAPI)=>{
        try{
            return await authService.updateUser(data);
        } catch(error){
           return thunkAPI.rejectWithValue(error);
        }
    }
)

export const forgotPasswordToken= createAsyncThunk(
    "auth/forgot-password",
    async(data,thunkAPI)=>{
        try{
            return await authService.forgotPassword(data);
        } catch(error){
           return thunkAPI.rejectWithValue(error);
        }
    }
)
export const resetPassword= createAsyncThunk(
    "auth/reset-password",
    async(data,thunkAPI)=>{
        try{
            return await authService.resetPassword(data);
        } catch(error){
           return thunkAPI.rejectWithValue(error);
        }
    }
)

export const resetState = createAction("Reset_all");

const initialState = {
    user : getUserfromLocalStorage,
    isError: false,
    isLoading:false,
    isSuccess : false,
    message:"",
};

export const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(registerUser.pending,(state)=>{
            state.isLoading=true;

        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.createdUser = action.payload;
            if(state.isSuccess ===true)
            {
                  toast.info("You have been registered Succesfully")
                  
            }
        })
        .addCase(registerUser.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isError === true)
            {
                toast.info("Something went wrong or User already exists");
            }
        })
        .addCase(login.pending,(state) =>{
            state.isLoading = true;
         })
         .addCase(login.fulfilled,(state,action) =>{
            state.isLoading = false;
            state.isSuccess=true;
            state.isError = false;
            state.user = action.payload;
            // if(state.isSuccess ===true)
            // {
            //       toast.info("You have been login Succesfully")
            // }
         })
         .addCase(login.rejected,(state,action) =>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.user = null;
            // if(state.isError === true)
            // {
            //     toast.info("Email or Password is not correct");
            // }
         })
         .addCase(getUserProductWishlist.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getUserProductWishlist.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.userwishlist = action.payload;
        })
        .addCase(getUserProductWishlist.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })

        .addCase(addProdToCart.pending,(state)=>{
            state.isLoading=true;

        })
        .addCase(addProdToCart.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.cartProduct = action.payload;
            if(state.isSuccess ===true)
            {
                  toast.info("Product added to your cart")
            }
        })
        .addCase(addProdToCart.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        .addCase(getUserCart.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getUserCart.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.userCart = action.payload;
        })
        .addCase(getUserCart.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })

        .addCase(deleteCartProduct.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(deleteCartProduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.deletedCartProduct = action.payload;
        })
        .addCase(deleteCartProduct.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        .addCase(updateCartProduct.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(updateCartProduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.updatedCartProduct = action.payload;
        })
        .addCase(updateCartProduct.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        .addCase(createAOrder.pending,(state) =>{
            state.isLoading = true;
         })
         .addCase(createAOrder.fulfilled,(state,action) =>{
            state.isLoading = false;
            state.isSuccess=true;
            state.isError = false;
            state.orderedProduct = action.payload;
            if(state.isSuccess ===true)
            {
                  toast.info("Your Order has been placed successfully")
            }
         })
         .addCase(createAOrder.rejected,(state,action) =>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.orderedProduct = null;
            if(state.isError === true)
            {
                toast.info("Something went wrong");
            }
         })
         .addCase(getMyOrders.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getMyOrders.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.getorderedProducts = action.payload;
        })
        .addCase(getMyOrders.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        .addCase(updateUserProfile.pending,(state) =>{
            state.isLoading = true;
         })
         .addCase(updateUserProfile.fulfilled,(state,action) =>{
            state.isLoading = false;
            state.isSuccess=true;
            state.isError = false;
            state.updatedUser = action.payload;
            if(state.isSuccess ===true)
            {
                  toast.info("Profile Updated Successfully")
            }
         })
         .addCase(updateUserProfile.rejected,(state,action) =>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.updatedUser = null;
            if(state.isError === true)
            {
                toast.info("Something went wrong");
            }
         })

         .addCase(forgotPasswordToken.pending,(state) =>{
            state.isLoading = true;
         })
         .addCase(forgotPasswordToken.fulfilled,(state,action) =>{
            state.isLoading = false;
            state.isSuccess=true;
            state.isError = false;
            state.token = action.payload;
            if(state.isSuccess ===true)
            {
                  toast.info("Check Your Email,Forgot password link has been sent")
            }
         })
         .addCase(forgotPasswordToken.rejected,(state,action) =>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            if(state.isError === true)
            {
                toast.info("Something went wrong");
            }
         })
         
         .addCase(resetPassword.pending,(state) =>{
            state.isLoading = true;
         })
         .addCase(resetPassword.fulfilled,(state,action) =>{
            state.isLoading = false;
            state.isSuccess=true;
            state.isError = false;
            state.password = action.payload;
            if(state.isSuccess ===true)
            {
                  toast.info("Password has been updated")
            }
         })
         .addCase(resetPassword.rejected,(state,action) =>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            if(state.isError === true)
            {
                toast.info("Something went wrong");
            }
         })
         
         .addCase(resetState, () => initialState);
    }
})

export default authSlice.reducer;
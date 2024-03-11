import axios from "axios"
import { base_url, config } from "../../utils/axiosConfig";

const register = async(userDate)=>{
    const response= await  axios.post(`${base_url}user/register`,userDate);
    if(response.data)
    {
        localStorage.setItem("user",JSON.stringify(response.data))
        
    }
    return response.data;
}

const login = async(user)=>{
    const response = await axios.post(`${base_url}user/login`,user);
    if(response.data)
    {
        localStorage.setItem("user",JSON.stringify(response.data))
    }

    return response.data;
};

const getUserWishlist = async()=>{
    const response = await axios.get(`${base_url}user/wishlist`,config)
    if(response.data)
    {
        return response.data;
    }
}

const addToCart = async(cartData)=>{
    const response = await axios.post(`${base_url}user/cart`,cartData,config);
    if(response.data)
    {
        return response.data;
    }
};

const getCart = async()=>{
    const response = await axios.get(`${base_url}user/get-cart`,config);
    if(response.data)
    {
        return response.data;
    }
};
const removeProductFromCart = async(id)=>{
    const response = await axios.delete(`${base_url}user/delete-product-cart/${id}`,config);
    if(response.data)
    {
        return response.data;
    }
};
const updateProductFromCart = async(data)=>{
    const response = await axios.delete(`${base_url}user/update-product-cart/${data.cartItemId}/${data.quantity}`,config);
    if(response.data)
    {
        return response.data;
    }
};

const createOrder = async(orderData)=>{
    const response = await axios.post(`${base_url}user/create-order`,orderData,config);
    if(response.data)
    {
        return response.data;
    }
};

const myOrders = async()=>{
    const response = await axios.get(`${base_url}user/getmyorders`,config);
    if(response.data)
    {
        return response.data;
    }
}

const updateUser = async(data)=>{
    const response = await axios.put(`${base_url}user/me/update`,data,config);
    if(response.data)
    {
        return response.data;
    }
}

const forgotPassword = async(data)=>{
    const response = await axios.post(`${base_url}user/forgot-password-token`,data);
    if(response.data)
    {
        return response.data;
    }
}

const resetPassword = async(data)=>{
    const response = await axios.put(`${base_url}user/reset-password/${data.token}`,{password:data?.password});
    if(response.data)
    {
        return response.data;
    }
}

export const authService = {
    register,
    login,
    getUserWishlist,
    addToCart,
    getCart,
    removeProductFromCart,
    updateProductFromCart,
    createOrder,
    myOrders,
    updateUser,
    forgotPassword,
    resetPassword,
}
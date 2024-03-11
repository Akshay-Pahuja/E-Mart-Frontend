import axios from "axios"
import { base_url, config } from "../../utils/axiosConfig";

const getProducts = async(data)=>{
    console.log(data)
     console.log( data?.brand)
    
    const response= await  axios.get(`${base_url}product/getallProducts?${data?.sort?`sort=${data?.sort}&&`:""}${data?.minPrice?`price[gte]=${data?.minPrice}&&`:""}${data?.maxPrice?`price[lte]=${data?.maxPrice}&&`:""}`);
    if(response.data)
    {
        return response.data;
    }
}

const getProduct = async(id)=>{
    const response= await  axios.get(`${base_url}product/getproduct/${id}`);
    if(response.data)
    {
        return response.data;
    }
}

const addToWishlist = async(prodId)=>{
    const response = await axios.put(`${base_url}product/wishlist`,{prodId},config);
    if(response.data)
    {
        return response.data;
    }
}

const rateaProduct = async(data)=>{
    const response = await axios.put(`${base_url}product/rating`,data,config);
    if(response.data)
    {
        return response.data;
    }
}

export const productService = {
     getProducts,
     addToWishlist,
     getProduct,
     rateaProduct,
}
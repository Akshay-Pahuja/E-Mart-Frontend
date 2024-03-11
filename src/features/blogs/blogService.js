import axios from "axios"
import { base_url, config } from "../../utils/axiosConfig";

const getBlogs = async()=>{
    const response = await axios.get(`${base_url}blog/getallblogs`)
    if(response.data)
    {
        return response.data;
    }
}

const getBlog = async (id) => {
    const response = await axios.get(`${base_url}blog/getblog/${id}`);
  
    return response.data;
  };

export const blogService ={
     getBlogs,
     getBlog,
}
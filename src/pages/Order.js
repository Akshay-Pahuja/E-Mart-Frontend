import React,{useEffect} from 'react'
import OrderItem from './OrderItem';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { useDispatch,useSelector } from 'react-redux';
import { getMyOrders } from '../features/user/userSlice';

const Order = () => {
    const dispatch = useDispatch();

    const myOrderState = useSelector((state)=> state?.auth?.getorderedProducts?.orders)

    useEffect(()=>{
        dispatch(getMyOrders());
    },[])

  return (
    <>
    <Meta title={"My Orders"} />
      <BreadCrumb title="My Orders" />
    {/* <h1>My Orders</h1> */}
    <br/>
    <br/>
    
    <div className="order-list " class="ml-3" >
     
        <OrderItem data = {myOrderState}  />
      
    </div>
  </>
  )
}

export default Order

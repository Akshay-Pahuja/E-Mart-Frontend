import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";
import Container from "../components/Container";
import { useDispatch,useSelector } from "react-redux";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios"
import { config } from "../utils/axiosConfig";
import { createAOrder, getUserCart } from "../features/user/userSlice";
import {Country,State} from "country-state-city"

let schema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  address: Yup.string().required("address is required"),
  city: Yup.string().required("city name is required"),
  state: Yup.string().required("state name is required"),
  country: Yup.string().required("Country name is required"),
  pincode: Yup.number().required("Pincode name is required"),
});

const Checkout = () => {
  const dispatch = useDispatch();
  const [totalAmount,settotalAmount] = useState(null);
  const [shippingInfo,setshippingInfo] = useState(null);
  //const [paymentInfo] = useState({razorpayPaymentId:"",razorpayOrderId:""})
  const [cartProductState,setCartProductState] = useState([]);
  const userCartState = useSelector((state)=> state.auth.userCart);
  useEffect(()=>{
    let sum =0;
    for(let index = 0;index<userCartState?.length;index++)
    {
      sum = sum + Number(userCartState[index]?.price * userCartState[index]?.quantity);
    }
    settotalAmount(sum);
   },[userCartState])


   const getTokenFromLocalStorage = localStorage.getItem("user")
   ? JSON.parse(localStorage.getItem("user"))
   : null;
 
 const config2 = {
   headers: {
     Authorization: `Bearer ${
       getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
     }`,
     Accept: "application/json",
   },
 };

 useEffect(()=>{
  dispatch(getUserCart(config2));
 })

   const formik = useFormik({
    initialValues: {
      firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  country: "",
  pincode: "",
  other:"",
    },
    validationSchema:schema,

    onSubmit:(values)=>{
      //alert(JSON.stringify(values))
        setshippingInfo(values);
       localStorage.setItem("address",JSON.stringify(values));
       setTimeout(() => {
        checkOutHandler();
       }, 300);
    }
    
     // navigate('/');
      // alert(JSON.stringify(values, null, 2));
    
  })

  const loadScript = (src)=>{
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })  
  }

  useEffect(()=>{
      let items=[];
      for(let index =0;index<userCartState?.length;index++){
        items.push({product:userCartState[index]?.productId?._id,quantity:userCartState[index]?.quantity,price:userCartState[index]?.price,color:userCartState[index]?.color?._id})
      }
     setCartProductState(items);
  },[])

  const checkOutHandler = async()=>{
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res){
      alert('Razropay failed to load!!')
      return 
    }
    const result = await axios.post("http://localhost:5000/api/user/order/checkout",{amount:totalAmount+40},config)
    if(!result){
      alert("Server error. Are you online?");
      return
    }
    const {amount,id:order_id,currency} = result.data.order;
    const options = {
      key: "rzp_test_jHrd7TTYPg5BWv", // Enter the Key ID generated from the Dashboard
      amount: amount,
      currency: currency,
      name: "BetterMart",
      description: "Test Transaction",
      //image: { logo },
      order_id: order_id,
      handler: async function (response) {
          const data = {
              orderCreationId: order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              //razorpaySignature: response.razorpay_signature,
          };

          const result = await axios.post("http://localhost:5000/api/user/order/paymentVerification", data,config);
          //  setPaymentInfo({
          //   razorpayPaymentId:response.razorpay_payment_id,
          //   razorpayOrderId:response.razorpay_order_id,
          //  })

            dispatch(createAOrder({totalPrice:totalAmount,totalPriceAfterDiscount:totalAmount,orderItems:cartProductState,shippingInfo:JSON.parse(localStorage.getItem("address")),paymentInfo:result.data}));
          //alert(result);
      },
      prefill: {
          name: "BetterMart",
          email: "bettermart@example.com",
          contact: "9957866453",
      },
      notes: {
          address: "iiitdmj,Madhya Pradesh",
      },
      theme: {
          color: "#61dafb",
         
      },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
  }

  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-7 ">
            <div className="checkout-left-data">
              <h3 className="website-name">BetterMart</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /&nbsp;
                  <li
                    className="breadcrumb-ite total-price active text-dark"
                    aria-current="page"
                  >
                    Information
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item total-price active text-dark">
                    Shipping
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active text-dark"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">
                Arpit Yadav (arpit@gmail.com)
              </p>
              <h4 className="mb-3">Shipping Address</h4>
              <form onSubmit={formik.handleSubmit}
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select name="country" value={formik.values.country} onChange={formik.handleChange("country")} onBlur={formik.handleBlur("country")} className="form-control form-select" id="">
                    {/* <option value="" selected disabled>
                      Select Country
                    </option> */}
                    {/* <option value="India" >
                      India
                    </option> */}
                     <option value="" selected disabled>Country</option>
                        {Country && Country.getAllCountries().map((i)=>(
                            <option value={i.isoCode} key={i.isoCode} >{i.name}</option>
                        ))}
                  </select>
                  <div className="error">
                    {
                    formik.touched.country && formik.errors.country
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    name="firstName" 
                    value={formik.values.firstName} 
                    onChange={formik.handleChange("firstName")} 
                    onBlur={formik.handleBlur("firstName")}
                  />
                  <div className="error">
                    {
                    formik.touched.firstName && formik.errors.firstName
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                    name="lastName" 
                    value={formik.values.lastName} 
                    onChange={formik.handleChange("lastName")} 
                    onBlur={formik.handleBlur("lastName")}
                  />
                  <div className="error ms-2 my-1">
                    {
                    formik.touched.lastName && formik.errors.lastName
                    }
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                    name="address" 
                    value={formik.values.address} 
                    onChange={formik.handleChange("address")} 
                    onBlur={formik.handleBlur("address")}
                  />
                  <div className="error ms-2 my-1">
                    {
                    formik.touched.address && formik.errors.address
                    }
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Nearby location"
                    className="form-control"
                    name="other" 
                    value={formik.values.other} 
                    onChange={formik.handleChange("other")} 
                    onBlur={formik.handleBlur("other")}
                  />
                   <div className="error ms-2 my-1">
                    {
                    formik.touched.other && formik.errors.other
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                    name="city" 
                    value={formik.values.city} 
                    onChange={formik.handleChange("city")} 
                    onBlur={formik.handleBlur("city")}
                  />
                  <div className="error ms-2 my-1">
                    {
                    formik.touched.city && formik.errors.city
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                  <select name="state" 
                    value={formik.values.state} 
                    onChange={formik.handleChange("state")} 
                    onBlur={formik.handleBlur("state")} className="form-control form-select" id="">
                    {/* <option value="" selected disabled>
                      Select State
                    </option>
                    <option value="Uttar Pradesh" >
                     Uttar Pradesh
                    </option> */}
                    <option value="" selected disabled>State</option>
                        {State && State.getStatesOfCountry("IN").map((i)=>(
                            <option value={i.isoCode} key={i.isoCode} >{i.name}</option>
                        ))}
                  </select>
                  <div className="error ms-2 my-1">
                    {
                    formik.touched.state && formik.errors.state
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Pincode"
                    className="form-control"
                    name="pincode" 
                    value={formik.values.pincode} 
                    onChange={formik.handleChange("pincode")} 
                    onBlur={formik.handleBlur("pincode")}
                  />
                  <div className="error ms-2 my-1">
                    {
                    formik.touched.pincode && formik.errors.pincode
                    }
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center ">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Return to Cart
                    </Link>
                    <Link to="/cart" className="button mt-5">
                      Continue to Shipping
                    </Link>
                    <button className="button mt-5" type="submit">Place Order</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              {
                userCartState && userCartState?.map((item,index)=>{
                  return (
                    <div key={index} className="d-flex gap-10 mb-2 align-align-items-center">
                    <div className="w-75 d-flex gap-10">
                      <div className="w-25 position-relative">
                        <span
                          style={{ top: "-10px", right: "2px" }}
                          className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                        >
                          {item?.quantity ? item?.quantity: 0}
                        </span>
                        <img className="mb-4" width={100} height={100} src={item?.productId?.images[0]?.url} alt="product" />
                      </div>
                      <div>
                        <h5 className="title h6">{item?.productId?.title}</h5>
                        <p className="color">Color : {item?.color?.title}</p>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="total">₹{item?.price}</h5>
                    </div>
                  </div>
                  )
                })
              }
              
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">₹ {totalAmount?totalAmount:0}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping Charges</p>
                <p className="mb-0 total-price">₹  {totalAmount?40:0}</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bootom py-4">
              <h4 className="total">Total Amount</h4>
              <h5 className="total-price">₹ {totalAmount ? totalAmount + 40 : 0}</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;

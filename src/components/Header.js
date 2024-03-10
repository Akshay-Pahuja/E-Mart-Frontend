import React,{useEffect, useState} from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import BM from "../images/BM.png"
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
import {  useSelector } from "react-redux";
import {AiOutlineLogout} from "react-icons/ai"
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [totalAmount,settotalAmount] = useState(null);
  const productState = useSelector((state)=> state?.product?.products);
  const [productOpt,setProductOpt] = useState([]);
  const userCartState = useSelector((state)=> state.auth.userCart);
  const authState = useSelector((state)=> state.auth);
  const [paginate, setPaginate] = useState(true);
  const navigate = useNavigate();
 
  useEffect(()=>{
    let sum =0;
    for(let index = 0;index<userCartState?.length;index++)
    {
      sum = sum + Number(userCartState[index]?.price * userCartState[index]?.quantity);
    }
    settotalAmount(sum);

  },[userCartState])

  useEffect(()=>{
    let data = []
    for(let index = 0;index<productState?.length;index++){
      data.push({id:index,prodId:productState[index]?._id,name:productState[index]?.title});
    }
     setProductOpt(data);
  },[productState])

  const handleLogout=()=>{
    localStorage.clear();
    window.location.reload();
  }

  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
            
              <p className="text-white mb-0 ">
              <img width={90} src={BM} alt="BM"  style={{
      marginRight: '10px',
      
    }} className="rounded-3"/>
              Shop the World at Your Fingertips!
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                {/* Hotline: */}
                <a className="text-white" href="tel:+91 8264954234">
                  {/* +91 8264954234 */}
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2 className="d-flex mr-2">
               
                 <Link to= "/" className="text-white "> BetterMart</Link>
                
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
              <Typeahead
        id="pagination-example"
        onPaginate={() => console.log('Results paginated')}
       
        onChange={(selected)=>{
          navigate(`/product/${selected[0]?.prodId}`)
        }}
         options={productOpt}
         labelKey={"name"}
         minLength={1}
        paginate={paginate}
        placeholder="Search for Products and More"
      />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
               
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={wishlist} alt="wishlist" />
                    <p className="mb-0">
                      Favourite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to={ authState?.user === null ?  "/login" : "/my-profile"}
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={user} alt="user" />
                    {
                      authState?.user ===null ? <p className="mb-0">
                      
                      Log in <br /> My Account
                    </p> : <p className="mb-0" >Welcome <br/>{authState?.user?.firstname}</p>
                    }
                    
                  </Link>
                </div>
                <div>
                  <button onClick={handleLogout} className="border border-0 " type="button"><AiOutlineLogout/></button>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={cart} alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">{userCartState?.length ? userCartState?.length : 0}</span>
                      {
                        (totalAmount !== null || totalAmount !==0) && 
                        <p className="mb-0">₹ {totalAmount ? totalAmount : 0}</p>
                      }
                      
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menu} alt="" />
                      <span className="me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/my-orders">My Orders</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
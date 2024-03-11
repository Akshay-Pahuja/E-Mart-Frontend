import React from "react";
import ReactStars from "react-rating-stars-component";
import { useLocation,useNavigate } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import { Markup } from 'interweave';
import wish from "../images/wish.svg";
import BM from "../images/BM.png";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { useDispatch} from "react-redux";
import { addToWishlist } from "../features/products/productSlice";

const PopularCard = (props) => {
    const { grid,data } = props;
  console.log(data);
  const navigate = useNavigate();
   const dispatch = useDispatch();
  const addToWish=(id)=>{
    dispatch(addToWishlist(id))
  }
  return (
    <>
    {
      data?.map((item,index)=>{
        if(item?.tags ==="popular")
        {
        return (
          <div
          key={index}
         className={ "col-3"}
       >
         <div
           
           className="product-card position-relative"
         >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent" onClick={(e)=>{addToWish(item?._id)}}>
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={item?.images[0]?.url} className="img-fluid mx-auto " width={230} alt="product" />
            <img src={BM} className="img-fluid" width={258} alt="product " />
          </div>
          <div className="product-details">
            <h6 className="brand">{item.brand}</h6>
            <h5 className="product-title">
            {item?.title?.substr(0,60)+"..."}
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={item?.totalrating?.toString()}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              {/* Use Markup to convert html into plain text */}
            <Markup content={item.description} />
             
            </p>
            <p className="price">₹{item.price}</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent ">
                <img  src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img onClick={()=>navigate("/product/"+item?._id)} src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </div>
    
      </div>
        
        )}
      })
    }
    </>
  )
}

export default PopularCard

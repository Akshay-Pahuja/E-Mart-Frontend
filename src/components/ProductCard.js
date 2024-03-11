import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation,useNavigate } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import { Markup } from 'interweave';
import wish from "../images/wish.svg";
import BM from "../images/BM.png";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { useDispatch, useSelector} from "react-redux";
import { addToWishlist } from "../features/products/productSlice";
const ProductCard = (props) => {
  const { grid,data } = props;
  const navigate = useNavigate();
  console.log(data);
  let location = useLocation();
   const dispatch = useDispatch();
  const addToWish=(id)=>{
    dispatch(addToWishlist(id))
  }

  return (
    <>
    {
      data && data?.map((item,index)=>{
        return (
          <div
          key={index}
         className={ "col-3"}
       >
         <div          
           className="product-card position-relative"
         >
        
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent" >
              <img onClick={(e)=>{addToWish(item?._id)}} src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={item?.images[0].url} className="img-fluid mx-auto " width={230} alt="product" />
            <img src={BM} width={195} className="img-fluid" alt="product " />
          </div>
          <div className="product-details">
            <h6 className="brand">{item.brand}</h6>
            <h5 className="product-title">
            {item?.title?.substr(0,60)+"..."}
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={item?.totalrating.toString()}
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
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
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
        )
      })
    }
      
      {/* <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "/product/:id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product" />
            <img src={BM} className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt...
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div> */}
    </>
  );
};

export default ProductCard;

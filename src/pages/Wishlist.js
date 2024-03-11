import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import {useDispatch,useSelector} from "react-redux"
import { getUserProductWishlist } from "../features/user/userSlice";
import { addToWishlist } from "../features/products/productSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistState = useSelector((state)=>state?.auth?.userwishlist?.wishlist);

  useEffect(()=>{
    dispatch(getUserProductWishlist());
  },[])

  const removeFromWishlist = (id)=>{
      dispatch(addToWishlist(id));
      setTimeout(()=>{
        dispatch(getUserProductWishlist());
        // dispatch(resetState());
      },300)
  }

  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
         { wishlistState && wishlistState?.map((item,index)=> {
            return (
              <div className="col-3" key={index}>
            <div className="wishlist-card position-relative">
              <img onClick={()=>{removeFromWishlist(item._id)}}
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src={item.images[0].url}
                  className="img-fluid "
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
              <h6 className="brand">{item.brand}</h6>
                <h5 className="title">
                  {item.title}
                </h5>
                <h6 className="price">₹{item.price}</h6>
              </div>
            </div>
          </div>
            )
          })}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;

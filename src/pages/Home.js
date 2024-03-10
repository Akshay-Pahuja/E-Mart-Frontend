import React,{useEffect} from 'react'
import {Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Marquee from 'react-fast-marquee';
import Container from '../components/Container';
import prodcompare from "../images/prodcompare.svg";
import { Markup } from 'interweave';
import view from "../images/view.svg";
import SpecialProduct from '../components/SpecialProduct';
import { services } from '../utils/Data';
import { getAllProducts } from '../features/products/productSlice';
import { useSelector,useDispatch } from 'react-redux';
import PopularCard from '../components/PopularCard';
import wish from "../images/wish.svg";
import { useNavigate } from "react-router-dom";
import BM from "../images/BM.png";
import addcart from "../images/add-cart.svg";
import { addToWishlist } from "../features/products/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productState = useSelector((state)=> state.product.products);
  useEffect(()=>{
    dispatch(getAllProducts());
  },[])
  const addToWish=(id)=>{
    dispatch(addToWishlist(id))
  }
  
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-5">
            <div className="main-banner position-relative ">
              <img
                src="https://www.apple.com/newsroom/images/product/ipad/standard/apple_ipad-pro-spring21_lp_04202021.jpg.news_app_ed.jpg"
                className="img-fluid rounded-3 " 
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4 class="text-info">SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p class="text-warning">From ₹13150.00/mo.Per Month with instant savings and No Cost EMI or ₹81900.00.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  className="img-fluid rounded-3" 
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5 class="text-light">Laptops</h5>
                  <p class="text-white">
                  Smart Laptops for<br /> Smart Minds.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img width={300}
                  src="https://img4.gadgetsnow.com/gd/images/products/additional/large/G291096_View_1/accessories/smart-watches/boat-xtend-1-69-inch-lcd-display-sandy-cream-smart-watch.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <p class="text-dark">Buy Boat Xtend  <br/>Smartwatch</p>
                  <p class="text-primary">
                  From <br/> ₹7990.00 <br /> or EMI starting at ₹714/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmlrZSUyMHNob2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>IN SALE</h4>
                  <p class="text-dark">Find Your Power, <br/> Find Your Nike.</p>
                  <h5 class="text-white">
                    Get 35% OFF
                  </h5>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img width={300}
                  src="https://tshirtstore.centracdn.net/client/dynamic/images/8359_834d73443f-dedicated_ss23_dag-601002-ded-standard.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <p class="text-dark">T-shirt Stockholm <br/> Boiling Coffee <br/> White</p>
                  <h5 class="text-dark">
                    Get 40% OFF
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2d py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      {/* <Container class1="home-wrapper-2 py-5">
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                <div className='d-flex align-items-center gap-30'>
                 <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                 </div>
                 <img src='images/camera.jpg' alt='camera'/>
                </div>
                <div className='d-flex align-items-center gap-30'>
                 <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                 </div>
                 <img src='images/camera.jpg' alt='camera'/>
                </div>
                <div className='d-flex align-items-center gap-30'>
                 <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                 </div>
                 <img src='images/tv.jpg' alt='camera'/>
                </div>
                <div className='d-flex align-items-center gap-30'>
                 <div>
                  <h6>Headphones</h6>
                  <p>10 Items</p>
                 </div>
                 <img src='images/headphone.jpg' alt='camera'/>
                </div>
                <div className='d-flex align-items-center gap-30'>
                 <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                 </div>
                 <img src='images/camera.jpg' alt='camera'/>
                </div>
                <div className='d-flex align-items-center gap-30'>
                 <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                 </div>
                 <img src='images/camera.jpg' alt='camera'/>
                </div>
                <div className='d-flex align-items-center gap-30'>
                 <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                 </div>
                 <img src='images/tv.jpg' alt='camera'/>
                </div>
                <div className='d-flex align-items-center gap-30'>
                 <div>
                  <h6>Headphones</h6>
                  <p>10 Items</p>
                 </div>
                 <img src='images/headphone.jpg' alt='camera'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container> */}

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          {
      productState&& productState?.map((item,index)=>{
        if(item?.tags ==="featured")
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
            <button className="border-0 bg-transparent" >
              <img onClick={(e)=>{addToWish(item?._id)}} src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={item?.images[0]?.url} className="img-fluid mx-auto " width={230} alt="product" />
            <img src={BM} width={258} className="img-fluid" alt="product " />
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
            <p className={`description ${productState?.grid === 12 ? "d-block" : "d-none"}`}>
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
                <img onClick={()=>navigate("/product/"+item?._id)} src= {view} alt="view" />
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
        </div>
      </Container>

     

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          {
            productState && productState?.map((item,index)=>{
                if(item?.tags=== "special"){
                  return (
                    <SpecialProduct 
                     key={index}
                     title={item?.title}
                     id = {item?._id}
                     brand = {item?.brand}
                     totalrating = {item?.totalrating.toString()}
                     quantity = {item?.quantity}
                     price = {item?.price}
                     sold = {item?.sold}
                     image = {item?.images[0].url}
                    />
                  )
                }
            })
          }
          
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
                  <PopularCard data = {productState}  />
        </div>
      </Container>

      {/* <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container> */}
    </>
  )
}

export default Home

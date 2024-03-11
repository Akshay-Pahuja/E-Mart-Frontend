import React, { useState,useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
// import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
// import Color from "../components/Color";
import Container from "../components/Container";
import { getAllProducts } from "../features/products/productSlice";
import { useDispatch, useSelector} from "react-redux";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const [brands,setbrands] = useState([]);
  const [brand,setbrand] = useState([]);
  const [categories,setCategories] = useState([]);
  const [category,setCategory] = useState([]);
  const [Tags,setTags] = useState([]);
  const [Tag,setTag] = useState([]);
  const [minPrice,setMinPrice] = useState(null);
  const [maxPrice,setMaxPrice] = useState(null);
  const [sort,setSort] = useState(null);
  const productState = useSelector((state)=> state.product.products);
  //console.log(productState);

  useEffect(()=>{
    let brandData = [];
    let categoryData = [];
    let tagsdata = [];
    for(let index =0; index<productState?.length;index++){
      brandData.push(productState[index]?.brand)
      categoryData.push(productState[index]?.category);
      tagsdata.push(productState[index]?.tags);
    }
    setbrands(brandData);
    setCategories(categoryData);
    setTags(tagsdata);
  },[productState])

  // console.log(brands);
  // console.log([...new Set(categories)],[...new Set(Tags)]);

  const dispatch = useDispatch();
  useEffect(()=>{
   getProducts();
     
  },[sort,Tag,brand,category,minPrice,maxPrice]);

   const getProducts = ()=>{
    dispatch(getAllProducts({sort,Tag,brand,category,minPrice,maxPrice}))
   }

   
 
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className=" text-capitalize ps-0">
                 {
                    categories && [... new Set(categories)].map((item,index)=>{
                        return (
                          <li key={index} onClick={()=>setCategory(item)} >{item}</li>
                        )
                    })    
                 }
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
               
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                      onChange={(e)=>setMinPrice(e.target.value)}
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="To"
                      onChange={(e)=>setMaxPrice(e.target.value)}
                    />
                    <label htmlFor="floatingInput1">To</label>
                  </div>
                </div>
                
                <h5 className="sub-title">Size</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-1"
                    />
                    <label className="form-check-label" htmlFor="color-1">
                      S (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-2"
                    />
                    <label className="form-check-label" htmlFor="color-2">
                      M (2)
                    </label>
                  </div>
                  
                </div>
                <div className="filter-card ">
              <h3 className="sub-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                 
                {
                    Tags && [... new Set(Tags)].map((item,index)=>{
                        return (
                          <span key={index} onClick={()=>setTag(item)} className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3">
                           {item}
                  </span>
                          
                        )
                    })    
                 }

                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
            <h3 className="sub-title">Product Brands</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                 
                {
                    brands && [... new Set(brands)].map((item,index)=>{
                        return (
                          <span key={index} onClick={()=>setbrand(item)} className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3">
                           {item}
                  </span>
                          
                        )
                    })    
                 }

                </div>
              </div>
            </div>
              </div>
            </div>

          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select
                    name=""
                    defaultValue={"manula"}
                    className="form-control form-select"
                    onChange={(e)=>setSort(e.target.value)}
                    id=""
                  >
                    <option value="title">Alphabetically, A-Z</option>
                    <option value="-title">
                      Alphabetically, Z-A
                    </option>
                    <option value="price">Price, low to high</option>
                    <option value="-price">Price, high to low</option>
                    <option value="created">Date, old to new</option>
                    <option value="-created">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                        
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />

                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard data={productState} grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
  
    </>
  );
};

export default OurStore;
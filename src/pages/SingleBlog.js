import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { getABlog,resetState } from "../features/blogs/blogSlice";
import { useSelector,useDispatch } from "react-redux";
import { Markup } from "interweave";

const SingleBlog = () => {

 const dispatch = useDispatch();
 const blogState = useSelector((state)=> state.blog.singleblog);
 const location = useLocation();
 const getBlogId = location.pathname.split("/")[2];
 useEffect(()=>{
  dispatch(getABlog(getBlogId));
  dispatch(resetState());
 },[])

  return (
    <>
      <Meta title={blogState?.title} />
      <BreadCrumb title={blogState?.title} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" />Blogs
              </Link>
              <h3 className="title text-secondary">{blogState?.title}</h3>
              <img src={blogState?.images[0].url} className="img-fluid w-90 my-4" width={500} alt="blog" />
              <p>
               <Markup content={blogState?.description} />
              
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { Markup } from 'interweave';
const BlogCard = (props) => {
  const {data} = props;
  console.log(data);
  return (
    <>
    {
      data?.map((item,index)=>{
        return (
          <div className="blog-card clblog mb-5 " key={index}>
          <div className="card-image">
            <img src={item?.images[0].url} className="img-fluid w-100" alt="blog" />
          </div>
          <div className="blog-content">
            <p className="date">{moment(item.createdAt).format('MMMM Do YYYY, h:mm a')}</p>
            <h5 className="title">{item.title}</h5>
            <p className="desc">
            <Markup content={item?.description?.substr(0,85)+"..."} />
            
            </p>
            <Link to={`/blog/${item._id}`} className="button">
              Read More
            </Link>
          </div>
        </div>
        )
      })
    }
   
   </>
  );
};


export default BlogCard;
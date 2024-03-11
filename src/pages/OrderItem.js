import React from 'react'

const OrderItem = (props) => {

   const {data} = props;

  return (
    <>
       
     {
        data && data?.map((item,index)=>{
           return (

            <div key={index} className="order-item my-2 py-3 px-3">
            <div className='d-flex align-items-center gap-15  my-5'  >
              <img className='mx-2' src={item?.orderItems[0]?.product?.images[0].url} alt={'img'} />
              <div className='mx-5'><p>Order Id: {item?._id}</p></div>  
              <div className='mx-5'><h3 className='h6'>{item?.orderItems[0]?.product?.title}</h3></div> 
              <div className='mx-5'><p>₹{item?.totalPriceAfterDiscount}</p></div> 
              <div className='mx-5'><p>
                <ul className='colors ps-0'>
                Color: 
                  <li style={{backgroundColor:item?.orderItems[0]?.color?.title}}></li>
                </ul>
                {/* {item?.orderItems[0]?.color} */}
                </p></div> 
              <div className='mx-5'><p>Order Status: {item?.orderStatus}</p></div> 
            </div>
          </div>

       
           )
        })
     }

    
    
    </>
  )
}

export default OrderItem

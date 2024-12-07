import React from 'react'
import "../style/order.css"
import { cards } from './constant';
import giftImg  from "../images/birthday-gifts.avif"
import { Button } from 'react-bootstrap';
const Order = () => {
  return (
    <div>
      <div className='orderCpntainer'>
        <div className="animate one ml-6">
          <span style={{ marginRight: "20px" }}>Delicious</span>
          <span style={{ marginRight: "20px" }}>Cakes</span>
        </div>
        <h4 className='mt-4'>Delectably Delightful in Every Layer!</h4>
      </div>
      <div className='GiftImgContainer'><img className='GiftImg' src={giftImg}/></div>
      <div className='cardConatiner m-3'>
        {
          cards.map((data, index)=>{
            return(
              <div className="card" style={{ width: "20rem" }}>
              <img id='CardCake' src={data?.image} className="card-img-top" alt="tall Cake" />
              <div className="card-body" id={data?.id}>
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{" ₹  "+data?.price}</p>
                <a href="#" className="btn btn-success">{" ★ "+data?.rating}</a>
                <Button className='m-2'>Add to Cart</Button>
              </div>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Order
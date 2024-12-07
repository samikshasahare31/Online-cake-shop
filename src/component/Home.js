import React from "react";
import img from "../images/pink-background-with-cake-cupcakes-it_1064589-182497.avif";
import img1 from "../images/birthday_cake_1.avif"
import img2 from "../images/anniversary_cake_3.avif"
import img3 from "../images/designer_cake_8.avif"
import img4 from "../images/regular_cake_1-replaced-womens-day_0.avif"
import img5 from "../images/photo_cake_12.avif"
import img6 from "../images/bento-cake_4.avif"
import img7 from "../images/birthday_6.avif";
import img8 from "../images/anniversary_7.avif";
import img9 from "../images/gift_for_him_0.avif";
import "../style/Home.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Carsoule from "./Carsoule";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="ImgContainer">
        <div className="p-4">
          {/* <img style={{width:"100%", height:"40rem"}} src={img}/> */}
          <div class="animate one ml-6">
            <span>C</span>
            <span>H</span>
            <span>E</span>
            <span>E</span>
            <span>R</span>
            <span>S</span> &nbsp;
            <span>T</span>
            <span>O</span> &nbsp;
            <span>C</span>
            <span>A</span>
            <span>K</span>
            <span>E</span> &nbsp;
            <span>&</span>&nbsp;
            <span>G</span>
            <span>O</span>
            <span>O</span>
            <span>D</span> &nbsp;
            <span>T</span>
            <span>I</span>
            <span>M</span>
            <span>E</span>
            <span>S</span>
          </div>
          <div className="mt-4 p-2">
            <h1>Preminum Cakes We Bake Here</h1>
          </div>
          <div className="InstaContainer" style={{}}>
            {/* <a
            href="https://www.instagram.com/_delicious_cake2021/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark text-center mt-6 mb-4 "
            style={{
              backgroundColor: "#ffff",
              boxShadow: "1px 2px 9px 2px #ffff",
              border: "2px solid #ffff",
              textDecoration:"none",
              padding: "11px",
              width:"20%"
            }}
          >
            <h6>Connect Instagram Account</h6>
          </a> */}
            <Button
              className="OrderNowbtn"
              variant="light"
              onClick={() => {
                navigate("/order");
              }}
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>
      <h3 className="p-4" style={{}}>Upto 40% Off on Delicious Cakes | Free Delivery</h3>
      <div class="image-grid mt-4 p-4">
        <div class="image"><img src={img1} /></div>
        <div class="image"><img src={img2} /></div>
        <div class="image"><img src={img3} /></div>
        <div class="image"><img src={img4} /></div>
        <div class="image"><img src={img5} /></div>
        <div class="image"><img src={img6} /></div>
      </div>
      <Carsoule />
      <div className="shopNowContainer">
        <div className="shopNow" style={{}}><img src={img7} /><span class="giftname">Birthday Cakes</span></div>
        <div className="shopNow" style={{}}><img src={img8} /><span class="giftname">Anniversary Cakes</span></div>
        <div className="shopNow" style={{}}><img src={img9} /><span class="giftname">Cakes For Friends</span></div>
      </div>
      <div className="footerContainer">
        {/* <h4>Get your custom cake delivered today!</h4> */}
        <Button  className="footerItem1"
              variant="light"
              onClick={() => {
              }}
            >
              <div className='d-flex justify-content-center mt-6' style={{}}>

              <a href='https://www.instagram.com/_delicious_cake2021/'target='_blank' 
              rel='noopener noreferrer' className='text-dark mt-6 ' style={{backgroundColor:"white", boxShadow: "1px 2px 9px 2px white",border:"2px solid white", width:"100%"}}>Connect Now</a>
              </div>
              
            </Button>
        <div className="section1" id="contactInfoSection">
          <span className="mb-2" style={{fontWeight:"600"}}>Contact Info</span>
          <span className="mb-2">📧 Email: info@cakeshop.com</span>
          <span className="mb-2">📞 Phone: +123 456 7890</span>
          <span className="mb-2">📍 Address: 123 Sweet Street, Dessert City, 56789</span>
        </div>
        <div className="section1">
        <span className="mb-2" style={{fontWeight:"600"}}>Quick Links</span>
          <span className="mb-2">Custom Cakes</span>
          <span className="mb-2">Birthday Cakes</span>
          <span className="mb-2">Wedding Cakes</span>
        </div>
        <div className="section1"  id="contactInfoSection">
        <span className="mb-2" style={{fontWeight:"600"}}>Follow Us</span>
          <span className="mb-2">🟦 Facebook</span>
          <span className="mb-2">📸 Instagram</span>
          <span className="mb-2">🐦 Twitter</span>
        </div>
      </div>
    </>
  );
};

export default Home;

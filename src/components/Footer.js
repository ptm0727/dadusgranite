import React from "react";
import "./footer.css"
import Contact from "../routes/Contact";
const Footer = () => {
    return (
      <div className="footer">
        <div className="top">
        <div>
          <h1>Dadu's Granite</h1>
           <p>Discover a granite wonderland of endless choices.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-solid fa-map"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
        </div>
        <div className="bottom">
          <div>
            <h4>Office Address:-</h4>
            <p>SarrorNagar,Plot No.77 & 78,Karmanghat </p>
            <p>Road,Jillal Guda Karmanghat,Hyderabad</p>
            <p>Telangana-97</p>
            <p>Cell: +91-9000139111</p>
            <p>Email:- ladha.surendra@gmail.com</p>
          </div>
          <div>
            <h4>Help</h4>
            <a href="/contact">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/contact">Contact Us</a>
          </div>
          <div>
            <h4>Others</h4>
            <a href="/">Products</a> 
            <a href="/">Term of Service</a>
            <a href="/Privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
        
  
    );
  }
  

export default Footer;
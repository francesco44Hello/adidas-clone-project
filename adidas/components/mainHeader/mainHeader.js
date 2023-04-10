import React from "react";
import Image from "next/image";

const MainHeader = () => {
  return (
    <div className="mainHeader">
      <ul style={{ textDecoration: "none" }} className="help-links">
        <li>help</li>
        <li>orders and returns</li>
        <li>gift cards</li>
        <li>become a member</li>
      </ul>
      <div className="logo-links-search">
        <div className="logo">
            <img src='https://i.ibb.co/23kLC4Z/adidas-logo-png-2365.png' alt="Adidas logo"></img>
        </div>
        <div className="header-links">
        <ul style={{ textDecoration: "none" }} className='help-links hyper-links'>
        <li style={{fontWeight: 'bold'}}>MEN</li>
        <li style={{fontWeight: 'bold'}}>WOMEN</li>
        <li style={{fontWeight: 'bold'}}>KIDS</li>
        <li>NEW</li>
        <li>SPORTS</li>
        <li>COLLECTIONS</li>
        <li style={{fontWeight: 'bold'}}>OUTLET</li>
      </ul>
        </div>
        <div className="search"></div>
      </div>
    </div>
  );
};

export default MainHeader;

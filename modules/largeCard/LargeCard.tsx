import Image from "next/image";
import React from "react";

const LargeCard = () => {
  return (
    <div className="container">
      <div className="largeCard_container">
        <Image
          src="https://images.pexels.com/photos/2080960/pexels-photo-2080960.jpeg?auto=compress&cs=tinysrgb&w=600"
          layout="fill"
          objectFit="cover"
          style={{borderRadius:"15px"}}
        />
        <div className="content_wrapper">
          <h1 className="heading">The Greatest Outdoor</h1>
          <p className="small_heading">Wishlist curated by Airbnb</p>
          <button className="inspire_btn">Get inspired</button>
        </div>
      </div>
    </div>
  );
};

export default LargeCard;

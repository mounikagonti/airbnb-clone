import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="banner_container">
      <Image
        src="https://images.pexels.com/photos/35969/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        layout="fill"
        objectFit="cover"
      />
      <div className="banner_content">Not sure where to go? Perfect.</div>
      <div className="flexible">I'm flexible</div>
    </div>
  );
};

export default Banner;

// src="https://images.pexels.com/photos/1546853/pexels-photo-1546853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
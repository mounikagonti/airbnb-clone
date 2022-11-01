import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAirBinSlice } from "../../redux/airBin/AirBinSlice";

const Explore = () => {
  const { airBinData } = useSelector((state: any) => state.airBin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAirBinSlice());
  }, []);

  return (
    <div className="container">
      <h1 className="explore_heading">Explore nearby</h1>
      <div className="explore_container">
        {airBinData?.map((item: any) => (
          <div className="smallImg_container" key={item?.id}>
            <div className="image_container">
              <Image
                src={item?.image}
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className="explore_content">
              <h4 className="place">{item?.title}</h4>
              <div className="distance">{item?.distance}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;

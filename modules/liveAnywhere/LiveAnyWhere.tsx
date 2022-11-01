import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBigAirBinSlice } from "../../redux/airBin/BigImageSlice";

const LiveAnyWhere = () => {
  const { bigImgData } = useSelector((state: any) => state.bigImg);
  const dispatch = useDispatch();

  console.log("airBinData2", bigImgData);

  useEffect(() => {
    dispatch(getBigAirBinSlice());
  }, []);
  return (
    <div className="container">
      <div className="liveAnyWhere_container">
        <h1 className="live_heading">Live Anywhere</h1>
        <div className="bigImg_wrapper">
          {bigImgData.map((item: any) => (
            <div className="liveImg_container" key={item?.id}>
              <div className="img_container">
                <Image
                  src={item?.image}
                  objectFit="cover"
                  layout="fill"
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div className="place_name">{item?.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveAnyWhere;

import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookingSlice } from "../../redux/airBin/BookingSlice";
import { FaStarHalfAlt } from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc";

const InfoCard = () => {
  const { bookingData } = useSelector((state: any) => state.room);
  const dispatch = useDispatch();

  console.log("bookingData", bookingData);

  useEffect(() => {
    dispatch(getBookingSlice());
  }, []);
  return (
    <div className="container">
      {bookingData.map((item: any) => (
        <div className="infoCard_container" key={item?.id}>
          <div className="infoImg_wrapper">
            <Image
              src={item?.img}
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "15px" }}
            />
          </div>
          <div className="infoLeft_wrapper">
            <div className="left_top">
              <p className="privateRoom">{item?.location}</p>
              <div className="icon">
                <FcLikePlaceholder />
              </div>
            </div>
            <h3 className="stays">{item?.title}</h3>
            <div className="guest">{item?.description}</div>
            <div className="left_bottom">
              <div className="leftL">
                <div className="star">
                  <FaStarHalfAlt />
                </div>
                <div className="num">{item?.start}</div>
              </div>
              <div className="leftR">
                <h3 className="price">{item?.price}</h3>
                <p>{item?.total}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;

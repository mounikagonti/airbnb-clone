import { useRouter } from "next/router";
import React from "react";
import { format } from "date-fns";
import InfoCard from "../infoCard/InfoCard";
// import dateFormat, { masks } from "dateformat";
// import { useDispatch, useSelector } from "react-redux";
// import { getBookingSlice } from "../../redux/airBin/BookingSlice";

const SearchLoc = () => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuest }: any = router.query;
  console.log(startDate);
  console.log(endDate);

  // const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  // const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  // const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="search_container">
      <div className="info">
        300+ Stays - {startDate} - {endDate} - for {noOfGuest} Guests
      </div>
      <h1>Stays in {location}</h1>
      <div className="button_wrapper">
        <div className="btn">Cancellation Flexibility</div>
        <div className="btn">Type Of Place</div>
        <div className="btn">Price</div>
        <div className="btn">Rooms and Beds</div>
        <div className="btn">More Filters</div>
      </div>
      <InfoCard />
    </div>
  );
};

export default SearchLoc;

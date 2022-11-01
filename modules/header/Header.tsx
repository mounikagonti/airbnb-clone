import Image from "next/image";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BiGlobe, BiMenu } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { DateRangePicker } from "react-date-range";
import { BsFillPeopleFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState(1);
  const router: any = useRouter();

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const goBackHomePage = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuest,
      },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <>
      <div className="header_container">
        <div className="header_left" onClick={() => router.push("/")}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="header_middle">
          <input
            type="text"
            placeholder="Start your search"
            value={searchInput}
            onChange={(e: any) => setSearchInput(e.target.value)}
          />
          <div className="search_icon">
            <FiSearch className="search" />
          </div>
        </div>
        <div className="header_right">
          <div className="host_wrapper">
            <div className="become_host">Become a host</div>
            <div className="glob_icon">
              <BiGlobe className="icon" />
            </div>
          </div>
          <div className="menu_wrapper">
            <div className="menu">
              <BiMenu className="icon" />
            </div>
            <div className="menu">
              <FaUserCircle className="icon icon2" />
            </div>
          </div>
        </div>
      </div>
      <div className="date_selector">
        {searchInput && (
          <>
            <div className="date_wrapper">
              <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5B61"]}
                onChange={handleSelect}
              />
            </div>
            <div className="guest_wrapper">
              <div className="guest_heading">
                <h2 className="guest">Number of Guest</h2>
                <div className="count_wrapper">
                  <BsFillPeopleFill className="icon" />
                  <input
                    type="number"
                    value={noOfGuest}
                    onChange={(e: any) => setNoOfGuest(e.target.value)}
                    className="number_input"
                    min={1}
                  />
                </div>
              </div>
            </div>
            <div className="btn_wrapper">
              <div className="cancel_btn" onClick={resetInput}>
                Cancel
              </div>
              <div className="search_btn" onClick={goBackHomePage}>
                Search
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Header;

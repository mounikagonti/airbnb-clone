import React from "react";
import Footer from "../modules/footer/Footer";
import Header from "../modules/header/Header";
import SearchLoc from "../modules/SearchLoc/SearchLoc";

const search = () => {
  return (
    <div>
      <Header />
      <SearchLoc />
      <Footer />
    </div>
  );
};

export default search;

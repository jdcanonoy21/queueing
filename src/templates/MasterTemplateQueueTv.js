import React from "react";
import "./MasterTemplate.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/ContentQueueTv";

const MasterTemplate = (props) => {
  return (
    <div className="MasterTemplate">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default MasterTemplate;
import React from "react";
import "./MasterTemplate.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/ContentQueueTicket";

const MasterTemplate = (props) => {
  return (
    <div className="MasterTemplate">
      <Header />
      <Content />
    </div>
  );
};

export default MasterTemplate;
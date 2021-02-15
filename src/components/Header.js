import React, { useState } from 'react';
import "./Header.css";
import lguLogo from "../assets/lgulogo.png";

const section = [
  {title: "Real Property"}
]


const Header = (props) => {
    const [sectionName] = useState(section);

  return (
    <header className="Header">
    	<div className="Header__logo">
    		<img src={lguLogo}/>
    	</div>
    	<div className="Header__name">
            {sectionName.map( section => (
              <h1>{section.title}</h1>
            ))}
    	</div>
    	<div className="Header__dateTime">
    		<p>February 1, 2020</p>
    		<p>Monday,  11:00AM</p>
    	</div>
    </header>
  );
};

export default Header;

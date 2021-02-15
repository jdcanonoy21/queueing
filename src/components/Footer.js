import React, { useState } from 'react';
import "./Footer.css";

const announcements = [
  {text: "Announcements Announcements"}
]

const Footer = (props) => {
	const [announcement] = useState(announcements);
  return (
    <footer className="Footer">
      <hr className="Footer__divider" />
        <marquee>
        	{announcement.map( announcement => (
        	<h1 className="Footer__announcement">{announcement.text}</h1>
            ))}
        </marquee>
    </footer>
  );
};



export default Footer;

import React, { useState } from 'react'
import "./ContentQueueTv.css";
import Video from "../assets/vid.mp4";
import Priority from "./Priority";


const Content = (props) => {

  return (
    <div className="ContentVid">
		<div className="ContentVid__video">
			<video autoPlay muted>
				<source src={Video} type="video/mp4" />
			</video>
		</div>
		<div className="ContentVid__number">
			<Priority />
		</div>
    </div>
  );
};



export default Content;

import React, { useState } from 'react'
import "./ContentQueueTv.css";
/*import Video from "../assets/vid.mp4";*/
//import SinglePriority from "./SinglePriority";
import MultiplePriority from "./MultiplePriority";


const Content = (props) => {

  return (
    <div className="ContentVid">
		<div className="ContentVid__video">
			<video autoPlay muted>
			</video>
		</div>
		<div className="ContentVid__number">
			<MultiplePriority />
		</div>
    </div>
  );
};



export default Content;

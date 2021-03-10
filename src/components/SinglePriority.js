import React, { useState } from 'react'
import "./SinglePriority.css";

const initialSections = [
  {title: "regular", counterno: "C1", ticketno: "A001"},
  {title: "senior", counterno: "C1", ticketno: "A001"},
  {title: "pwd", counterno: "C1", ticketno: "A001"},
  {title: "students", counterno: "C1", ticketno: "A001"}
]

const SinglePriority = (props) => {
	const [sections, setSections] = useState(initialSections);	
  return (
   	<div className="PriorityContainer">
      {sections.map( section => (
      	<div className="PriorityContainer__content">
          	<div className="PriorityContainer__header">{section.title}</div>
            <div className="PriorityContainer__subHeader">
              <div className="PriorityContainer__number">Ticket No.</div>
              <div className="PriorityContainer__counter">Counter No.</div>
            </div>
            <div className="PriorityContainer__body">
              <div className="PriorityContainer__number">{section.ticketno}</div>
              <div className="PriorityContainer__counter">{section.counterno}</div>
            </div>
		    </div>
        ))}
    </div>
  );
};



export default SinglePriority;

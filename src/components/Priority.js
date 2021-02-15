import React, { useState } from 'react'
import "./Priority.css";

const initialSections = [
  {title: "regular", counterno: "C1", ticketno: "A001"},
  {title: "senior", counterno: "C1", ticketno: "A001"},
  {title: "pwd", counterno: "C1", ticketno: "A001"},
  {title: "students", counterno: "C1", ticketno: "A001"}
]

const Priority = (props) => {
	const [sections, setSections] = useState(initialSections);	
  return (
   	<div>
      {sections.map( section => (
      	<div className="Priority">
          	<div className="Priority__header">{section.title}</div>
			<div className="Priority__body">
		     	<div className="Priority__number">{section.ticketno}</div>
				<div className="Priority__counter">{section.counterno}</div>
			</div>
		</div>
        ))}
    </div>
  );
};



export default Priority;

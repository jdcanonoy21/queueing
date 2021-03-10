import React, { useState } from 'react'
import "./MultiplePriority.css";

const initialSections = [
  {name: "regular"},
  {name: "senior citizen"},
  {name: "pwd"},
  {name: "students"}
]

const initialTake = [
  {name: "regular", counterno: "C1", ticketno: "A001"},
  {name: "senior citizen", counterno: "C1", ticketno: "A001"},
  {name: "pwd", counterno: "C1", ticketno: "A001"},	
  {name: "students", counterno:"C2", ticketno:"B002"},
]

const MultiplePriority = (props) => {
  const [sections, setSections] = useState(initialSections);
  const [takes, setTakes] = useState(initialTake);	
  
  const allsection = sections.map(group => {
    return <p>{group.name}</p>
  });

  const sameSection = initialTake.map(group => {
  
    if (allsection.includes(group.name)) {
      return group;
    }
  });

  return (
    <div >
      {sameSection}
    </div>
  )


};



export default MultiplePriority;

import React, { useState } from 'react';
import {
  Button
} from 'rsi-react-web-components'
import "./ContentQueueTicket.css";

const sections = [
    { sectionName: 'Section 1 Name', group: ['Regular', 'Senior', 'Students', 'PWD'] },
    { sectionName: 'Section 2 Name', group: ['Regular', 'Senior'] }
  ];

const QueueTicket = (props) => {


  return (
    <div className="Content">
        {
          sections.map(item => (
              <div className="Content__section">
              	<p className="Content__header">{item.sectionName}</p>
                {item.group.map(group => (
	                <Button>{`${group}`}</Button>
	            ))}
              </div>
          ))
      	}
    </div>
  );
};



export default QueueTicket;

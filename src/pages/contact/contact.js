import React from "react";
import { Element } from 'react-scroll'

const Contact = () => {
  return (
    <div className="page ml-4" id='contact'>
      <Element id='conctact'>
        <h1 className="text-4xl font-Arial">Contact Me</h1>
        <ul className="list-disc">
          <li>Personal Email: </li>
          <li>Work Email: </li>
          <li>Phone Number: </li>
        </ul>
      </Element>
    </div>
  );
};

export default Contact;

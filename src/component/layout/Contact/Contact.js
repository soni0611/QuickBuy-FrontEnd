import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a
        data-testid="mail-button"
        className="mailBtn"
        href="mailto:shivam.soni1998@gmail.com"
      >
        <Button>Contact: shivam.soni1998@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;

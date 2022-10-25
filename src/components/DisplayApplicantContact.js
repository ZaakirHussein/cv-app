import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

function DisplayApplicantContact({ email, phone, residence }) {
  return (
    <div className="contact-list-item">
      <div className="contact-left">
        <div className="contact-logo">
          <FontAwesomeIcon icon={faIdCard} id="contact-img" />
        </div>

        <div className="contact-detail-container">
          <p className="display-contact-details">Email: {email}</p>
          <p className="display-contact-details">Phone: {phone}</p>
          {residence && (
            <p className="display-contact-details">Residence: {residence}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DisplayApplicantContact;

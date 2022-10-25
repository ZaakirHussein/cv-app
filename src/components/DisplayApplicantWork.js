import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

function DisplayApplicantWork({ arr }) {
  return (
    <>
      {arr.map(
        ({
          companyName,
          position,
          startDate,
          endDate,
          responsibilities,
          id,
        }) => (
          <div key={id}>
            <div className="work-list-item">
              <div className="work-left">
                <div className="work-logo">
                  <FontAwesomeIcon icon={faBriefcase} id="work-img" />
                </div>

                <div className="work-detail-container">
                  <div className="work-detail-header">
                    <p id="work-name">{companyName}</p>
                    <p>{`${startDate.slice(0, 4)} - ${endDate.slice(0, 4)}`}</p>
                  </div>

                  <p id="position">{position}</p>
                  <p id="responsibilities"> -{responsibilities}</p>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default DisplayApplicantWork;

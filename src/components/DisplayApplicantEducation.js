import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function DisplayApplicantEducation({ arr }) {
  return (
    <>
      {arr.map(({ schoolName, major, studyStart, studyEnd, id }) => (
        <div key={id}>
          <div className="education-list-item">
            <div className="education-left">
              <div className="grad-logo">
                <FontAwesomeIcon icon={faGraduationCap} id="grad-img" />
              </div>

              <div className="school-detail-container">
                <div className="school-detail-header">
                  <p id="school-name">{schoolName}</p>
                  <p>{`${studyStart.slice(0, 4)} - ${studyEnd.slice(0, 4)}`}</p>
                </div>

                <span id="major">{major}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default DisplayApplicantEducation;

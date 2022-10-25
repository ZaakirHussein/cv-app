import TextInput from "./TextInput";
import CancelSaveButtons from "./CancelSaveButtons";
import React, { useState } from "react";
import uuid from "react-uuid";

const SchoolInfo = ({ cancelEvent, saveEvent }) => {
  const [applicantEducation, setApplicantEducation] = useState({
    id: uuid(),
    schoolName: "",
    major: "",
    studyStart: "",
    studyEnd: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setApplicantEducation({
      ...applicantEducation,
      [name]: value,
    });
  }

  return (
    <div className="school-info">
      <div className="school-info-form">
        <div>
          <TextInput
            onChange={handleChange}
            value1={applicantEducation.schoolName}
            category1="Institution"
            name1="schoolName"
            value2={applicantEducation.major}
            category2="Major"
            name2="major"
          />
        </div>
        <div className="input-pair">
          <div className="label-input">
            <label>From</label>
            <input
              type="month"
              onChange={handleChange}
              value={applicantEducation.studyStart}
              placeholder="Start Date"
              name="studyStart"
            ></input>
          </div>
          <div className="label-input">
            <label>To</label>
            <input
              type="month"
              onChange={handleChange}
              value={applicantEducation.studyEnd}
              placeholder="End Date"
              name="studyEnd"
            ></input>
          </div>
        </div>
        <CancelSaveButtons
          onCancelClick={() => cancelEvent("educationDisplayed")}
          onSaveClick={() => saveEvent(applicantEducation)}
        />
      </div>
    </div>
  );
};

export default SchoolInfo;

import React, { useState } from "react";
import uuid from "react-uuid";
import DateInput from "./DateInput";
import TextInput from "./TextInput";
import CancelSaveButtons from "./CancelSaveButtons";

const WorkExperience = ({ cancelEvent, saveEvent }) => {
  const [applicantWork, setApplicantWork] = useState({
    companyName: "",
    position: "",
    startDate: "",
    endDate: "",
    responsibilities: "",
    id: uuid(),
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setApplicantWork({
      ...applicantWork,
      [name]: value,
    });
  }

  return (
    <div className="work-info">
      <div>
        <TextInput
          onChange={handleChange}
          value1={applicantWork.companyName}
          category1="Company Name"
          name1="companyName"
          value2={applicantWork.position}
          category2="Position"
          name2="position"
        />
      </div>

      <DateInput
        onChange={handleChange}
        value1={applicantWork.startDate}
        name1="startDate"
        value2={applicantWork.endDate}
        name2="endDate"
      />

      <textarea
        className="responsibilities"
        placeholder="Job Description"
        rows="6"
        onChange={handleChange}
        value={applicantWork.responsibilities}
        name="responsibilities"
      ></textarea>
      <CancelSaveButtons
        onCancelClick={() => cancelEvent("workDisplayed")}
        onSaveClick={() => saveEvent(applicantWork)}
      />
    </div>
  );
};

export default WorkExperience;

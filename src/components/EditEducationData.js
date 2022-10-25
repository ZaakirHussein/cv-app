import React, { useState } from "react";
import TextInput from "./TextInput";
import CancelSaveButtons from "./CancelSaveButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const EditEducationData = ({
  arrState,
  id,
  saveEvent,
  cancelEvent,
  educationToggle,
}) => {
  const [copyOfArrState, setCopyOfArrState] = useState(arrState);

  const indexOf = (id) => {
    return copyOfArrState.findIndex((element) => element.id === id);
  };

  const educationObjIndex = indexOf(id);

  const handleChangeEducationObj = (index) => (e) => {
    const newEducationArr = copyOfArrState.map((obj, i) => {
      if (index === i) {
        return { ...obj, [e.target.name]: e.target.value };
      } else {
        return obj;
      }
    });

    setCopyOfArrState(newEducationArr);
  };

  return (
    <>
      {copyOfArrState
        .filter((obj) => obj.id === id)
        .map((educationObj) => (
          <div className="edit-education-container" key={id}>
            <div className="education-left">
              <div className="grad-logo">
                <FontAwesomeIcon icon={faGraduationCap} id="grad-img" />
              </div>
            </div>

            <div className="school-info">
              <form className="school-info-form">
                <div>
                  <TextInput
                    onChange={handleChangeEducationObj(educationObjIndex)}
                    value1={educationObj.schoolName}
                    category1="Institution"
                    name1="schoolName"
                    value2={educationObj.major}
                    category2="Major"
                    name2="major"
                  />
                </div>
                <div className="input-pair">
                  <div className="label-input">
                    <label>From</label>
                    <input
                      type="month"
                      onChange={handleChangeEducationObj(educationObjIndex)}
                      value={educationObj.studyStart}
                      placeholder="Start Date"
                      name="studyStart"
                    ></input>
                  </div>
                  <div className="label-input">
                    <label>To</label>
                    <input
                      type="month"
                      onChange={handleChangeEducationObj(educationObjIndex)}
                      value={educationObj.studyEnd}
                      placeholder="End Date"
                      name="studyEnd"
                    ></input>
                  </div>
                </div>
                <CancelSaveButtons
                  onCancelClick={cancelEvent}
                  onSaveClick={() => {
                    saveEvent(copyOfArrState);
                    educationToggle();
                  }}
                />
              </form>
            </div>
          </div>
        ))}
    </>
  );
};

export default EditEducationData;

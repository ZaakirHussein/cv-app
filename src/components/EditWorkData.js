import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import TextInput from "./TextInput";
import CancelSaveButtons from "./CancelSaveButtons";

const EditWorkData = ({ arrState, id, cancelEvent, saveEvent, workToggle }) => {
  const [copyOfArrState, setCopyOfArrState] = useState(arrState);

  const indexOf = (id) => {
    return copyOfArrState.findIndex((element) => element.id === id);
  };

  const workObjIndex = indexOf(id);

  const handleChangeWorkObj = (index) => (e) => {
    const newWorkArr = copyOfArrState.map((obj, i) => {
      if (index === i) {
        return { ...obj, [e.target.name]: e.target.value };
      } else {
        return obj;
      }
    });

    setCopyOfArrState(newWorkArr);
  };

  return (
    <>
      {copyOfArrState
        .filter((obj) => obj.id === id)
        .map((workObj) => (
          <div className="edit-work-container" key={id}>
            <div className="work-left">
              <div className="work-logo">
                <FontAwesomeIcon icon={faBriefcase} id="work-img" />
              </div>
            </div>

            <div className="work-info">
              <form className="work-info-form">
                <div>
                  <TextInput
                    onChange={handleChangeWorkObj(workObjIndex)}
                    value1={workObj.companyName}
                    category1="Company Name"
                    name1="companyName"
                    value2={workObj.position}
                    category2="Position"
                    name2="position"
                  />
                </div>
                <div className="input-pair">
                  <div className="label-input">
                    <label>From</label>
                    <input
                      type="month"
                      onChange={handleChangeWorkObj(workObjIndex)}
                      value={workObj.startDate}
                      placeholder="Start Date"
                      name="startDate"
                    ></input>
                  </div>
                  <div className="label-input">
                    <label>To</label>
                    <input
                      type="month"
                      onChange={handleChangeWorkObj(workObjIndex)}
                      value={workObj.endDate}
                      placeholder="End Date"
                      name="endDate"
                    ></input>
                  </div>
                </div>
                <textarea
                  className="responsibilities"
                  placeholder="Job Description"
                  rows="6"
                  onChange={handleChangeWorkObj(workObjIndex)}
                  value={workObj.responsibilities}
                  name="responsibilities"
                ></textarea>
                <CancelSaveButtons
                  onCancelClick={cancelEvent}
                  onSaveClick={() => {
                    saveEvent(copyOfArrState);
                    workToggle();
                  }}
                />
              </form>
            </div>
          </div>
        ))}
    </>
  );
};

export default EditWorkData;

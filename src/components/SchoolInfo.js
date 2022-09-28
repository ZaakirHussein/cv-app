import TextInput from "./TextInput";
import CancelSaveButtons from "./CancelSaveButtons";

const SchoolInfo = ({ schoolData, onInputChange, cancelEvent, saveEvent }) => {
  const { schoolName, major, studyStart, studyEnd } = { schoolData };
  return (
    <div className="school-info">
      <div>
        <TextInput
          onChange={onInputChange}
          value1={schoolName}
          category1="Institution"
          name1="schoolName"
          value2={major}
          category2="Major"
          name2="major"
        />
      </div>
      <div className="input-pair">
        <div className="label-input">
          <label>From</label>
          <input
            type="month"
            onChange={onInputChange}
            value={studyStart}
            placeholder="Start Date"
            name="studyStart"
          ></input>
        </div>
        <div className="label-input">
          <label>To</label>
          <input
            type="month"
            onChange={onInputChange}
            value={studyEnd}
            placeholder="End Date"
            name="studyEnd"
          ></input>
        </div>
      </div>
      <CancelSaveButtons
        onCancelClick={() => cancelEvent("educationDisplayed")}
        onSaveClick={saveEvent}
      />
    </div>
  );
};

export default SchoolInfo;

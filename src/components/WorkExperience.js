import DateInput from "./DateInput";
import TextInput from "./TextInput";
import CancelSaveButtons from "./CancelSaveButtons";

const WorkExperience = ({ workData, handleInputChange }) => {
  const { companyName, position, startDate, endDate, responsibilities } = {
    workData,
  };
  return (
    <div className="work-info">
      <div>
        <TextInput
          onChange={handleInputChange}
          value1={companyName}
          category1="Company Name"
          name1="companyName"
          value2={position}
          category2="Position"
          name2="position"
        />
      </div>

      <DateInput
        onChange={handleInputChange}
        value1={startDate}
        name1="startDate"
        value2={endDate}
        name2="endDate"
      />

      <textarea
        className="responsibilities"
        placeholder="Job Description"
        rows="6"
        onChange={handleInputChange}
        value={responsibilities}
        name="responsibilities"
      ></textarea>
      <CancelSaveButtons />
    </div>
  );
};

export default WorkExperience;

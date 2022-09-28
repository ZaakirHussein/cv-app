import React from "react";

const RenderList = (props) => {
  const { educationArr } = props;

  return (
    <div>
      {educationArr.map((education) => {
        return (
          <div className="education-list-item">
            <p className="school-year">
              {education.schoolName}
              <span>{`${education.studyStart} - ${education.studyEnd}`}</span>
            </p>
            <p>{education.major}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RenderList;

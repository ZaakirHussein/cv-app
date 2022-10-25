import React from "react";
import EducationListItem from "./EducationListItem";

function RenderEducationList({ arr, deleteEvent, saveEditEvent }) {
  return (
    <>
      {arr.map(({ schoolName, major, studyStart, studyEnd, id }) => (
        <div key={id}>
          <EducationListItem
            schoolName={schoolName}
            major={major}
            studyStart={studyStart}
            studyEnd={studyEnd}
            id={id}
            arrState={arr}
            deleteEvent={deleteEvent}
            saveEditEvent={saveEditEvent}
          />
        </div>
      ))}
    </>
  );
}

export default RenderEducationList;

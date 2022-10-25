import React, { useState } from "react";
import DisplayEducationObj from "./DisplayEducationObj";
import EditEducationData from "./EditEducationData";

function EducationListItem({
  schoolName,
  major,
  studyStart,
  studyEnd,
  id,
  arrState,
  saveEditEvent,
  deleteEvent,
}) {
  const [showEducationItem, setShowEducationItem] = useState(true);
  const [showEditForm, setShowEditForm] = useState(false);

  const editEducationToggle = () => {
    setShowEducationItem((currentState) => !currentState);
    setShowEditForm((currentState) => !currentState);
  };

  if (showEducationItem) {
    return (
      <DisplayEducationObj
        schoolName={schoolName}
        major={major}
        studyStart={studyStart}
        studyEnd={studyEnd}
        id={id}
        deleteEvent={deleteEvent}
        editObjDisplay={() => {
          editEducationToggle();
        }}
      />
    );
  } else if (showEditForm) {
    return (
      <EditEducationData
        arrState={arrState}
        id={id}
        saveEvent={saveEditEvent}
        cancelEvent={() => {
          editEducationToggle();
        }}
        educationToggle={editEducationToggle}
      />
    );
  }
}

export default EducationListItem;

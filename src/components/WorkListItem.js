import React, { useState } from "react";
import DisplayWorkObj from "./DisplayWorkObj";
import EditWorkData from "./EditWorkData";

function WorkListItem({
  companyName,
  position,
  startDate,
  endDate,
  responsibilities,
  id,
  arrState,
  saveEditEvent,
  deleteEvent,
}) {
  const [showWorkItem, setShowWorkItem] = useState(true);
  const [showEditForm, setShowEditForm] = useState(false);

  const editWorkToggle = () => {
    setShowWorkItem((currentState) => !currentState);
    setShowEditForm((currentState) => !currentState);
  };

  if (showWorkItem) {
    return (
      <DisplayWorkObj
        companyName={companyName}
        position={position}
        startDate={startDate}
        endDate={endDate}
        responsibilities={responsibilities}
        id={id}
        deleteEvent={deleteEvent}
        editObjDisplay={() => {
          editWorkToggle();
        }}
      />
    );
  } else if (showEditForm) {
    return (
      <EditWorkData
        arrState={arrState}
        id={id}
        saveEvent={saveEditEvent}
        cancelEvent={() => {
          editWorkToggle();
        }}
        workToggle={editWorkToggle}
      />
    );
  }
}

export default WorkListItem;

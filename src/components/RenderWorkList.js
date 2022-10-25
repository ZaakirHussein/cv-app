import React from "react";
import WorkListItem from "./WorkListItem";

function RenderWorkList({ arr, deleteEvent, saveEditEvent }) {
  return (
    <>
      {arr.map(
        ({
          companyName,
          position,
          startDate,
          endDate,
          responsibilities,
          id,
        }) => (
          <div key={id}>
            <WorkListItem
              companyName={companyName}
              position={position}
              startDate={startDate}
              endDate={endDate}
              responsibilities={responsibilities}
              id={id}
              arrState={arr}
              deleteEvent={deleteEvent}
              saveEditEvent={saveEditEvent}
            />
          </div>
        )
      )}
    </>
  );
}

export default RenderWorkList;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import DropDownMenu from "./DropDownMenu";

function DisplayWorkObj({
  companyName,
  position,
  startDate,
  endDate,
  responsibilities,
  id,
  deleteEvent,
  editObjDisplay,
}) {
  return (
    <div className="work-list-item">
      <div className="work-left">
        <div className="work-logo">
          <FontAwesomeIcon icon={faBriefcase} id="work-img" />
        </div>

        <div className="work-detail-container">
          <div className="work-detail-header">
            <p id="work-name">{companyName}</p>
            {startDate && endDate && (
              <p>{`${startDate.slice(0, 4)} - ${endDate.slice(0, 4)}`}</p>
            )}
          </div>

          <p id="position">{position}</p>
          <p id="responsibilities"> -{responsibilities}</p>
        </div>
      </div>
      <div className="work-right">
        <DropDownMenu
          deleteObj={() => deleteEvent(id)}
          editObjDisplay={editObjDisplay}
        />
      </div>
    </div>
  );
}

export default DisplayWorkObj;

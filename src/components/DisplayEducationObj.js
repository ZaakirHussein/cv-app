import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import DropDownMenu from "./DropDownMenu";

function DisplayEducationObj({
  schoolName,
  major,
  studyStart,
  studyEnd,
  id,
  deleteEvent,
  editObjDisplay,
}) {
  return (
    <div className="education-list-item">
      <div className="education-left">
        <div className="grad-logo">
          <FontAwesomeIcon icon={faGraduationCap} id="grad-img" />
        </div>

        <div className="school-detail-container">
          <div className="school-detail-header">
            <p id="school-name">{schoolName}</p>
            {studyStart && studyEnd && (
              <p>{`${studyStart.slice(0, 4)} - ${studyEnd.slice(0, 4)}`}</p>
            )}
          </div>

          <span id="major">{major}</span>
        </div>
      </div>
      <div className="education-right">
        <DropDownMenu
          deleteObj={() => deleteEvent(id)}
          editObjDisplay={editObjDisplay}
        />
      </div>
    </div>
  );
}

export default DisplayEducationObj;

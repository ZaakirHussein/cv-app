import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AddButton({ handleClick }) {
  return (
    <button className="add-btn" onClick={handleClick}>
      <FontAwesomeIcon icon={faPlus} id="add-icon" />
      <span className="add-text">Add</span>
    </button>
  );
}

export default AddButton;

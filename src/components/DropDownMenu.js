import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

function DropDownMenu({ deleteObj, editObjDisplay }) {
  const [showDropDown, setShowDropDown] = useState(false);
  const node = useRef(null);

  const clickOutsideMenu = (e) => {
    if (node.current && showDropDown && !node.current.contains(e.target)) {
      toggleDropDown();
    }
  };

  const toggleDropDown = () => {
    setShowDropDown((currentState) => !currentState);
  };

  document.addEventListener("mousedown", clickOutsideMenu);

  return (
    <div>
      <div className="ellipsis-storage">
        <button className="ellipsis-btn">
          <FontAwesomeIcon
            icon={faEllipsis}
            id="ellipsis"
            onClick={() => toggleDropDown()}
          />
        </button>
      </div>

      {showDropDown ? (
        <div className="menu" ref={node}>
          <button className="menu-btn" onClick={editObjDisplay}>
            {" "}
            Edit{" "}
          </button>
          <button className="menu-btn" onClick={deleteObj}>
            {" "}
            Delete{" "}
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default DropDownMenu;

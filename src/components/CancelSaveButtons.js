function CancelSaveButtons({ onCancelClick, onSaveClick }) {
  return (
    <div className="btn-row">
      <div className="btn-pair">
        <button className="cancel-btn" onClick={onCancelClick}>
          Cancel
        </button>
        <button className="save-btn" onClick={onSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CancelSaveButtons;

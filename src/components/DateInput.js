function DateInput({ onChange, value1, name1, value2, name2, labelClass }) {
  return (
    <div className="input-pair">
      <div className="label-input">
        <label className={labelClass}>From</label>
        <input
          type="month"
          onChange={onChange}
          value={value1}
          name={name1}
        ></input>
      </div>
      <div className="label-input">
        <label className={labelClass}>To</label>
        <input
          type="month"
          onChange={onChange}
          value={value2}
          name={name2}
        ></input>
      </div>
    </div>
  );
}

export default DateInput;

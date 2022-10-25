function TextInput({
  onChange,
  value1,
  category1,
  name1,
  value2,
  category2,
  name2,
  labelClass,
}) {
  return (
    <div className="input-pair">
      <div className="label-input">
        <label className={labelClass}>{category1}</label>
        <input
          type="text"
          onChange={onChange}
          value={value1}
          name={name1}
          required
        ></input>
      </div>
      <div className="label-input">
        <label className={labelClass}>{category2}</label>
        <input
          type="text"
          onChange={onChange}
          value={value2}
          name={name2}
          required
        ></input>
      </div>
    </div>
  );
}

export default TextInput;

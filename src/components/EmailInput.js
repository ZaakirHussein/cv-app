function EmailInput({
  onChange,
  value1,
  placeholder1,
  name1,
  value2,
  placeholder2,
  name2,
}) {
  return (
    <div className="input-pair">
      <div className="label-input">
        <label className="label-required">{placeholder1}</label>
        <input
          type="email"
          onChange={onChange}
          value={value1}
          name={name1}
        ></input>
      </div>

      <div className="label-input">
        <label className="label-required">{placeholder2}</label>
        <input
          type="email"
          onChange={onChange}
          value={value2}
          name={name2}
        ></input>
      </div>
    </div>
  );
}

export default EmailInput;

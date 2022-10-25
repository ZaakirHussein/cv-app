import React from "react";

function EmailInput({
  onChange,
  emailValue,
  placeholder,
  name,
  confirmEmailValue,
  formErrors,
}) {
  return (
    <div className="input-pair">
      <div className="label-input">
        <label className="label-required">{placeholder}</label>
        <input
          type="email"
          onChange={onChange}
          value={emailValue}
          name={name}
          required
        ></input>
        <p className="error-message">{formErrors.validateEmail}</p>
      </div>

      <div className="label-input">
        <label className="label-required">Confirm your email</label>
        <input
          onChange={onChange}
          value={confirmEmailValue}
          required={emailValue === confirmEmailValue}
          name="confirmEmail"
        ></input>
        <p className="error-message">{formErrors.validateConfirmEmail}</p>
      </div>
    </div>
  );
}

export default EmailInput;

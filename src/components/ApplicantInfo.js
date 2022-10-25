import React from "react";
import TextInput from "./TextInput";
import EmailInput from "./EmailInput";

const ApplicantInfo = ({
  handleSubmit,
  firstName,
  lastName,
  email,
  confirmEmail,
  residence,
  phone,
  handleInputChange,
  formErrors,
}) => {
  return (
    <form className="general-info" id="applicant-form" onSubmit={handleSubmit}>
      <div className="input-pair">
        <TextInput
          onChange={handleInputChange}
          value1={firstName}
          category1="First name"
          name1="firstName"
          value2={lastName}
          category2="Last name"
          name2="lastName"
          labelClass="label-required"
        />
      </div>

      <EmailInput
        onChange={handleInputChange}
        emailValue={email}
        placeholder="Email"
        name="email"
        confirmEmailValue={confirmEmail}
        formErrors={formErrors}
      />
      <div className="input-pair">
        <div className="label-input">
          <label>Place of residence</label>
          <input
            type="text"
            onChange={handleInputChange}
            value={residence}
            name="residence"
          ></input>
        </div>
        <div className="label-input">
          <div className="phone-label">
            <label className="label-required">Phone number</label>
            <span>Format: 123-456-7890</span>
          </div>
          <input
            type="tel"
            onChange={handleInputChange}
            value={phone}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="phone"
            required
          ></input>
        </div>
      </div>
    </form>
  );
};

export default ApplicantInfo;

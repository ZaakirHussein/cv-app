import TextInput from "./TextInput";
import EmailInput from "./EmailInput";

const ApplicantInfo = ({ generalInfo, handleInputChange }) => {
  const { firstName, lastName, email, residence, phone } = { generalInfo };
  return (
    <div className="general-info">
      <div>
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
        value1={email}
        placeholder1="Email"
        name1="email"
        value2={email}
        placeholder2="Confirm your email"
        name2="email"
        labelClass="label-required"
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
          <label className="label-required">Phone number</label>
          <input
            type="tel"
            onChange={handleInputChange}
            value={phone}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="phone"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default ApplicantInfo;

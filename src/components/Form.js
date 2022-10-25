import React from "react";
import ApplicantInfo from "./ApplicantInfo";
import SchoolInfo from "./SchoolInfo";
import WorkExperience from "./WorkExperience";
import AddButton from "./AddButton";
import RenderEducationList from "./RenderEducationList";
import RenderWorkList from "./RenderWorkList";
import SubmitBtn from "./SubmitBtn";

class ApplicationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      confirmEmail: "",
      residence: "",
      phone: "",

      educationArr: [],
      workExperienceArr: [],

      displayController: {
        educationDisplayed: false,
        educationList: false,
        workDisplayed: false,
        workList: false,
      },

      formErrors: {
        validateEmail: "",
        validateConfirmEmail: "",
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleShowDisplay = this.handleShowDisplay.bind(this);
    this.handleHideDisplay = this.handleHideDisplay.bind(this);
    this.handleSaveEducation = this.handleSaveEducation.bind(this);
    this.handleDeleteEducation = this.handleDeleteEducation.bind(this);
    this.handleSaveEditedEducation = this.handleSaveEditedEducation.bind(this);
    this.handleSaveWorkExperience = this.handleSaveWorkExperience.bind(this);
    this.handleDeleteWork = this.handleDeleteWork.bind(this);
    this.handleSaveEditedWork = this.handleSaveEditedWork.bind(this);
    this.validateFormInput = this.validateFormInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleShowDisplay = (category) => {
    this.setState(() => ({
      [category]: true,
    }));
  };

  handleHideDisplay = (category) => {
    this.setState(() => ({
      [category]: false,
    }));
  };

  handleSaveEducation(object) {
    this.setState((previousState) => ({
      educationArr: [...previousState.educationArr, object],
      educationDisplayed: false,
      educationList: true,
    }));
  }

  handleDeleteEducation(id) {
    this.setState(() => ({
      educationArr: this.state.educationArr.filter(
        (schoolObj) => schoolObj.id !== id
      ),
    }));
  }

  handleSaveEditedEducation(arr) {
    this.setState({
      educationArr: arr,
    });
  }

  handleSaveWorkExperience(object) {
    this.setState((previousState) => ({
      workExperienceArr: [...previousState.workExperienceArr, object],
      workDisplayed: false,
      workList: true,
    }));
  }

  handleDeleteWork(id) {
    this.setState(() => ({
      workExperienceArr: this.state.workExperienceArr.filter(
        (workObj) => workObj.id !== id
      ),
    }));
  }

  handleSaveEditedWork(arr) {
    this.setState({
      workExperienceArr: arr,
    });
  }

  handleSubmitApplication(event) {
    event.preventDefault();
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      residence: this.state.residence,
      educationArr: this.state.educationArr,
      workExperienceArr: this.state.workExperienceArr,
    };

    this.props.onComplete(data);
    console.log(data);
  }

  validateFormInput(event) {
    event.preventDefault();
    console.log("hello");

    const formErrors = { ...this.state.someProperty };

    if (!this.state.email && !this.state.confirmEmail) {
      formErrors.validateEmail = "Enter valid email address";
      formErrors.validateConfirmEmail = "Please confirm email address";

      this.setState(
        { formErrors },
        console.log(this.state.email),
        console.log(this.state.confirmEmail)
      );
      return;
    }

    if (!this.state.confirmEmail) {
      formErrors.validateConfirmEmail = "Please confirm email address";
      this.setState({ formErrors }, console.log(this.state.confirmEmail));
      return;
    }

    if (this.state.email !== this.state.confirmEmail) {
      formErrors.validateConfirmEmail = "Both email's must match";

      this.setState(
        { formErrors },
        console.log(this.state.email),
        console.log(this.state.confirmEmail)
      );
      return;
    }

    if (!this.state.confirmEmail) {
      formErrors.validateEmail = "Confirm email should not be empty";

      this.setState({ formErrors }, console.log(this.state.confirmEmail));
      return;
    }

    this.handleSubmitApplication(event);
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      confirmEmail,
      residence,
      phone,
      educationDisplayed,
      workDisplayed,
      educationList,
      educationArr,
      workList,
      workExperienceArr,
      formErrors,
    } = this.state;

    return (
      <div className="cv-body">
        <div className="application-form">
          <div className="form-body" onSubmit={this.handleSubmit}>
            <div className="personal-info-section">
              <h2 className="personal-info-header">Personal Information</h2>
              <ApplicantInfo
                handleSubmit={this.validateFormInput}
                firstName={firstName}
                lastName={lastName}
                email={email}
                confirmEmail={confirmEmail}
                residence={residence}
                phone={phone}
                handleInputChange={this.handleChange}
                formErrors={formErrors}
              />
            </div>
            <div className="school-info-section">
              <div className="school-info-header">
                <h2>Education</h2>
                <AddButton
                  handleClick={() =>
                    this.handleShowDisplay("educationDisplayed")
                  }
                />
              </div>
              {educationDisplayed && (
                <SchoolInfo
                  cancelEvent={this.handleHideDisplay}
                  saveEvent={this.handleSaveEducation}
                />
              )}
              {educationList && (
                <RenderEducationList
                  arr={educationArr}
                  deleteEvent={this.handleDeleteEducation}
                  saveEditEvent={this.handleSaveEditedEducation}
                />
              )}
            </div>
            <div className="work-info-section">
              <div className="work-info-header">
                <h2>Work Experience</h2>
                <AddButton
                  handleClick={() => this.handleShowDisplay("workDisplayed")}
                />
              </div>
              {workDisplayed && (
                <WorkExperience
                  cancelEvent={this.handleHideDisplay}
                  saveEvent={this.handleSaveWorkExperience}
                />
              )}
              {workList && (
                <RenderWorkList
                  arr={workExperienceArr}
                  deleteEvent={this.handleDeleteWork}
                  saveEditEvent={this.handleSaveEditedWork}
                />
              )}
            </div>
            <SubmitBtn />
          </div>
        </div>
      </div>
    );
  }
}

export default ApplicationForm;

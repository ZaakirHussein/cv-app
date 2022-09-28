import React from "react";
import ApplicantInfo from "./ApplicantInfo";
import SchoolInfo from "./SchoolInfo";
import WorkExperience from "./WorkExperience";
import AddButton from "./AddButton";
import RenderList from "./RenderList";

class ApplicationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      applicant: {
        firstName: "",
        lastName: "",
        email: "",
        residence: "",
        phone: "",

        applicantEducation: {
          schoolName: "",
          major: "",
          studyStart: "",
          studyEnd: "",
        },

        applicantWorkExperience: {
          companyName: "",
          position: "",
          description: "",
          startDate: "",
          endDate: "",
          responsibilities: "",
        },

        educationArr: [],
        workExperienceArr: [],
      },

      displayController: {
        educationDisplayed: false,
        educationList: false,
        workDisplayed: false,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickDisplay = this.handleClickDisplay.bind(this);
    this.handleCancelDisplay = this.handleCancelDisplay.bind(this);
    this.handleSaveEducation = this.handleSaveEducation.bind(this);
  }

  // addNewTask = () => {
  //   if (this.state.task.text === "") return;
  //   this.state.tasks.push(this.state.task);
  //   console.log(this.state.tasks);
  // };

  handleSubmit(event) {
    event.preventDefault();
  }

  handleClickDisplay = (category) => {
    this.setState(() => ({
      [category]: true,
    }));
  };

  handleCancelDisplay = (category) => {
    this.setState(() => ({
      [category]: false,
    }));
  };

  handleSaveEducation = (e) => {
    e.preventDefault();

    this.setState({
      educationArr: this.state.applicant.educationArr.concat(
        this.state.applicant.applicantEducation
      ),
      educationDisplayed: false,
      educationList: true,
    });
  };

  handleCancelClick = () => {};

  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      console.log(event.target.name),
      console.log(event.target.value)
    );
  }

  render() {
    const { applicant, educationDisplayed, workDisplayed, educationList } =
      this.state;

    return (
      <div className="cv-body">
        <div className="application-form">
          <form className="form-body" onSubmit={this.handleSubmit}>
            <div className="personal-info-section">
              <h2 className="personal-info-header">Personal Information</h2>
              <ApplicantInfo
                generalInfo={applicant}
                onInputChange={this.handleChange}
              />
            </div>
            <div className="school-info-section">
              <div className="school-info-header">
                <h2>Education</h2>
                <AddButton
                  handleClick={() =>
                    this.handleClickDisplay("educationDisplayed")
                  }
                />
              </div>
              {educationDisplayed && (
                <SchoolInfo
                  schoolData={applicant}
                  onInputChange={this.handleChange}
                  cancelEvent={this.handleCancelDisplay}
                  saveEvent={this.handleSaveEducation}
                />
              )}
              {educationList && <RenderList props={applicant} />}
            </div>
            <div className="work-info-section">
              <div className="work-info-header">
                <h2>Work Experience</h2>
                <AddButton
                  handleClick={() => this.handleClickDisplay("workDisplayed")}
                />
              </div>
              {workDisplayed && (
                <WorkExperience
                  workData={applicant}
                  onInputChange={this.handleChange}
                />
              )}
            </div>
            <button className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ApplicationForm;

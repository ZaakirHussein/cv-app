import React from "react";
import Header from "./Header";
import ThankYou from "../images/ThankYou.png";
import DisplayApplicantContact from "./DisplayApplicantContact";
import DisplayApplicantEducation from "./DisplayApplicantEducation";
import DisplayApplicantWork from "./DisplayApplicantWork";

function DisplayApplicant({ data }) {
  const educationDataExists = data.educationArr;
  const workDataExists = data.workExperienceArr;

  return (
    <div>
      <Header />
      <div className="applicant-preview">
        <div className="applicant-display-info">
          <div className="thankyou-container">
            <img src={ThankYou} alt="thank-you" id="thank-you"></img>
          </div>

          <main className="display-applicant-data">
            <div className="name-container">
              <h1 className="name-display">
                {data.firstName} {data.lastName}
              </h1>
            </div>
            <div className="applicant-top-data">
              <div className="display-applicant-contact">
                <h2>Contact</h2>
                <DisplayApplicantContact
                  email={data.email}
                  phone={data.phone}
                  residence={data.residence}
                />
              </div>
              {educationDataExists.length > 0 && (
                <div className="display-applicant-education">
                  <h2>Education</h2>
                  <DisplayApplicantEducation arr={data.educationArr} />
                </div>
              )}
            </div>
            {workDataExists.length > 0 && (
              <div className="display-applicant-work">
                <h2>Work Experience</h2>
                <DisplayApplicantWork arr={data.workExperienceArr} />
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default DisplayApplicant;

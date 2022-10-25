import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ApplicationForm from "./components/Form";
import DisplayApplicant from "./components/DisplayApplicant";

function App() {
  const [formData, setFormData] = useState();

  return (
    <div className="App">
      {formData ? (
        <DisplayApplicant data={formData} />
      ) : (
        <>
          <Header />
          <ApplicationForm onComplete={(data) => setFormData(data)} />
        </>
      )}
    </div>
  );
}

export default App;

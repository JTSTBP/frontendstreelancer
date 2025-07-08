


import { useState } from "react";
import "./RegistrationPage.css";
 // Add this line to import Popup styles
import Personalcard from "./formcards/personalcard";
import ProfessionalBackgroundCard from "./formcards/professionalcard";
import WorkTrackPreferences from "./formcards/trackcard";
import AvailabilityResources from "./formcards/Aviliablecard";
import PortfolioWorkSamples from "./formcards/portfolio";
import AlmostDone from "./formcards/Almost";
import { useNavigate } from "react-router-dom";
import Backendurl from "../../config"; 
import { personalSchema } from "../../validations/validationSchema";

const steps = [
  "Personal",
  "Background",
  "Work Track",
  "Availability",
  "Portfolio",
  "Complete",
];

function RegistrationPage() {
  const [validationError, setValidationError] = useState("");

  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
  personal: {},
 professional: {},
  availability: {},
  portfolio: {}
});

const validateStep = () => {
  if (currentStep === 0) {
    const { error } = personalSchema.validate(formData.personal, { abortEarly: false });

    if (error) {
const allErrors = error.details[0].message;
      setValidationError(allErrors);

      // Optional: show with toast
      // error.details.forEach(err => toast.error(err.message));
      return false;
    }
  }

  // Future: Add professionalSchema, etc., for other steps

  setValidationError("");
  return true;
};





 const handleNext = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!validateStep()) return;

  if (currentStep < steps.length - 1) {
    setCurrentStep(currentStep + 1);
  }
};


  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };


const handleSubmit = async () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  try {
    const response = await fetch(`${Backendurl}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();



    if (response.ok) {
      setShowPopup(true);
    } else {
      alert("Failed to submit registration.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("An error occurred.");
  }
};


  const handleClose=()=>{
setShowPopup(false)
navigate("/")
  }

  return (
    <div className="register-bg-container">
      <div className="register-container">
        <button className="close-registration-btn" onClick={() => navigate("/")}>
  ✕
</button>

        <h1 className="register-title">Join Streelancer</h1>
        <p className="register-subtitle">
          Complete this 6-step registration to find your perfect work opportunity
        </p>

        {/* Step Indicator */}
        <div className="register-steps-container">
          <div className="register-step-line-full"></div>
          <div
            className="register-step-line-progress"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          ></div>

          <div className="register-steps">
            {steps.map((step, index) => (
              <div className="register-step" key={index}>
                <div
                  className={`register-step-circle ${
                    index < currentStep
                      ? "completed"
                      : index === currentStep
                      ? "active"
                      : ""
                  }`}
                >
                  {index < currentStep ? "✔" : index + 1}
                </div>
                <div className="register-step-label">{step}</div>
              </div>
            ))}
          </div>
        </div>
        {validationError && (
  <div className="validation-error">
    {validationError}
  </div>
)}

        <div className="register-form-content">{renderStepContent(currentStep,formData, setFormData)}</div>

        <div className="register-button-group">
          {currentStep > 0 && (
            <button className="register-back-btn" onClick={handleBack}>
              Back
            </button>
          )}
          {currentStep === steps.length - 1 ? (
            <button
              className="register-submit-btn"
              onClick={handleSubmit}
            >
              Complete Registration
            </button>
          ) : (
            <button className="register-continue-btn" onClick={handleNext}>
              Continue
            </button>
          )}
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <p>
              Registration completed successfully! We will review your profile and
              be in touch soon.
            </p>
            <button className="close-btn" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function renderStepContent(step,formData, setFormData) {
  switch (step) {
    case 0:
      return <Personalcard formData={formData} setFormData={setFormData}/>;
    case 1:
      return <ProfessionalBackgroundCard formData={formData} setFormData={setFormData} />;
    case 2:
      return <WorkTrackPreferences formData={formData} setFormData={setFormData} />;
    case 3:
      return <AvailabilityResources formData={formData} setFormData={setFormData} />;
    case 4:
      return <PortfolioWorkSamples formData={formData} setFormData={setFormData} />;
    case 5:
      return <AlmostDone formData={formData} setFormData={setFormData} />;
    default:
      return null;
  }
}

export default RegistrationPage;

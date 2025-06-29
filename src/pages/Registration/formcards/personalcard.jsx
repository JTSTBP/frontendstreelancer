
import "./formcard.css";


const Personalcard = ({ formData, setFormData }) => {

const deiOptions = [
  { key: "woman", label: "Woman" },
  { key: "bipoc", label: "BIPOC" },
  { key: "disability", label: "Person with disability" },
  { key: "caregiver", label: "Caregiver" },
  { key: "veteran", label: "Veteran" },
  { key: "lgbtq", label: "LGBTQ+" }
];


const handleChange = (e) => {
  const { name, type, checked, value } = e.target;

  // For DEI checkboxes
  if (type === "checkbox" && name.startsWith("dei_")) {
    const identity = name.replace("dei_", "");
    setFormData((prev) => {
      const currentList = prev.personal.deiIdentities || [];
      return {
        ...prev,
        personal: {
          ...prev.personal,
          deiIdentities: checked
            ? [...currentList, identity]
            : currentList.filter((item) => item !== identity)
        }
      };
    });
  } 
  // For regular checkboxes like 'careerBreak'
  else if (type === "checkbox") {
    setFormData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [name]: checked
      }
    }));
  } 
  // For text, email, select, etc.
  else {
    setFormData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [name]: value
      }
    }));
  }
};


  return (
    <div className="registration-form-container">
      <h2>Personal & Identity Details</h2>
      <form className="registration-form">
        <div className="form-row">
           
          <input  type="text"
            name="firstName"
            placeholder="First name"
            value={formData.personal.firstName || ""}
            onChange={handleChange} />
          <input  type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.personal.lastName || ""}
            onChange={handleChange} />
        </div>

        <div className="form-row">
          <input  type="email"
            name="email"
            placeholder="Email Address"
            value={formData.personal.email || ""}
            onChange={handleChange} />
          <input type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.personal.phone || ""}
            onChange={handleChange} />
        </div>

        <div className="form-row">
          <select             name="gender"
            value={formData.personal.gender || ""}
            onChange={handleChange}
>
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

     
        <div className="form-row">
  <label className="switch">
    <input type="checkbox"
              name="careerBreak"
              checked={formData.personal.careerBreak || false}
              onChange={handleChange} />
    <span className="slider"></span>
  </label>
  <span>I’ve taken a career break of 6+ months</span>
</div>

        <div className="form-row">
          <select  name="country"
            value={formData.personal.country || ""}
            onChange={handleChange}>
            <option value="">Country</option>
            <option value="IN">India</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            {/* Add more countries here */}
          </select>
          <input  type="text"
            name="city"
            placeholder="City"
            value={formData.personal.city || ""}
            onChange={handleChange} />
        </div>

        <div className="form-row dei-info">
          <label>DEI Identity (optional)</label>
          <small>Select all that apply. This information helps us connect you with inclusive opportunities.</small>
        </div>

       <div className="form-row checkbox-grid">
  {deiOptions.map((option) => (
    <label key={option.key}>
      <input
        type="checkbox"
        name={`dei_${option.key}`}
        checked={
          formData.personal.deiIdentities?.includes(option.key) || false
        }
        onChange={handleChange}
      />
      {option.label}
    </label>
  ))}
</div>
      </form>
    </div>
  );
};

export default Personalcard;

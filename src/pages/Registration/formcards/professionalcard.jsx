
import React from "react";
import "./formcard.css";

const ProfessionalBackgroundCard = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      professional: {
        ...prev.professional,
        [name]: value,
      },
    }));
  };

  const handleRoleChange = (index, value) => {
    const updatedRoles = [...(formData.professional.roles || [])];
    updatedRoles[index] = value;

    // Filter out empty strings and update formData
    const cleanedRoles = updatedRoles.filter((role) => role.trim() !== "");

    setFormData((prev) => ({
      ...prev,
      professional: {
        ...prev.professional,
        roles: cleanedRoles,
      },
    }));
  };
  const handleCheckboxList = (listName, value) => {
    const currentList = formData.professional[listName] || [];
    const updatedList = currentList.includes(value)
      ? currentList.filter((item) => item !== value)
      : [...currentList, value];

    setFormData((prev) => ({
      ...prev,
      professional: {
        ...prev.professional,
        [listName]: updatedList,
      },
    }));
  };

  const industries = [
    "Technology",
    "Healthcare",
    "Retail & E-commerce",
    "Manufacturing",
    "Finance & Banking",
    "Education",
    "Marketing & Advertising",
    "Consulting",
  ];

  const skills = [
    "Microsoft Office",
    "Google Workspace",
    "Figma",
    "Adobe Creative Suite",
    "WordPress",
    "Slack",
    "Jira",
    "Salesforce",
    "Programming",
  ];

  return (
    <div className="registration-form-container">
      <h2 className="form-title">Professional Background</h2>
      <form className="registration-form">
        {/* Education Level */}
        <div className="form-row">
          <select
            id="education"
            name="education"
            className="form-select"
            value={formData.professional?.education || ""}
            onChange={handleChange}
          >
            <option value="">Select highest education</option>
            <option value="highschool">High School</option>
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="phd">PhD</option>
          </select>
        </div>

        {/* Past Roles */}
        <div className="dei-info">
          <p>Past Roles</p>
          <small className="sm-dei">List your most recent roles (up to 3)</small>
          <div className="form-row dei-info">
            {[0, 1, 2].map((index) => (
              <input
                key={index}
                type="text"
                placeholder={`Role ${index + 1}`}
                value={formData.professional?.roles?.[index] || ""}
                onChange={(e) => handleRoleChange(index, e.target.value)}
              />
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="dei-info">
          <p className="form-label-link">Industries</p>
          <small className="sm-dei">
            Select all industries you have experience in (up to 3)
          </small>
        </div>
        <div className="checkbox-grid">
          {industries.map((industry) => (
            <label key={industry} className="checkbox-option">
              <input
                type="checkbox"
                checked={
                  formData.professional?.industries?.includes(industry) || false
                }
                onChange={() => handleCheckboxList("industries", industry)}
              />
              {industry}
            </label>
          ))}
        </div>

        {/* Tools & Skills */}
        <div className="dei-info">
          <p className="form-label-link">Tools & Skills</p>
          <small className="sm-dei">
            Select tools and platforms you’re familiar with
          </small>
        </div>
        <div className="checkbox-grid">
          {skills.map((skill) => (
            <label key={skill} className="checkbox-option">
              <input
                type="checkbox"
                checked={
                  formData.professional?.skills?.includes(skill) || false
                }
                onChange={() => handleCheckboxList("skills", skill)}
              />
              {skill}
            </label>
          ))}
        </div>
      </form>
    </div>
  );
};

export default ProfessionalBackgroundCard;

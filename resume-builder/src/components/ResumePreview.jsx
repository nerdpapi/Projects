import React from 'react';

const ResumePreview = ({ formData }) => {
  return (
    <div className="preview">
      <h2>{formData.name}</h2>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      <p>Address: {formData.address}</p>
      <h3>Summary</h3>
      <p>{formData.summary}</p>
      <h3>Skills</h3>
      <ul>
        {formData.skills.split(',').map((skill, idx) => (
          <li key={idx}>{skill.trim()}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResumePreview;

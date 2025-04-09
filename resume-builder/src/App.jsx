import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    skills: '',
  });

  return (
    <div className="app-container">
      <h1>Resume Builder</h1>
      <div className="resume-builder">
        <ResumeForm formData={formData} setFormData={setFormData} />
        <ResumePreview formData={formData} />
      </div>
    </div>
  );
};

export default App;

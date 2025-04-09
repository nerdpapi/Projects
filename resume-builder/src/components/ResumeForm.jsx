import React from 'react';

const ResumeForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="form">
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
      <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
      <textarea name="summary" placeholder="Summary" value={formData.summary} onChange={handleChange} />
      <textarea name="skills" placeholder="Skills (comma separated)" value={formData.skills} onChange={handleChange} />
    </form>
  );
};

export default ResumeForm;

import { useState } from 'react';

const ProviderForm = ({ onSubmit, initialData = null }) => {
  const [formData, setFormData] = useState({
    firstName: initialData?.firstName || '',
    lastName: initialData?.lastName || '',
    organization: initialData?.organization || '',
    email: initialData?.email || '',
    phone: initialData?.phone || '',
    extension: initialData?.extension || '',
    role: initialData?.role || ''
  });

  const prefillTestData = () => {
    setFormData({
      firstName: 'Dr. Sarah',
      lastName: 'Johnson',
      organization: 'Metro Health Center',
      email: 'sarah.johnson@metrohealth.com',
      phone: '555-123-4567',
      extension: '1234',
      role: 'primary-care'
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form-section">
      <div style={{ marginBottom: '20px', textAlign: 'right' }}>
        <button 
          type="button" 
          onClick={prefillTestData}
          style={{
            background: '#6492F9',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          Fill Test Data
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">Your first name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Your last name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="organization">Your organization or employer *</label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Enter manually"
            required
          />
          <div className="form-option">
            <input type="checkbox" id="notApplicable" />
            <label htmlFor="notApplicable">Not applicable</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Your email *</label>
          <div className="input-with-icon">
            <span className="input-icon">✉️</span>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Your office number *</label>
          <div className="phone-input">
            <select className="country-code">
              <option value="+1">🇺🇸 +1</option>
            </select>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="555 555 5555"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="extension">Office extension</label>
          <input
            type="text"
            id="extension"
            name="extension"
            value={formData.extension}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">You are *</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select your role</option>
            <option value="primary-care">Primary Care Physician</option>
            <option value="therapist">Therapist</option>
            <option value="psychiatrist">Psychiatrist</option>
            <option value="case-manager">Case Manager</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button type="submit" className="submit-button">
          Continue to Patient Information
        </button>
      </form>
    </div>
  );
};

export default ProviderForm;
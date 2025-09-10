import { useState } from 'react';

const PatientForm = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    insuranceProvider: '',
    insuranceId: '',
    relationship: ''
  });

  const prefillTestData = () => {
    setFormData({
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@email.com',
      phone: '555-987-6543',
      dob: '1995-03-15',
      insuranceProvider: 'Blue Cross Blue Shield',
      insuranceId: 'BC123456789',
      relationship: 'treating-provider'
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
      <h2>Patient Information</h2>
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
        <div className="form-group">
          <label htmlFor="name">Patient Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Patient Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Patient Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth *</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="insuranceProvider">Insurance Provider</label>
          <input
            type="text"
            id="insuranceProvider"
            name="insuranceProvider"
            value={formData.insuranceProvider}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="insuranceId">Insurance ID/Member ID</label>
          <input
            type="text"
            id="insuranceId"
            name="insuranceId"
            value={formData.insuranceId}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="relationship">Relationship to Patient *</label>
          <select
            id="relationship"
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
            required
          >
            <option value="">Select Relationship</option>
            <option value="treating-provider">Treating Provider</option>
            <option value="referring-provider">Referring Provider</option>
            <option value="case-manager">Case Manager</option>
            <option value="care-coordinator">Care Coordinator</option>
          </select>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          {onBack && (
            <button 
              type="button" 
              onClick={onBack}
              className="submit-button"
              style={{ background: '#718096' }}
            >
              Back
            </button>
          )}
          <button type="submit" className="submit-button">
            Submit Referral
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientForm;
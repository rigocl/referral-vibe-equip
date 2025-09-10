import StepIndicator from './StepIndicator';

function FormSidebar({ step }) {
  const sidebarContent = {
    provider: {
      title: "Referral",
      showIcon: true,
      features: [
        "Quick and secure setup",
        "HIPAA-compliant platform", 
        "Real-time referral tracking",
        "Dedicated care team support"
      ]
    },
    patient: {
      title: "Referral", 
      showIcon: true,
      features: [
        "Confidential and secure",
        "Evidence-based treatment",
        "Family-centered approach", 
        "Insurance coordination"
      ]
    },
    success: {
      title: "Referral Complete",
      showIcon: false,
      features: [
        "Referral confirmation sent",
        "Care team will be in touch",
        "Secure patient portal access",
        "24/7 support available"
      ]
    }
  };

  const content = sidebarContent[step] || sidebarContent.provider;

  return (
    <div className="form-sidebar">
      <div className="sidebar-header">
        {content.showIcon && (
          <div className="sidebar-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="20" stroke="#10b981" strokeWidth="2" fill="none"/>
              <path d="M18 24l6 6 12-12" stroke="#10b981" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        )}
        <h3 className="sidebar-title">{content.title}</h3>
      </div>

      <div className="call-to-action-box">
        <p className="cta-text">Want to learn more before referring? No problem.</p>
        <button className="cta-button">
          <span className="cta-icon">📞</span>
          Request a call with us
        </button>
      </div>

      <StepIndicator currentStep={step} />

      <div className="hipaa-notice">
        <h4 className="hipaa-title">This form is HIPAA-compliant.</h4>
        <p className="hipaa-text">
          Anything you provide is confidential. We won't share it with anyone else.
        </p>
      </div>
    </div>
  );
}

export default FormSidebar;
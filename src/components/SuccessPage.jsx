import { useState } from 'react';

const SuccessPage = ({ providerCode, onStartNewReferral }) => {
  const [copied, setCopied] = useState(false);
  
  const providerLink = `${window.location.origin}${window.location.pathname}?provider=${providerCode}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(providerLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      alert('Failed to copy link. Please copy manually.');
    });
  };

  return (
    <div className="success-message">
      <h2>Referral Submitted Successfully!</h2>
      <p>Thank you for your referral. The patient will be contacted shortly.</p>
      
      <div className="email-confirmation">
        <p>
          <strong>📧 Confirmation Email Sent</strong>
        </p>
        <p>
          A confirmation email with all referral details has been sent to your email address. 
          This includes the patient information, referral details, and next steps for follow-up.
        </p>
      </div>
      
      <div>
        <p><strong>Your personalized referral link:</strong></p>
        <div className="link-container">
          <input 
            type="text" 
            value={providerLink} 
            readOnly 
          />
          <button 
            type="button" 
            onClick={copyToClipboard}
            className={`copy-button ${copied ? 'copied' : ''}`}
          >
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
        <p className="link-note">
          Save this link to skip provider information on future referrals.
        </p>
      </div>

      <button 
        type="button"
        onClick={onStartNewReferral}
        className="submit-button"
        style={{ marginTop: '20px', maxWidth: '300px' }}
      >
        Start New Referral
      </button>
    </div>
  );
};

export default SuccessPage;
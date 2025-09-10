function StepIndicator({ currentStep }) {
  const steps = [
    { id: 'provider', number: 1, title: 'Your information', isCompleted: false },
    { id: 'patient', number: 2, title: 'Referred patient information', isCompleted: false },
    { id: 'contact', number: 3, title: 'Contact information', isCompleted: false },
    { id: 'review', number: 4, title: 'Review', isCompleted: false }
  ];

  const getCurrentStepIndex = () => {
    switch (currentStep) {
      case 'provider': return 0;
      case 'patient': return 1;
      case 'success': return 3;
      default: return 0;
    }
  };

  const currentStepIndex = getCurrentStepIndex();

  // Mark completed steps
  steps.forEach((step, index) => {
    if (index < currentStepIndex) {
      step.isCompleted = true;
    }
  });

  return (
    <div className="step-indicator">
      {steps.map((step, index) => (
        <div 
          key={step.id} 
          className={`step-item ${index === currentStepIndex ? 'active' : ''} ${step.isCompleted ? 'completed' : ''}`}
        >
          <div className="step-circle">
            {step.isCompleted ? (
              <span className="step-check">✓</span>
            ) : (
              <span className="step-number">{step.number}</span>
            )}
          </div>
          <span className="step-title">{step.title}</span>
        </div>
      ))}
    </div>
  );
}

export default StepIndicator;
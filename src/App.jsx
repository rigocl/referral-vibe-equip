import { useState, useEffect } from 'react';
import Header from './components/Header';
import FormSidebar from './components/FormSidebar';
import ProviderForm from './components/ProviderForm';
import PatientForm from './components/PatientForm';
import SuccessPage from './components/SuccessPage';
import { useUrlParams } from './hooks/useUrlParams';
import { storeProvider, getProviderByCode, storeReferral } from './utils/storage';

const STEPS = {
  PROVIDER: 'provider',
  PATIENT: 'patient',
  SUCCESS: 'success'
};

function App() {
  const { params } = useUrlParams();
  const [currentStep, setCurrentStep] = useState(STEPS.PROVIDER);
  const [providerData, setProviderData] = useState(null);
  const [isReturningProvider, setIsReturningProvider] = useState(false);
  const [providerCode, setProviderCode] = useState(null);

  useEffect(() => {
    if (params.provider) {
      const provider = getProviderByCode(params.provider);
      if (provider) {
        setProviderData(provider);
        setIsReturningProvider(true);
        setCurrentStep(STEPS.PATIENT);
      }
    }
  }, [params.provider]);

  const handleProviderSubmit = (data) => {
    setProviderData(data);
    setCurrentStep(STEPS.PATIENT);
  };

  const handlePatientSubmit = (patientData) => {
    const code = storeProvider(providerData);
    setProviderCode(code);

    const referralData = {
      provider: providerData,
      patient: patientData,
      providerCode: code
    };

    storeReferral(referralData);
    setCurrentStep(STEPS.SUCCESS);
  };

  const handleBackToProvider = () => {
    setCurrentStep(STEPS.PROVIDER);
  };

  const handleStartNewReferral = () => {
    setCurrentStep(STEPS.PATIENT);
    setProviderData(providerData);
  };

  const resetForm = () => {
    setCurrentStep(STEPS.PROVIDER);
    setProviderData(null);
    setIsReturningProvider(false);
    setProviderCode(null);
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="container">
          <header className="page-header">
            <h1>Equip Patient Referral System</h1>
            {isReturningProvider && providerData && currentStep !== STEPS.SUCCESS && (
              <div className="welcome-message">
                <h2>Welcome back, {providerData.name}!</h2>
              </div>
            )}
          </header>

          <div className="form-layout">
            <div className="form-content">
              {currentStep === STEPS.PROVIDER && (
                <ProviderForm
                  onSubmit={handleProviderSubmit}
                  initialData={providerData}
                />
              )}

              {currentStep === STEPS.PATIENT && (
                <PatientForm
                  onSubmit={handlePatientSubmit}
                  onBack={!isReturningProvider ? handleBackToProvider : null}
                />
              )}

              {currentStep === STEPS.SUCCESS && (
                <SuccessPage
                  providerCode={providerCode}
                  onStartNewReferral={handleStartNewReferral}
                />
              )}
            </div>

            <FormSidebar step={currentStep} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
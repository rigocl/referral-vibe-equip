export const generateProviderCode = (email) => {
  return btoa(email).replace(/[^a-zA-Z0-9]/g, '').substring(0, 10);
};

export const storeProvider = (providerData) => {
  const providers = getStoredProviders();
  const providerCode = generateProviderCode(providerData.email);
  
  const provider = {
    ...providerData,
    code: providerCode,
    dateAdded: new Date().toISOString()
  };

  providers[providerData.email] = provider;
  localStorage.setItem('referralProviders', JSON.stringify(providers));
  
  return providerCode;
};

export const getStoredProviders = () => {
  const stored = localStorage.getItem('referralProviders');
  return stored ? JSON.parse(stored) : {};
};

export const getProviderByCode = (code) => {
  const providers = getStoredProviders();
  return Object.values(providers).find(provider => provider.code === code);
};

export const storeReferral = (referralData) => {
  const referrals = JSON.parse(localStorage.getItem('referrals') || '[]');
  const referral = {
    ...referralData,
    id: Date.now(),
    dateSubmitted: new Date().toISOString()
  };
  
  referrals.push(referral);
  localStorage.setItem('referrals', JSON.stringify(referrals));
  
  return referral;
};
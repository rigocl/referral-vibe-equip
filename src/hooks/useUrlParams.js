import { useState, useEffect } from 'react';

export const useUrlParams = () => {
  const [params, setParams] = useState({});

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramObj = {};
    
    for (const [key, value] of urlParams.entries()) {
      paramObj[key] = value;
    }
    
    setParams(paramObj);
  }, []);

  const updateUrl = (newParams) => {
    const url = new URL(window.location);
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        url.searchParams.set(key, value);
      } else {
        url.searchParams.delete(key);
      }
    });
    
    window.history.pushState({}, '', url);
    setParams(newParams);
  };

  return { params, updateUrl };
};
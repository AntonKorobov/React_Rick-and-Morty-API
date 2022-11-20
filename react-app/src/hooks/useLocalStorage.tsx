import { useState, useEffect } from 'react';

const getSavedValue = (key: string, initialValue: string) => {
  const savedValue = JSON.parse(localStorage.getItem(key) || '');
  if (savedValue) return savedValue;
  else return initialValue;
};

export function useLocalStorage(key: string, initialValue: string) {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue] as const;
}

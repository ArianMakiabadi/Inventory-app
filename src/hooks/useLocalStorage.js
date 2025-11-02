import { useState } from "react";

export default function useLocalStorage(key, initialState) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialState;
  });

  const setAndStoreValue = (newValue) => {
    try {
      const valueToStore =
        newValue instanceof Function ? newValue(value) : newValue;

      setValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Failed to save to localStorage:", error);
    }
  };

  return { value, setValue: setAndStoreValue };
}

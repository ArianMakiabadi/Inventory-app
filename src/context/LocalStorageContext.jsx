import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const LocalStorageContext = createContext();

export function LocalStorageProvider({ children }) {
  const { value: categories, setValue: setCategories } = useLocalStorage(
    "category",
    []
  );
  const { value: products, setValue: setProducts } = useLocalStorage(
    "products",
    []
  );

  return (
    <LocalStorageContext.Provider
      value={{ categories, setCategories, products, setProducts }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
}

export function useLocalStorageContext() {
  return useContext(LocalStorageContext);
}

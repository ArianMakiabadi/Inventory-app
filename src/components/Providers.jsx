import { DarkModeProvider } from "../context/DarkModeContext";
import { LocalStorageProvider } from "../context/LocalStorageContext";

function Providers({ children }) {
  return (
    <DarkModeProvider>
      <LocalStorageProvider>{children}</LocalStorageProvider>
    </DarkModeProvider>
  );
}

export default Providers;

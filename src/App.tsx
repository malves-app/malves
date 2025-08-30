import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/malves/LandingPage";
import NomeIAPage from "./pages/nomeia/NomeIAPage";
import PrivacyPolicyPage from "./pages/malves/PrivacyPolicyPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/nomeia" element={<NomeIAPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
      </Routes>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1f2937",
            color: "#fff",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#fff",
            },
          },
        }}
      />
    </Router>
  );
}

export default App;

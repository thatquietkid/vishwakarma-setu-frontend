import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginPage";
import SignUpPage from "./components/pages/SignUpPage";

import AboutPage from "./components/pages/AboutPage.jsx";
import CareerPage from "./components/pages/CareerPage.jsx";
import PressPage from "./components/pages/Presspage.jsx";
import ContactPage from "./components/pages/ContactPage.jsx";
import FAQPage from "./components/pages/FAQPage.jsx";
import ShippingPage from "./components/pages/ShippingPage.jsx";
import PrivacyPolicyPage from "./components/pages/PrivacyPolicyPage.jsx";
import TermsPage from "./components/pages/Termspage.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/machines/:id" element={<MachineListingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/press" element={<PressPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </div>
  );
}

export default App;

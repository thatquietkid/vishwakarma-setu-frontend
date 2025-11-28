import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-lg">How we collect and use user data.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PrivacyPolicyPage;

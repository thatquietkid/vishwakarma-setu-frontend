import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We are the trusted marketplace for verified industrial machinery...
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;

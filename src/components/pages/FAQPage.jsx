import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">FAQ</h1>
          <p className="text-lg">Find answers to common questions.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FAQPage;

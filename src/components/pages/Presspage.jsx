import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

function PressPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Press</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Media resources, coverage, and company updates.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PressPage;

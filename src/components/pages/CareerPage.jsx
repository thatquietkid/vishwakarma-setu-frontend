import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

function CareerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Careers</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Join our fast-growing team and build the future of industrial commerce.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CareerPage;

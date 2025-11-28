import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            If you have any questions, feel free to reach out. We’ll get back to you as soon as possible.
          </p>

          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <p>Email: <span className="font-semibold">support@setu.com</span></p>
            <p>Phone: <span className="font-semibold">+91 9876543210</span></p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ContactPage;

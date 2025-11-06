import React from 'react';

function TrustSection() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark">Why Choose Vishwakarma Setu?</h2>
          <p className="mt-4 text-lg text-secondary dark:text-gray-400">Your trusted partner in acquiring reliable industrial machinery.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary dark:bg-accent/20 dark:text-accent">
              <span className="material-symbols-outlined !text-3xl">verified_user</span>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-text-light dark:text-text-dark">Thorough Vetting Process</h3>
            <p className="mt-2 text-base text-secondary dark:text-gray-400">Every machine is inspected and verified by our experts to ensure quality and performance, giving you peace of mind.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary dark:bg-accent/20 dark:text-accent">
              <span className="material-symbols-outlined !text-3xl">lock</span>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-text-light dark:text-text-dark">Secure Transactions</h3>
            <p className="mt-2 text-base text-secondary dark:text-gray-400">We provide a secure platform with transparent payment processes, protecting both buyers and sellers at every step.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary dark:bg-accent/20 dark:text-accent">
              <span className="material-symbols-outlined !text-3xl">support_agent</span>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-text-light dark:text-text-dark">Expert Support</h3>
            <p className="mt-2 text-base text-secondary dark:text-gray-400">Our dedicated support team is here to assist you with everything from initial inquiry to final delivery and installation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
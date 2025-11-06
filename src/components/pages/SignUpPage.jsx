import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUpPage() {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ companyName, email, password, confirmPassword, agreedToTerms });
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center group/design-root overflow-x-hidden p-4 bg-background-light dark:bg-background-dark font-display text-text-light dark:text-gray-200">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 p-6 md:p-10">
        <Link to="/" className="flex items-center gap-4 text-text-light dark:text-white">
          <div className="size-8 text-accent">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              {/* ... SVG Path ... */}
              <g clipPath="url(#clip0_6_543)">
                <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
                <path clipRule="evenodd" d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z" fill="currentColor" fillRule="evenodd"></path>
              </g>
              <defs><clipPath id="clip0_6_543"><rect fill="white" height="48" width="48"></rect></clipPath></defs>
            </svg>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">Vishwakarma Setu</h2>
        </Link>
      </header>

      <main className="w-full max-w-lg mx-auto py-24">
        <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm border border-gray-300/50 dark:border-gray-700/50 p-6 sm:p-10">
          {/* Page Heading */}
          <div className="text-center mb-8">
            <p className="text-text-light dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Create a Secure Account</p>
            <p className="text-secondary dark:text-gray-400 text-base font-normal leading-normal mt-2">Join the trusted marketplace for industrial machinery.</p>
          </div>
          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Company Name */}
            <div className="flex flex-col">
              <label className="text-text-light dark:text-gray-300 text-sm font-medium leading-normal pb-2" htmlFor="company-name">Company Name</label>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-accent/50 border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800/50 focus:border-accent/70 h-12 placeholder:text-secondary/80 dark:placeholder:text-gray-500 p-3 text-base font-normal leading-normal"
                id="company-name"
                placeholder="Enter your company's name"
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            {/* Email Address */}
            <div className="flex flex-col">
              <label className="text-text-light dark:text-gray-300 text-sm font-medium leading-normal pb-2" htmlFor="email">Business Email Address</label>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-accent/50 border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800/50 focus:border-accent/70 h-12 placeholder:text-secondary/80 dark:placeholder:text-gray-500 p-3 text-base font-normal leading-normal"
                id="email"
                placeholder="Enter your business email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Create Password */}
            <div className="flex flex-col">
              <label className="text-text-light dark:text-gray-300 text-sm font-medium leading-normal pb-2" htmlFor="password">Create Password</label>
              <div className="relative flex w-full flex-1 items-stretch">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-r-none border-r-0 text-text-light dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-accent/50 focus:z-10 border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800/50 focus:border-accent/70 h-12 placeholder:text-secondary/80 dark:placeholder:text-gray-500 p-3 pr-2 text-base font-normal leading-normal"
                  id="password"
                  placeholder="Enter a secure password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="text-secondary dark:text-gray-400 flex border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800/50 items-center justify-center px-3 rounded-r-lg border-l-0 hover:bg-gray-100 dark:hover:bg-gray-700"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined text-xl">
                    {showPassword ? 'visibility' : 'visibility_off'}
                  </span>
                </button>
              </div>
            </div>
            {/* Confirm Password */}
            <div className="flex flex-col">
              <label className="text-text-light dark:text-gray-300 text-sm font-medium leading-normal pb-2" htmlFor="confirm-password">Confirm Password</label>
              <div className="relative flex w-full flex-1 items-stretch">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-r-none border-r-0 text-text-light dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-accent/50 focus:z-10 border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800/50 focus:border-accent/70 h-12 placeholder:text-secondary/80 dark:placeholder:text-gray-500 p-3 pr-2 text-base font-normal leading-normal"
                  id="confirm-password"
                  placeholder="Re-enter your password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  className="text-secondary dark:text-gray-400 flex border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800/50 items-center justify-center px-3 rounded-r-lg border-l-0 hover:bg-gray-100 dark:hover:bg-gray-700"
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <span className="material-symbols-outlined text-xl">
                    {showConfirmPassword ? 'visibility' : 'visibility_off'}
                  </span>
                </button>
              </div>
            </div>
            {/* Terms & Conditions */}
            <div className="flex items-center gap-3 pt-2">
              <input
                className="form-checkbox h-5 w-5 rounded border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800 text-accent focus:ring-2 focus:ring-accent/50"
                id="terms"
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
              />
              <label className="text-sm text-secondary dark:text-gray-400" htmlFor="terms">
                I agree to the
                <a className="font-medium text-accent hover:underline" href="#"> Terms &amp; Conditions</a> and
                <a className="font-medium text-accent hover:underline" href="#"> Privacy Policy</a>.
              </label>
            </div>
            {/* Sign Up Button */}
            <div className="pt-2">
              <button
                className="w-full flex items-center justify-center rounded-lg bg-accent h-12 px-6 text-base font-bold text-white shadow-sm hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 dark:ring-offset-background-dark transition-colors duration-200"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
          {/* Login Link */}
          <div className="text-center mt-8">
            <p className="text-sm text-secondary dark:text-gray-400">
              Already have an account?
              <Link className="font-bold text-accent hover:underline ml-1" to="/login">Log In</Link>
            </p>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="absolute bottom-0 w-full p-6 text-center">
        <p className="text-sm text-secondary dark:text-gray-500">© 2024 Vishwakarma Setu. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SignUpPage;
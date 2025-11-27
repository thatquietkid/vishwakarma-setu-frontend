import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
// import { useAuth } from '../../context/AuthContext';

function SignUpPage() {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('buyer'); // Default role
  const [gstin, setGstin] = useState('');    // New GSTIN state
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // State for loading and errors
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Helper to handle GSTIN input (uppercase, alphanumeric only)
  const handleGstinChange = (e) => {
    const value = e.target.value.toUpperCase();
    // Allow only alphanumeric characters (letters and digits)
    if (/^[A-Z0-9]*$/.test(value) && value.length <= 15) {
      setGstin(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    // --- Frontend Validation (Updated) ---

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!agreedToTerms) {
      setError("You must agree to the terms and conditions.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    
    // 1. GSTIN LENGTH VALIDATION
    if (gstin.length !== 15) {
      setError("GSTIN must be exactly 15 alphanumeric characters.");
      return;
    }
    // 2. GSTIN FORMAT VALIDATION (Basic alphanumeric check)
    if (!/^[A-Z0-9]{15}$/.test(gstin)) {
        setError("Invalid GSTIN format. Must be 15 uppercase alphanumeric characters.");
        return;
    }
    // --- End of Frontend Validation ---

    setLoading(true);

    try {
      // API endpoint for registration
      const apiUrl = "http://localhost:1325/auth/register";

      // Payload matching the requested snake_case format
      const payload = {
        company_name: companyName,
        email: email,
        password: password,
        role: role,
        gstin: gstin
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        // Dynamic Error Handling
        setError(data.error || 'Registration failed. Please try again.');
        setLoading(false);
      } else {
        // Success!
        console.log('Registration successful:', data);
        setLoading(false);
        navigate('/login');
      }

    } catch (err) {
      // Handle network errors
      console.error('Fetch error:', err);
      setError('Could not connect to the server. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-gray-200 min-h-screen flex flex-col">
      <Navbar />

      <main className="w-full max-w-lg mx-auto py-12 flex-grow">
        <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm border border-gray-300/50 dark:border-gray-700/50 p-6 sm:p-10">
          
          {/* Page Heading */}
          <div className="text-center mb-8">
            <p className="text-text-light dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Create a Secure Account</p>
            <p className="text-secondary dark:text-gray-400 text-base font-normal leading-normal mt-2">Join the trusted marketplace for industrial machinery.</p>
          </div>
          
          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            
            {/* Error Message Display (Prominent Red Alert) */}
            {error && (
              <div className="relative p-3 rounded-lg bg-red-600 text-white border border-red-700 dark:bg-red-800 dark:border-red-900 shadow-md">
                <p>{error}</p>
              </div>
            )}
            
            {/* Role Selection */}
            <div className="flex flex-col">
              <label className="text-text-light dark:text-gray-300 text-sm font-medium leading-normal pb-2" htmlFor="role">Account Type</label>
              <select
                className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-accent/50 border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800/50 focus:border-accent/70 h-12 p-3 text-base font-normal leading-normal"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
                <option value="partner">Partner</option>
              </select>
            </div>

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
                required
              />
            </div>

            {/* GSTIN Field (Updated) */}
            <div className="flex flex-col">
              <label className="text-text-light dark:text-gray-300 text-sm font-medium leading-normal pb-2" htmlFor="gstin">GSTIN (15 Digits/Letters)</label>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-accent/50 border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800/50 focus:border-accent/70 h-12 placeholder:text-secondary/80 dark:placeholder:text-gray-500 p-3 text-base font-normal leading-normal uppercase"
                id="gstin"
                placeholder="e.g. 29ABCDE1234F1Z5"
                type="text"
                maxLength={15}
                value={gstin}
                onChange={handleGstinChange} // Use new handler
                required
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
                required
              />
            </div>

            {/* Create Password */}
            <div className="flex flex-col">
              <label className="text-text-light dark:text-gray-300 text-sm font-medium leading-normal pb-2" htmlFor="password">Create Password</label>
              <div className="relative flex w-full flex-1 items-stretch">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-r-none border-r-0 text-text-light dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-accent/50 focus:z-10 border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800/50 focus:border-accent/70 h-12 placeholder:text-secondary/80 dark:placeholder:text-gray-500 p-3 pr-2 text-base font-normal leading-normal"
                  id="password"
                  placeholder="Enter a secure password (min. 8 chars)"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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
                  required
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
                required
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
                className="w-full flex items-center justify-center rounded-lg bg-accent h-12 px-6 text-base font-bold text-white shadow-sm hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 dark:ring-offset-background-dark transition-colors duration-200 disabled:opacity-50"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Signing Up...' : 'Sign Up'}
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

      <Footer />
    </div>
  );
}

export default SignUpPage;
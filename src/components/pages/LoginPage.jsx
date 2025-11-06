import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      <div className="flex h-full min-h-screen grow flex-col">
        <div className="flex flex-1">
          <div className="flex w-full flex-wrap">
            {/* Left Side Image Panel */}
            <div className="relative hidden w-1/2 flex-col items-center justify-center bg-gray-900 lg:flex">
              <img
                alt="Modern industrial machinery in a clean factory setting"
                className="absolute inset-0 h-full w-full object-cover opacity-30"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlfaRKVBp66fDGIMS99TV1g5slwRxG4vUAV_N9nUaG--IXZcyG16kI1mUw8xgFdsXLgQNMXiFLzXzjwyYoX4vF3t6ioeRbdagJfrVO6NIuc2s8LK_r0lGuZ9PZOPRc2HfsY0fdQvQ55FFf9L_7uWh40JWUPeSkvPpr72dCuNcfyySFats158pBzDcvp9rLpK5_tgYTSoPJKzvUespnHTsCj6OvTlPahFG8jymEmXtM4MloVbNhOdbpbeAVXMbCLW5_aTtS072zZA"
              />
              <div className="relative z-10 p-12 text-white">
                <div className="mb-6 flex items-center gap-4">
                  <span className="material-symbols-outlined text-accent text-5xl">
                    settings
                  </span>
                  <h1 className="text-3xl font-bold">Vishwakarma Setu</h1>
                </div>
                <p className="text-lg text-gray-300">
                  The trusted B2B marketplace for verified, used industrial
                  machinery. Powering the growth of MSMEs with reliability and
                  security.
                </p>
              </div>
            </div>

            {/* Right Side Login Form */}
            <div className="flex w-full flex-1 flex-col items-center justify-center bg-background-light px-4 py-12 dark:bg-background-dark lg:w-1/2">
              <div className="flex w-full max-w-md flex-col items-center">
                
                {/* Mobile Header */}
                <div className="mb-8 w-full text-center lg:hidden">
                  <div className="mb-4 flex items-center justify-center gap-3">
                    <span className="material-symbols-outlined text-accent text-4xl">
                      settings
                    </span>
                    <h1 className="text-2xl font-bold text-text-light dark:text-text-dark">
                      Vishwakarma Setu
                    </h1>
                  </div>
                </div>

                <div className="w-full">
                  <h1 className="mb-2 text-center text-3xl font-bold tracking-tight text-text-light dark:text-text-dark md:text-left">
                    Log in to your Account
                  </h1>
                  <p className="mb-8 text-center text-secondary dark:text-gray-400 md:text-left">
                    Welcome back! Please enter your details.
                  </p>

                  {/* Form */}
                  <form className="flex w-full flex-col gap-4 py-3">
                    <label className="flex flex-col">
                      <p className="pb-2 text-base font-medium text-text-light dark:text-text-dark">
                        Email Address
                      </p>
                      <div className="relative flex w-full items-center">
                        <span className="material-symbols-outlined pointer-events-none absolute left-3 text-secondary dark:text-gray-400">
                          mail
                        </span>
                        <input
                          className="form-input h-14 w-full flex-1 resize-none overflow-hidden rounded-lg border border-gray-300 bg-background-light p-[15px] pl-12 text-base font-normal leading-normal text-text-light placeholder:text-secondary focus:border-accent focus:outline-0 focus:ring-2 focus:ring-accent/20 dark:border-gray-600 dark:bg-gray-800 dark:text-text-dark dark:placeholder:text-gray-400"
                          placeholder="Enter your email address"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </label>

                    <label className="flex flex-col">
                      <div className="flex items-baseline justify-between">
                        <p className="pb-2 text-base font-medium text-text-light dark:text-text-dark">
                          Password
                        </p>
                        <a
                          className="text-sm font-normal text-secondary underline hover:text-accent dark:text-gray-400 dark:hover:text-accent"
                          href="#"
                        >
                          Forgot Password?
                        </a>
                      </div>
                      <div className="relative flex w-full flex-1 items-stretch">
                        <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-secondary dark:text-gray-400">
                          lock
                        </span>
                        <input
                          className="form-input h-14 w-full flex-1 resize-none overflow-hidden rounded-lg border border-gray-300 bg-background-light p-[15px] pl-12 text-base font-normal leading-normal text-text-light placeholder:text-secondary focus:border-accent focus:outline-0 focus:ring-2 focus:ring-accent/20 dark:border-gray-600 dark:bg-gray-800 dark:text-text-dark dark:placeholder:text-gray-400"
                          placeholder="Enter your password"
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary dark:text-gray-400"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <span className="material-symbols-outlined">
                            {showPassword ? 'visibility' : 'visibility_off'}
                          </span>
                        </button>
                      </div>
                    </label>
                    
                    <div className="flex w-full py-3">
                      <button
                        type="submit"
                        className="flex h-12 min-w-[84px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-accent px-5 text-base font-bold leading-normal tracking-[0.015em] text-white transition-opacity hover:opacity-90"
                      >
                        <span className="truncate">Login</span>
                      </button>
                    </div>
                  </form>

                  <p className="pt-4 text-center text-sm text-secondary dark:text-gray-400">
                    Don't have an account?{' '}
                    {/* Use Link component for navigation */}
                    <Link className="font-bold text-accent underline" to="/signup">
                      Sign Up
                    </Link>
                  </p>
                  <div className="mt-8 border-t border-gray-300 pt-6 dark:border-gray-600">
                    <p className="text-center text-xs text-secondary dark:text-gray-400">
                      By logging in, you agree to our{' '}
                      <a className="underline hover:text-accent" href="#">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a className="underline hover:text-accent" href="#">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
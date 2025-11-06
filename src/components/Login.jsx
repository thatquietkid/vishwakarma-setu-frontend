import React, { useState } from 'react';

function Login() {
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
                src="https://images.unsplash.com/photo-1567942712621-e40e33800933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzczODV8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5fGVufDB8fHx8MTcwMDcxNjc4MHww&ixlib=rb-4.0.3&q=80&w=1080"
              />
              <div className="relative z-10 p-12 text-white">
                <div className="mb-6 flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-5xl">
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
                    <span className="material-symbols-outlined text-primary text-4xl">
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
                  <p className="mb-8 text-center text-subtle-light dark:text-subtle-dark md:text-left">
                    Welcome back! Please enter your details.
                  </p>

                  {/* Form */}
                  <form className="flex w-full flex-col gap-4 py-3">
                    <label className="flex flex-col">
                      <p className="pb-2 text-base font-medium text-text-light dark:text-text-dark">
                        Email Address
                      </p>
                      <div className="relative flex w-full items-center">
                        <span className="material-symbols-outlined pointer-events-none absolute left-3 text-subtle-light dark:text-subtle-dark">
                          mail
                        </span>
                        <input
                          className="form-input h-14 w-full flex-1 resize-none overflow-hidden rounded-lg border border-border-light bg-background-light p-[15px] pl-12 text-base font-normal leading-normal text-text-light placeholder:text-subtle-light focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-border-dark dark:bg-background-dark dark:text-text-dark dark:placeholder:text-subtle-dark"
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
                          className="text-sm font-normal text-subtle-light underline hover:text-primary dark:text-subtle-dark dark:hover:text-primary"
                          href="#"
                        >
                          Forgot Password?
                        </a>
                      </div>
                      <div className="relative flex w-full flex-1 items-stretch">
                        <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-subtle-light dark:text-subtle-dark">
                          lock
                        </span>
                        <input
                          className="form-input h-14 w-full flex-1 resize-none overflow-hidden rounded-lg border border-border-light bg-background-light p-[15px] pl-12 text-base font-normal leading-normal text-text-light placeholder:text-subtle-light focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-border-dark dark:bg-background-dark dark:text-text-dark dark:placeholder:text-subtle-dark"
                          placeholder="Enter your password"
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-subtle-light dark:text-subtle-dark"
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
                        className="flex h-12 min-w-[84px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold leading-normal tracking-[0.015em] text-white transition-opacity hover:opacity-90"
                      >
                        <span className="truncate">Login</span>
                      </button>
                    </div>
                  </form>

                  <p className="pt-4 text-center text-sm text-subtle-light dark:text-subtle-dark">
                    Don't have an account?{' '}
                    <a className="font-bold text-primary underline" href="#">
                      Sign Up
                    </a>
                  </p>
                  <div className="mt-8 border-t border-border-light pt-6 dark:border-border-dark">
                    <p className="text-center text-xs text-subtle-light dark:text-subtle-dark">
                      By logging in, you agree to our{' '}
                      <a className="underline hover:text-primary" href="#">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a className="underline hover:text-primary" href="#">
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

export default Login;
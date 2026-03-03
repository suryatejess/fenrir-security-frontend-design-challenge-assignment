import React from 'react'
import SignupLoginForm from '../components/SignupLoginForm'
import wallpaper from '../assets/freepik_bg.jpg'

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${wallpaper})` }}
      />
      
      {/* Logo */}
      <div className="absolute top-6 left-8 flex items-center gap-2">
        <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-slate-900 rounded-full bg-white-600" />
        </div>
        <span className="text-white text-xl font-semibold">aps</span>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-between px-8 lg:px-16 xl:px-24 py-20">
        {/* Left side - Marketing content */}
        <div className="max-w-xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
            Expert level Cybersecurity{' '}
            <br />
            in <span className="text-teal-400">hours</span> not weeks.
          </h1>

          <div className="mb-12">
            <h2 className="text-white font-semibold text-lg mb-4">What's included</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">
                  Effortlessly spider and map targets to uncover hidden security flaws
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">
                  Deliver high-quality, validated findings in hours, not weeks.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">
                  Generate professional, enterprise-grade security reports automatically.
                </span>
              </li>
            </ul>
          </div>

          {/* Trustpilot */}
          <div className="mt-auto">
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-white font-medium">Trustpilot</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-white text-xl font-bold">Rated 4.5/5.0</span>
              <span className="text-gray-400 text-sm">(100k+ reviews)</span>
            </div>
          </div>
        </div>

        {/* Right side - Signup form */}
        <div className="hidden lg:block">
          <SignupLoginForm />
        </div>
      </div>

      {/* Mobile form - shown below content on smaller screens */}
      <div className="lg:hidden px-8 pb-12">
        <SignupLoginForm />
      </div>
    </div>
  )
}

export default Home

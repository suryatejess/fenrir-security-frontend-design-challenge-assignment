import React, { useState } from 'react'

const SignupLoginForm = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreeToTerms: false,
    rememberMe: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(isLogin ? 'Login submitted:' : 'Signup submitted:', formData)
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      agreeToTerms: false,
      rememberMe: false
    })
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 w-[420px] min-h-[640px] flex flex-col">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
          {isLogin ? 'Log in' : 'Sign up'}
        </h1>
        
        <p className="text-center text-gray-600 mb-6">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            type="button"
            onClick={toggleMode}
            className="text-teal-600 hover:text-teal-700 underline font-medium"
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </p>

        <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
          {/* Form fields container with fixed structure */}
          <div className="space-y-4 flex-1">
            {/* First name - hidden in login mode but takes space */}
            <div className={isLogin ? 'invisible h-0 overflow-hidden' : ''}>
              <input
                type="text"
                name="firstName"
                placeholder="First name*"
                value={formData.firstName}
                onChange={handleChange}
                required={!isLogin}
                disabled={isLogin}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Last name - hidden in login mode but takes space */}
            <div className={isLogin ? 'invisible h-0 overflow-hidden' : ''}>
              <input
                type="text"
                name="lastName"
                placeholder="Last name*"
                value={formData.lastName}
                onChange={handleChange}
                required={!isLogin}
                disabled={isLogin}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Spacer for login mode to push content down */}
            {isLogin && <div className="h-8" />}

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email address*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder={isLogin ? 'Password*' : 'Password (8+ characters)*'}
                value={formData.password}
                onChange={handleChange}
                required
                minLength={isLogin ? undefined : 8}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-700 placeholder-gray-400 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                )}
              </button>
            </div>

            {/* Checkbox row - same height for both modes */}
            <div className="py-2 min-h-[52px]">
              {isLogin ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      id="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                    />
                    <label htmlFor="rememberMe" className="text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-teal-600 hover:text-teal-700 underline">
                    Forgot password?
                  </a>
                </div>
              ) : (
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                    I agree to Aps's{' '}
                    <a href="#" className="text-teal-600 hover:text-teal-700 underline">
                      Terms & Conditions
                    </a>{' '}
                    and acknowledge the{' '}
                    <a href="#" className="text-teal-600 hover:text-teal-700 underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-4 rounded-full transition-colors duration-200 mt-4"
          >
            {isLogin ? 'Log in' : 'Create account'}
          </button>
        </form>

        {/* Social login buttons */}
        <div className="flex gap-3 mt-6">
          <button className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-3 px-4 rounded-full hover:bg-gray-800 transition-colors duration-200">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
            </svg>
          </button>
          
          <button className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 px-4 rounded-full hover:bg-gray-200 transition-colors duration-200 border border-gray-200">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </button>
          
          <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-full hover:bg-blue-700 transition-colors duration-200">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>
        </div>
      </div>
  )
}

export default SignupLoginForm
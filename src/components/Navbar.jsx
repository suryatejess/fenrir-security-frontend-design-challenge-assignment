import React from 'react'

const Navbar = ({ 
  title = 'Scan',
  breadcrumbs = [
    { label: 'Private Assets', href: '#' },
    { label: 'New Scan', href: '#', isActive: true }
  ],
  showExportButton = true,
  showStopButton = true,
  onExportReport = () => console.log('Export Report clicked'),
  onStopScan = () => console.log('Stop Scan clicked'),
  isDarkMode = false
}) => {
  return (
    <nav className={`px-6 py-4 border-b ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
      <div className="flex items-center justify-between">
        {/* Left side - Title and Breadcrumbs */}
        <div className="flex items-center gap-3">
          <h1 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h1>
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm">
            {/* Home icon */}
            <a href="#" className={`${isDarkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </a>
            
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className={isDarkMode ? 'text-gray-600' : 'text-gray-300'}>/</span>
                <a
                  href={crumb.href}
                  className={`hover:underline ${
                    crumb.isActive 
                      ? 'text-teal-500 font-medium' 
                      : isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  {crumb.label}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Action Buttons */}
        <div className="flex items-center gap-3">
          {showExportButton && (
            <button
              onClick={onExportReport}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                isDarkMode 
                  ? 'text-gray-300 bg-gray-800 border border-gray-700 hover:bg-gray-700' 
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Export Report
            </button>
          )}
          
          {showStopButton && (
            <button
              onClick={onStopScan}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                isDarkMode
                  ? 'text-red-400 bg-red-900/30 border border-red-800 hover:bg-red-900/50'
                  : 'text-red-500 bg-red-50 border border-red-200 hover:bg-red-100'
              }`}
            >
              Stop Scan
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
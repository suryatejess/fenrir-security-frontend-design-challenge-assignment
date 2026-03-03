import React from 'react'

const FindingLogCard = ({ finding, isDarkMode = false }) => {
  const getSeverityStyles = (severity) => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return 'bg-red-500 text-white'
      case 'high':
        return 'bg-orange-500 text-white'
      case 'medium':
        return 'bg-yellow-400 text-gray-800'
      case 'low':
        return 'bg-green-500 text-white'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  return (
    <div className={`rounded-xl border p-5 transition-shadow duration-200 ${
      isDarkMode 
        ? 'bg-gray-900 border-gray-700 hover:shadow-lg hover:shadow-black/20' 
        : 'bg-white border-gray-200 hover:shadow-md'
    }`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${getSeverityStyles(finding.severity)}`}
        >
          {finding.severity}
        </span>
        <span className={`text-sm font-mono ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{finding.timestamp}</span>
      </div>

      {/* Title */}
      <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        {finding.title}
      </h3>

      {/* Endpoint */}
      <p className="text-sm text-teal-500 font-mono mb-3">
        {finding.endpoint}
      </p>

      {/* Description */}
      <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        {finding.description}
      </p>
    </div>
  )
}

export default FindingLogCard
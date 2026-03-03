import React from 'react'

const FindingLogCard = ({ finding }) => {
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
    <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${getSeverityStyles(finding.severity)}`}
        >
          {finding.severity}
        </span>
        <span className="text-sm text-gray-400 font-mono">{finding.timestamp}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {finding.title}
      </h3>

      {/* Endpoint */}
      <p className="text-sm text-teal-500 font-mono mb-3">
        {finding.endpoint}
      </p>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed">
        {finding.description}
      </p>
    </div>
  )
}

export default FindingLogCard
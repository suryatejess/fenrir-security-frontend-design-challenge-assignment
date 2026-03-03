import React from 'react'

const ScanRow = ({ scan, isDarkMode = false }) => {
  const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return isDarkMode 
          ? 'bg-green-900/50 text-green-400 border-green-700' 
          : 'bg-green-100 text-green-700 border-green-200'
      case 'scheduled':
        return isDarkMode 
          ? 'bg-gray-700 text-gray-300 border-gray-600' 
          : 'bg-gray-100 text-gray-600 border-gray-200'
      case 'failed':
        return isDarkMode 
          ? 'bg-red-900/50 text-red-400 border-red-700' 
          : 'bg-red-100 text-red-600 border-red-200'
      case 'in progress':
        return isDarkMode 
          ? 'bg-blue-900/50 text-blue-400 border-blue-700' 
          : 'bg-blue-100 text-blue-600 border-blue-200'
      default:
        return isDarkMode 
          ? 'bg-gray-700 text-gray-300 border-gray-600' 
          : 'bg-gray-100 text-gray-600 border-gray-200'
    }
  }

  const getProgressBarColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-teal-500'
      case 'failed':
        return 'bg-red-500'
      case 'in progress':
        return 'bg-blue-500'
      default:
        return 'bg-teal-500'
    }
  }

  const vulnerabilityColors = {
    critical: 'bg-red-500',
    high: 'bg-orange-500',
    medium: 'bg-yellow-400',
    low: 'bg-green-500'
  }

  return (
    <tr className={`border-b transition-colors duration-150 ${
      isDarkMode 
        ? 'border-gray-800 hover:bg-gray-800/50' 
        : 'border-gray-100 hover:bg-gray-50'
    }`}>
      {/* Scan Name */}
      <td className="py-4 px-4">
        <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{scan.name}</span>
      </td>

      {/* Type */}
      <td className="py-4 px-4">
        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{scan.type}</span>
      </td>

      {/* Status */}
      <td className="py-4 px-4">
        <span className={`inline-flex px-3 py-1 text-xs font-medium rounded border ${getStatusStyles(scan.status)}`}>
          {scan.status}
        </span>
      </td>

      {/* Progress */}
      <td className="py-4 px-4">
        <div className="flex items-center gap-3">
          <div className={`w-32 h-2 rounded-full overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div 
              className={`h-full rounded-full ${getProgressBarColor(scan.status)}`}
              style={{ width: `${scan.progress}%` }}
            />
          </div>
          <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{scan.progress}%</span>
        </div>
      </td>

      {/* Vulnerability */}
      <td className="py-4 px-4">
        <div className="flex items-center gap-2">
          {scan.vulnerabilities.critical !== undefined && (
            <span className={`w-8 h-6 flex items-center justify-center text-xs font-medium text-white rounded ${vulnerabilityColors.critical}`}>
              {scan.vulnerabilities.critical}
            </span>
          )}
          {scan.vulnerabilities.high !== undefined && (
            <span className={`w-8 h-6 flex items-center justify-center text-xs font-medium text-white rounded ${vulnerabilityColors.high}`}>
              {scan.vulnerabilities.high}
            </span>
          )}
          {scan.vulnerabilities.medium !== undefined && (
            <span className={`w-8 h-6 flex items-center justify-center text-xs font-medium text-gray-800 rounded ${vulnerabilityColors.medium}`}>
              {scan.vulnerabilities.medium}
            </span>
          )}
          {scan.vulnerabilities.low !== undefined && (
            <span className={`w-8 h-6 flex items-center justify-center text-xs font-medium text-white rounded ${vulnerabilityColors.low}`}>
              {scan.vulnerabilities.low}
            </span>
          )}
        </div>
      </td>

      {/* Last Scan */}
      <td className="py-4 px-4">
        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{scan.lastScan}</span>
      </td>
    </tr>
  )
}

export default ScanRow
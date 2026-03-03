import React from 'react'

const ScanRow = ({ scan }) => {
  const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-700 border-green-200'
      case 'scheduled':
        return 'bg-gray-100 text-gray-600 border-gray-200'
      case 'failed':
        return 'bg-red-100 text-red-600 border-red-200'
      case 'in progress':
        return 'bg-blue-100 text-blue-600 border-blue-200'
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200'
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
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150">
      {/* Scan Name */}
      <td className="py-4 px-4">
        <span className="font-medium text-gray-900">{scan.name}</span>
      </td>

      {/* Type */}
      <td className="py-4 px-4">
        <span className="text-gray-600">{scan.type}</span>
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
          <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full ${getProgressBarColor(scan.status)}`}
              style={{ width: `${scan.progress}%` }}
            />
          </div>
          <span className="text-sm text-gray-600">{scan.progress}%</span>
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
        <span className="text-gray-500 text-sm">{scan.lastScan}</span>
      </td>
    </tr>
  )
}

export default ScanRow
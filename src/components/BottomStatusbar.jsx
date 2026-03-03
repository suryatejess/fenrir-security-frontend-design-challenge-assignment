import React from 'react'

const BottomStatusbar = ({
  subAgents = 0,
  parallelExecutions = 2,
  operations = 1,
  critical = 0,
  high = 0,
  medium = 0,
  low = 0,
  isDarkMode = false
}) => {
  const leftStats = [
    { label: 'Sub-Agents', value: subAgents },
    { label: 'Parallel Executions', value: parallelExecutions },
    { label: 'Operations', value: operations }
  ]

  const severityStats = [
    { label: 'Critical', value: critical, color: 'text-red-500' },
    { label: 'High', value: high, color: 'text-orange-500' },
    { label: 'Medium', value: medium, color: 'text-yellow-500' },
    { label: 'Low', value: low, color: 'text-green-500' }
  ]

  return (
    <div className={`border-t px-6 py-3 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-100 border-gray-200'}`}>
      <div className="flex items-center justify-between">
        {/* Left side - Agent stats */}
        <div className="flex items-center gap-8">
          {leftStats.map((stat, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500" />
              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}: <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{stat.value}</span>
              </span>
            </div>
          ))}
        </div>

        {/* Right side - Severity counts */}
        <div className="flex items-center gap-6">
          {severityStats.map((stat, index) => (
            <span key={index} className={`text-sm font-medium ${stat.color}`}>
              {stat.label}: {stat.value}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BottomStatusbar
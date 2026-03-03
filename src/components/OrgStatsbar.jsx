import React from 'react'

const OrgStatsbar = ({
  orgInfo = {
    org: 'Project X',
    owner: 'Nammagiri',
    totalScans: 100,
    scheduled: 1000,
    rescans: 100,
    failedScans: 100,
    lastUpdated: '10 mins ago'
  },
  severityStats = [
    {
      id: 'critical',
      label: 'Critical Severity',
      count: 86,
      change: '+2%',
      trend: 'up',
      description: 'increase than yesterday'
    },
    {
      id: 'high',
      label: 'High Severity',
      count: 16,
      change: '+0.9%',
      trend: 'up',
      description: 'increase than yesterday'
    },
    {
      id: 'medium',
      label: 'Medium Severity',
      count: 26,
      change: '+0.9%',
      trend: 'down',
      description: 'decrease than yesterday'
    },
    {
      id: 'low',
      label: 'Low Severity',
      count: 16,
      change: '+0.9%',
      trend: 'up',
      description: 'increase than yesterday'
    }
  ],
  isDarkMode = false
}) => {
  const getSeverityIcon = (id) => {
    const darkBg = isDarkMode
    switch (id) {
      case 'critical':
        return (
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${darkBg ? 'bg-red-900/50' : 'bg-red-100'}`}>
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              <line x1="8" y1="8" x2="16" y2="16" stroke="currentColor" strokeWidth="2" />
              <line x1="16" y1="8" x2="8" y2="16" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        )
      case 'high':
        return (
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${darkBg ? 'bg-orange-900/50' : 'bg-orange-100'}`}>
            <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 22h20L12 2zm0 4l7.53 14H4.47L12 6zm-1 6v4h2v-4h-2zm0 6v2h2v-2h-2z" />
            </svg>
          </div>
        )
      case 'medium':
        return (
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${darkBg ? 'bg-yellow-900/50' : 'bg-yellow-100'}`}>
            <svg className="w-4 h-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        )
      case 'low':
        return (
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${darkBg ? 'bg-blue-900/50' : 'bg-blue-100'}`}>
            <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className={`rounded-xl border p-6 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
      {/* Top row - Organization Info */}
      <div className={`flex items-center justify-between pb-4 border-b text-sm ${isDarkMode ? 'border-gray-800' : 'border-gray-100'}`}>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Org:</span>
            <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{orgInfo.org}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Owner:</span>
            <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{orgInfo.owner}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Total Scans:</span>
            <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{orgInfo.totalScans}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Scheduled:</span>
            <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{orgInfo.scheduled}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Rescans:</span>
            <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{orgInfo.rescans}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Failed Scans:</span>
            <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{orgInfo.failedScans}</span>
          </div>
        </div>
        <div className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{orgInfo.lastUpdated}</span>
        </div>
      </div>

      {/* Bottom row - Severity Stats */}
      <div className="grid grid-cols-4 gap-6 pt-4">
        {severityStats.map((stat) => (
          <div key={stat.id} className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</span>
                {getSeverityIcon(stat.id)}
              </div>
              <div className={`text-3xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{stat.count}</div>
              <div className={`text-xs flex items-center gap-1 ${
                stat.trend === 'up' ? 'text-red-500' : 'text-green-500'
              }`}>
                <span>{stat.trend === 'up' ? '↑' : '↓'}</span>
                <span>{stat.change} {stat.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrgStatsbar
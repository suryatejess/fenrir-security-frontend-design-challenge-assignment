import React from 'react'

const CircularProgress = ({ 
  percentage = 0, 
  status = 'In Progress',
  size = 160,
  strokeWidth = 8,
  isDarkMode = false
}) => {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (percentage / 100) * circumference

  const bgFill = isDarkMode ? '#1a2332' : '#1a2332'
  const bgStroke = isDarkMode ? '#2a3444' : '#2a3444'

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill={bgFill}
          stroke={bgStroke}
          strokeWidth={strokeWidth}
        />
        
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#14b8a6"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-500 ease-out"
        />
      </svg>
      
      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-teal-400">{percentage}%</span>
        <span className="text-sm text-gray-400 mt-1">{status}</span>
      </div>
    </div>
  )
}

export default CircularProgress
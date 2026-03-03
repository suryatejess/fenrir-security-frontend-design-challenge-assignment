import React from 'react'

const VerificationLoops = ({ isDarkMode = false }) => {
  return (
    <div className={`h-full flex items-center justify-center p-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <p className={`font-mono text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
        this is verification loops component text
      </p>
    </div>
  )
}

export default VerificationLoops
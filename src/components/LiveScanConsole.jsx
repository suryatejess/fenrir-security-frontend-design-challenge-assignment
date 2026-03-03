import React, { useState } from 'react'
import ActivityLog from './ActivityLog'
import VerificationLoops from './VerificationLoops'
import FindingLog from './FindingLog'

const LiveScanConsole = ({ 
  isRunning = true,
  onClose = () => console.log('Close clicked'),
  onMinimize = () => console.log('Minimize clicked'),
  isDarkMode = false
}) => {
  const [activeTab, setActiveTab] = useState('activity')

  const tabs = [
    { id: 'activity', label: 'Activity Log' },
    { id: 'verification', label: 'Verification Loops' }
  ]

  return (
    <div className={`rounded-2xl shadow-xl border overflow-hidden ${
      isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
    }`}>
      {/* Header */}
      <div className={`flex items-center justify-between px-6 py-4 border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="flex items-center gap-3">
          {/* Status indicator */}
          <div className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${isRunning ? 'bg-teal-500 animate-pulse' : 'bg-gray-400'}`} />
            <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Live Scan Console</h2>
          </div>
          
          {/* Running badge */}
          {isRunning && (
            <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-sm ${
              isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
            }`}>
              <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
              Running...
            </span>
          )}
        </div>

        {/* Window controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={onMinimize}
            className={`p-1.5 rounded-lg transition-colors ${
              isDarkMode ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-800' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button
            onClick={onClose}
            className={`p-1.5 rounded-lg transition-colors ${
              isDarkMode ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-800' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[500px]">
        {/* Left Panel - Console */}
        <div className={`w-3/5 flex flex-col border-r ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          {/* Tabs */}
          <div className={`flex border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium transition-colors relative ${
                  activeTab === tab.id
                    ? 'text-teal-500'
                    : isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className={`flex-1 overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            {activeTab === 'activity' ? (
              <ActivityLog isDarkMode={isDarkMode} />
            ) : (
              <VerificationLoops isDarkMode={isDarkMode} />
            )}
          </div>
        </div>

        {/* Right Panel - Finding Log */}
        <div className="w-2/5 overflow-y-auto">
          <FindingLog isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  )
}

export default LiveScanConsole
import React, { useState } from 'react'
import ActivityLog from './ActivityLog'
import VerificationLoops from './VerificationLoops'
import FindingLog from './FindingLog'

const LiveScanConsole = ({ 
  isRunning = true,
  onClose = () => console.log('Close clicked'),
  onMinimize = () => console.log('Minimize clicked')
}) => {
  const [activeTab, setActiveTab] = useState('activity')

  const tabs = [
    { id: 'activity', label: 'Activity Log' },
    { id: 'verification', label: 'Verification Loops' }
  ]

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          {/* Status indicator */}
          <div className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${isRunning ? 'bg-teal-500 animate-pulse' : 'bg-gray-400'}`} />
            <h2 className="text-lg font-semibold text-gray-900">Live Scan Console</h2>
          </div>
          
          {/* Running badge */}
          {isRunning && (
            <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
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
            className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
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
        <div className="flex-1 flex flex-col border-r border-gray-200">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium transition-colors relative ${
                  activeTab === tab.id
                    ? 'text-teal-600'
                    : 'text-gray-500 hover:text-gray-700'
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
          <div className="flex-1 bg-gray-900 overflow-hidden">
            {activeTab === 'activity' ? (
              <ActivityLog />
            ) : (
              <VerificationLoops />
            )}
          </div>
        </div>

        {/* Right Panel - Finding Log */}
        <div className="w-96 overflow-y-auto">
          <FindingLog />
        </div>
      </div>
    </div>
  )
}

export default LiveScanConsole
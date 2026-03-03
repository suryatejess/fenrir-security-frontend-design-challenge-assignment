import React from 'react'
import { useTheme } from '../context/ThemeContext'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import CircularProgress from '../components/CircularProgress'
import StepTracker from '../components/StepTracker'
import MetadataRow from '../components/MetadataRow'
import LiveScanConsole from '../components/LiveScanConsole'
import BottomStatusbar from '../components/BottomStatusbar'

const ActiveScanDetail = () => {
  const { isDarkMode } = useTheme()

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <Sidebar activePage="scans" />

      {/* Main Content */}
      <div className="lg:ml-64 flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar 
          title="Scan"
          breadcrumbs={[
            { label: 'Private Assets', href: '#' },
            { label: 'New Scan', href: '#', isActive: true }
          ]}
          isDarkMode={isDarkMode}
        />

        {/* Page Content */}
        <main className="flex-1 p-6 space-y-6 overflow-auto pb-20">
          {/* Top Section - Progress, Step Tracker, and Metadata */}
          <div className={`rounded-xl border p-6 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
            <div className="flex gap-8">
              {/* Circular Progress - spans both rows */}
              <div className="flex-shrink-0 flex items-center">
                <CircularProgress percentage={0} status="In Progress" size={120} isDarkMode={isDarkMode} />
              </div>

              {/* Right side - Step Tracker on top, Metadata below */}
              <div className="flex-1 flex flex-col">
                {/* Step Tracker */}
                <div className="flex-1">
                  <StepTracker currentStep={0} isDarkMode={isDarkMode} />
                </div>

                {/* Metadata Row - below step tracker */}
                <div className={`pt-6 mt-4 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                  <MetadataRow isDarkMode={isDarkMode} />
                </div>
              </div>
            </div>
          </div>

          {/* Live Scan Console */}
          <LiveScanConsole isRunning={true} isDarkMode={isDarkMode} />
        </main>

        {/* Bottom Status Bar */}
        <div className="fixed bottom-0 left-0 right-0 lg:left-64 z-30">
          <BottomStatusbar isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  )
}

export default ActiveScanDetail
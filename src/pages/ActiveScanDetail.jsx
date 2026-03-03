import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import CircularProgress from '../components/CircularProgress'
import StepTracker from '../components/StepTracker'
import MetadataRow from '../components/MetadataRow'
import LiveScanConsole from '../components/LiveScanConsole'
import BottomStatusbar from '../components/BottomStatusbar'

const ActiveScanDetail = () => {
  return (
    <div className="min-h-screen bg-gray-50">
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
        />

        {/* Page Content */}
        <main className="flex-1 p-6 space-y-6 overflow-auto pb-20">
          {/* Top Section - Progress and Step Tracker */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-8">
              {/* Circular Progress */}
              <div className="flex-shrink-0">
                <CircularProgress percentage={0} status="In Progress" size={120} />
              </div>

              {/* Step Tracker */}
              <div className="flex-1">
                <StepTracker currentStep={0} />
              </div>
            </div>
          </div>

          {/* Metadata Row */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <MetadataRow />
          </div>

          {/* Live Scan Console */}
          <LiveScanConsole isRunning={true} />
        </main>

        {/* Bottom Status Bar */}
        <div className="fixed bottom-0 left-0 right-0 lg:left-64 z-30">
          <BottomStatusbar />
        </div>
      </div>
    </div>
  )
}

export default ActiveScanDetail
import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { useToast } from '../context/ToastContext'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import OrgStatsbar from '../components/OrgStatsbar'
import ScanTable from '../components/ScanTable'

const Dashboard = () => {
  const { isDarkMode } = useTheme()
  const { showToast } = useToast()

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content - offset by sidebar width on large screens */}
      <div className="lg:ml-64 flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar 
          title="Scan"
          breadcrumbs={[
            { label: 'Private Assets', href: '#' },
            { label: 'New Scan', href: '#', isActive: true }
          ]}
          isDarkMode={isDarkMode}
          onExportReport={() => showToast('Export started. Report will be ready shortly.', 'info')}
          onStopScan={() => showToast('Scan stopped successfully.', 'success')}
        />

        {/* Page Content */}
        <main className="flex-1 p-6 space-y-6 overflow-auto">
          {/* Org Stats Bar */}
          <OrgStatsbar isDarkMode={isDarkMode} />

          {/* Scan Table */}
          <ScanTable isDarkMode={isDarkMode} />
        </main>
      </div>
    </div>
  )
}

export default Dashboard
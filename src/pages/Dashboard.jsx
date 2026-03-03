import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import OrgStatsbar from '../components/OrgStatsbar'
import ScanTable from '../components/ScanTable'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activePage="dashboard" />

      {/* Main Content - offset by sidebar width on large screens */}
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
        <main className="flex-1 p-6 space-y-6 overflow-auto">
          {/* Org Stats Bar */}
          <OrgStatsbar />

          {/* Scan Table */}
          <ScanTable />
        </main>
      </div>
    </div>
  )
}

export default Dashboard
import React, { useState } from 'react'
import ScanRow from './ScanRow'

const initialMockScans = [
  {
    id: 1,
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Completed',
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: '4d ago'
  },
  {
    id: 2,
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Completed',
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: '4d ago'
  },
  {
    id: 3,
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Completed',
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: '4d ago'
  },
  {
    id: 4,
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Completed',
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: '4d ago'
  },
  {
    id: 5,
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Completed',
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: '4d ago'
  },
  {
    id: 6,
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Completed',
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: '4d ago'
  },
  {
    id: 7,
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Completed',
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: '4d ago'
  },
  {
    id: 8,
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Scheduled',
    progress: 100,
    vulnerabilities: { critical: 5, high: 12 },
    lastScan: '4d ago'
  },
  {
    id: 9,
    name: 'Web App Servers',
    type: 'Greybox',
    status: 'Scheduled',
    progress: 100,
    vulnerabilities: { critical: 5, high: 12 },
    lastScan: '4d ago'
  },
  {
    id: 10,
    name: 'IoT Devices',
    type: 'Blackbox',
    status: 'Failed',
    progress: 10,
    vulnerabilities: { critical: 2, high: 4, medium: 8, low: 1 },
    lastScan: '3d ago'
  },
  {
    id: 11,
    name: 'Temp Data',
    type: 'Blackbox',
    status: 'Failed',
    progress: 10,
    vulnerabilities: { critical: 2, high: 4, medium: 8, low: 1 },
    lastScan: '3d ago'
  }
]

const ScanTable = ({ 
  initialScans = initialMockScans,
  onColumnToggle = () => console.log('Column toggle clicked'),
  isDarkMode = false
}) => {
  const [scans, setScans] = useState(initialScans)
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilterDropdown, setShowFilterDropdown] = useState(false)
  const [showNewScanModal, setShowNewScanModal] = useState(false)
  const [filters, setFilters] = useState({
    status: [],
    type: []
  })
  const [newScan, setNewScan] = useState({
    name: '',
    type: 'Greybox',
    target: ''
  })

  const statusOptions = ['Completed', 'Scheduled', 'Failed', 'In Progress']
  const typeOptions = ['Greybox', 'Blackbox']

  const toggleFilter = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value]
    }))
  }

  const clearFilters = () => {
    setFilters({ status: [], type: [] })
  }

  const activeFilterCount = filters.status.length + filters.type.length

  const filteredScans = scans.filter(scan => {
    const matchesSearch = scan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scan.type.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesStatus = filters.status.length === 0 || filters.status.includes(scan.status)
    const matchesType = filters.type.length === 0 || filters.type.includes(scan.type)
    
    return matchesSearch && matchesStatus && matchesType
  })

  const handleCreateScan = (e) => {
    e.preventDefault()
    const newScanData = {
      id: Date.now(),
      name: newScan.name,
      type: newScan.type,
      status: 'Scheduled',
      progress: 0,
      vulnerabilities: {},
      lastScan: 'Just now'
    }
    setScans(prev => [newScanData, ...prev])
    setNewScan({ name: '', type: 'Greybox', target: '' })
    setShowNewScanModal(false)
  }

  return (
    <div className={`rounded-xl border ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
      {/* Toolbar */}
      <div className={`p-4 border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="flex items-center justify-between gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <svg 
              className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search scans by name or type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' 
                  : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400'
              }`}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Filter Button with Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  activeFilterCount > 0
                    ? isDarkMode 
                      ? 'text-teal-400 bg-teal-900/30 border border-teal-700'
                      : 'text-teal-700 bg-teal-50 border border-teal-300'
                    : isDarkMode
                      ? 'text-gray-300 bg-gray-800 border border-gray-700 hover:bg-gray-700'
                      : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filter
                {activeFilterCount > 0 && (
                  <span className="ml-1 px-1.5 py-0.5 text-xs bg-teal-500 text-white rounded-full">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              {/* Filter Dropdown */}
              {showFilterDropdown && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setShowFilterDropdown(false)} 
                  />
                  <div className={`absolute right-0 mt-2 w-64 rounded-lg shadow-lg border z-20 ${
                    isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  }`}>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Filters</span>
                        {activeFilterCount > 0 && (
                          <button
                            onClick={clearFilters}
                            className="text-sm text-teal-500 hover:text-teal-400"
                          >
                            Clear all
                          </button>
                        )}
                      </div>

                      {/* Status Filter */}
                      <div className="mb-4">
                        <p className={`text-xs font-medium uppercase mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Status</p>
                        <div className="space-y-2">
                          {statusOptions.map(status => (
                            <label key={status} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={filters.status.includes(status)}
                                onChange={() => toggleFilter('status', status)}
                                className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                              />
                              <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{status}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Type Filter */}
                      <div>
                        <p className={`text-xs font-medium uppercase mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Type</p>
                        <div className="space-y-2">
                          {typeOptions.map(type => (
                            <label key={type} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={filters.type.includes(type)}
                                onChange={() => toggleFilter('type', type)}
                                className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                              />
                              <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{type}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <button
              onClick={onColumnToggle}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                isDarkMode
                  ? 'text-gray-300 bg-gray-800 border border-gray-700 hover:bg-gray-700'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
              Column
            </button>

            <button
              onClick={() => setShowNewScanModal(true)}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New scan
            </button>
          </div>
        </div>
      </div>

      {/* New Scan Modal */}
      {showNewScanModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/50" 
            onClick={() => setShowNewScanModal(false)} 
          />
          <div className={`relative rounded-2xl shadow-xl w-full max-w-md mx-4 p-6 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>New Scan</h2>
              <button
                onClick={() => setShowNewScanModal(false)}
                className={isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleCreateScan} className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Scan Name *
                </label>
                <input
                  type="text"
                  value={newScan.name}
                  onChange={(e) => setNewScan(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g., Web App Servers"
                  required
                  className={`w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border border-gray-300 text-gray-900'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Scan Type *
                </label>
                <select
                  value={newScan.type}
                  onChange={(e) => setNewScan(prev => ({ ...prev, type: e.target.value }))}
                  className={`w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="Greybox">Greybox</option>
                  <option value="Blackbox">Blackbox</option>
                </select>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Target URL
                </label>
                <input
                  type="url"
                  value={newScan.target}
                  onChange={(e) => setNewScan(prev => ({ ...prev, target: e.target.value }))}
                  placeholder="https://example.com"
                  className={`w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border border-gray-300 text-gray-900'
                  }`}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowNewScanModal(false)}
                  className={`flex-1 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isDarkMode 
                      ? 'text-gray-300 bg-gray-700 border border-gray-600 hover:bg-gray-600' 
                      : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors duration-200"
                >
                  Create Scan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`border-b ${isDarkMode ? 'border-gray-800 bg-gray-800/50' : 'border-gray-200 bg-gray-50'}`}>
              <th className={`text-left py-3 px-4 text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Scan Name
              </th>
              <th className={`text-left py-3 px-4 text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Type
              </th>
              <th className={`text-left py-3 px-4 text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Status
              </th>
              <th className={`text-left py-3 px-4 text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Progress
              </th>
              <th className={`text-left py-3 px-4 text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Vulnerability
              </th>
              <th className={`text-left py-3 px-4 text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Last Scan
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredScans.map((scan) => (
              <ScanRow key={scan.id} scan={scan} isDarkMode={isDarkMode} />
            ))}
          </tbody>
        </table>

        {filteredScans.length === 0 && (
          <div className={`py-12 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            No scans found matching your search.
          </div>
        )}
      </div>
    </div>
  )
}

export default ScanTable
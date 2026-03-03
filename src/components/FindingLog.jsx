import React from 'react'
import FindingLogCard from './FindingLogCards'

const mockFindings = [
  {
    id: 1,
    severity: 'Critical',
    timestamp: '10:45:23',
    title: 'SQL Injection in Authentication Endpoint',
    endpoint: '/api/users/profile',
    description: 'Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.'
  },
  {
    id: 2,
    severity: 'High',
    timestamp: '10:45:23',
    title: 'Unauthorized Access to User Metadata',
    endpoint: '/api/auth/login',
    description: 'Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.'
  },
  {
    id: 3,
    severity: 'Medium',
    timestamp: '10:45:23',
    title: 'Broken Authentication Rate Limiting',
    endpoint: '/api/search',
    description: 'No effective rate limiting detected on login attempts. Automated brute-force attempts possible.'
  }
]

const FindingLog = ({ 
  findings = mockFindings,
  title = 'Finding Log',
  isDarkMode = false
}) => {
  return (
    <div className={`rounded-xl p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      {/* Header */}
      <h2 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>

      {/* Findings List */}
      <div className="space-y-4">
        {findings.map((finding) => (
          <FindingLogCard key={finding.id} finding={finding} isDarkMode={isDarkMode} />
        ))}
      </div>

      {/* Empty State */}
      {findings.length === 0 && (
        <div className={`text-center py-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          No findings recorded yet.
        </div>
      )}
    </div>
  )
}

export default FindingLog
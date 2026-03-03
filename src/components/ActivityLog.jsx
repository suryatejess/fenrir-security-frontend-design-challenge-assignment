import React from 'react'

const mockLogs = [
  {
    id: 1,
    timestamp: '09:00:00',
    content: [
      { text: "I'll begin a systematic penetration test on ", type: 'normal' },
      { text: 'helpdesk.democorp.com', type: 'url' },
      { text: '. Let me start with reconnaissance and enumeration.', type: 'normal' }
    ]
  },
  {
    id: 2,
    timestamp: '09:01:00',
    content: [
      { text: 'Good! target is online. Now let me perform port scanning to identify running services.', type: 'normal' }
    ]
  },
  {
    id: 3,
    timestamp: '09:02:00',
    content: [
      { text: 'Excellent reconnaissance results:', type: 'normal' },
      { text: '\n  - helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)', type: 'normal' },
      { text: '\nLet me probe the web server on target first to understand its structure.', type: 'normal' }
    ]
  },
  {
    id: 4,
    timestamp: '09:03:00',
    content: [
      { text: 'Great! I found a login page for a Help Desk Platform. I can see a useful comment: ', type: 'normal' },
      { text: '"TODO: Delete the testing account (test:test)"', type: 'highlight' },
      { text: '. Let me test this credential. The login redirects to ', type: 'normal' },
      { text: '/password/test', type: 'code' },
      { text: '. Let me follow that path and explore it.', type: 'normal' }
    ]
  },
  {
    id: 5,
    timestamp: '09:04:00',
    content: [
      { text: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to ", type: 'normal' },
      { text: "'#'", type: 'code' },
      { text: ' which means the current page. Let me try a different approach.', type: 'normal' }
    ]
  },
  {
    id: 6,
    timestamp: '09:05:00',
    content: [
      { text: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the ", type: 'normal' },
      { text: 'test:test', type: 'url' },
      { text: ' password directly on other endpoints.', type: 'normal' }
    ]
  },
  {
    id: 7,
    timestamp: '09:06:00',
    content: [
      { text: 'Great! I can access the dashboard using the ', type: 'normal' },
      { text: "'X-UserId: 10032'", type: 'header' },
      { text: ' header. The dashboard shows "Welcome, John Doe". This suggests an ', type: 'normal' },
      { text: '**IDOR vulnerability**', type: 'keyword' },
      { text: " - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...", type: 'normal' }
    ]
  }
]

const ActivityLog = ({ logs = mockLogs }) => {
  const getTextStyle = (type) => {
    switch (type) {
      case 'url':
        return 'text-teal-600 hover:underline cursor-pointer'
      case 'code':
        return 'bg-gray-200 px-1.5 py-0.5 rounded text-gray-800 font-mono text-sm'
      case 'header':
        return 'bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded font-mono'
      case 'highlight':
        return 'text-teal-600'
      case 'keyword':
        return 'text-red-500 font-semibold'
      default:
        return 'text-gray-700'
    }
  }

  return (
    <div className="h-full overflow-y-auto p-4 font-mono text-sm leading-relaxed bg-white">
      {logs.map((log) => (
        <div key={log.id} className="mb-4">
          <span className="text-gray-500">[{log.timestamp}]</span>{' '}
          {log.content.map((segment, idx) => (
            <span key={idx} className={getTextStyle(segment.type)}>
              {segment.text}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ActivityLog
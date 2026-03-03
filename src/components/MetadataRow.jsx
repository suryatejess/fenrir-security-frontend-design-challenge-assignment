import React from 'react'

const MetadataRow = ({
  scanType = 'Grey Box',
  targets = 'google.com',
  startedAt = 'Nov 22, 09:00AM',
  credentials = '2 Active',
  files = 'Control.pdf',
  checklists = { completed: 40, total: 350 }
}) => {
  const metadata = [
    {
      label: 'Scan Type',
      value: scanType
    },
    {
      label: 'Targets',
      value: targets
    },
    {
      label: 'Started At',
      value: startedAt
    },
    {
      label: 'Credentials',
      value: credentials
    },
    {
      label: 'Files',
      value: files
    },
    {
      label: 'Checklists',
      value: `${checklists.completed}/${checklists.total}`,
      highlight: true
    }
  ]

  return (
    <div className="flex items-center justify-between py-4 px-6 bg-white">
      {metadata.map((item, index) => (
        <div key={index} className="flex flex-col">
          <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">
            {item.label}
          </span>
          <span
            className={`text-sm font-medium ${
              item.highlight ? 'text-teal-500' : 'text-gray-900'
            }`}
          >
            {item.value}
          </span>
        </div>
      ))}
    </div>
  )
}

export default MetadataRow
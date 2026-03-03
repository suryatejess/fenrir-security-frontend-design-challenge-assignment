import React, { createContext, useContext, useState, useCallback } from 'react'

const ToastContext = createContext()

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])

  const showToast = useCallback((message, type = 'info') => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 3000)
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  )
}

const Toast = ({ message, type }) => {
  const bgColors = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-gray-800',
    warning: 'bg-amber-600'
  }

  return (
    <div className={`${bgColors[type] || bgColors.info} text-white px-4 py-3 rounded-lg shadow-lg`}>
      {message}
    </div>
  )
}

const ToastContainer = ({ toasts }) => (
  <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
    {toasts.map((toast) => (
      <Toast key={toast.id} message={toast.message} type={toast.type} />
    ))}
  </div>
)

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

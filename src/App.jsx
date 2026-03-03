import './App.css'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import ActiveScanDetail from './pages/ActiveScanDetail'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/active-scan" element={<ActiveScanDetail />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App

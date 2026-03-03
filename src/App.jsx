import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import Dashboard from './pages/Dashboard'
import ActiveScanDetail from './pages/ActiveScanDetail'
import Home from './pages/Home'

function App() {
  return (
    <ThemeProvider>
      <ActiveScanDetail />
      {/* <Dashboard /> */}
      {/* <Home /> */}
    </ThemeProvider>
  )
}

export default App

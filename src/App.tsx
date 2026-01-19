import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import HomePage from './pages/Home'
import BenStorePage from './pages/BenStore'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/benstore" element={<BenStorePage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App

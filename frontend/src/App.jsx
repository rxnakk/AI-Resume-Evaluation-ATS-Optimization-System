import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { EvaluationProvider } from './context/EvaluationContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import EvaluationPage from './pages/EvaluationPage'
import ResultsPage from './pages/ResultsPage'

export default function App() {
  return (
    <BrowserRouter>
      <EvaluationProvider>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/evaluate" element={<EvaluationPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </main>
        <Footer />
      </EvaluationProvider>
    </BrowserRouter>
  )
}

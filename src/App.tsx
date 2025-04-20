import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import ServicePage from './pages/ServicePage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import AboutPage from './pages/AboutPage'
import PricingPage from './pages/PricingPage';

import VirtualAttendance from './components/VirtualAttendance';

export default function App() {
  return (
    <Router basename="/jbs-dedetizadora">
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/sobre-nos" element={<AboutPage />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
        <Route path="/servicos" element={<ServicePage />} />
        <Route path="/precos" element={<PricingPage />} />
      </Routes>
    </Router>
  )
}

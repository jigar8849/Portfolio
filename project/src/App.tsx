import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AdminLogin from './pages/admin/AdminLogin';
import ResidentLogin from './pages/resident/ResidentLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import ResidentDashboard from './pages/resident/ResidentDashboard';
import CreateAccount from './pages/CreateAccount';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/resident/login" element={<ResidentLogin />} />
            <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
            <Route path="/resident/dashboard/*" element={<ResidentDashboard />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
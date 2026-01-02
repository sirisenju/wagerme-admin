import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

// Placeholder components for other pages
import WithdrawalRequest from './pages/WithdrawalRequest';
import Transactions from './pages/Transactions';
import BetHistory from './pages/BetHistory';
import AdminBets from './pages/AdminBets';

import api from './api/axiosConfig';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('authToken');
      setIsAuthenticated(false);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        <Route path="/" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <DashboardLayout onLogout={handleLogout}>
              <Dashboard />
            </DashboardLayout>
          </ProtectedRoute>
        } />

        <Route path="/withdrawal-request" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <DashboardLayout onLogout={handleLogout}>
              <WithdrawalRequest />
            </DashboardLayout>
          </ProtectedRoute>
        } />

        <Route path="/transactions" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <DashboardLayout onLogout={handleLogout}>
              <Transactions />
            </DashboardLayout>
          </ProtectedRoute>
        } />

        <Route path="/bet-history" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <DashboardLayout onLogout={handleLogout}>
              <BetHistory />
            </DashboardLayout>
          </ProtectedRoute>
        } />

        <Route path="/admin-bets" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <DashboardLayout onLogout={handleLogout}>
              <AdminBets />
            </DashboardLayout>
          </ProtectedRoute>
        } />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

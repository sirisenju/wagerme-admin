import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';

// Placeholder components for other pages
import WithdrawalRequest from './pages/WithdrawalRequest';
import Transactions from './pages/Transactions';
import BetHistory from './pages/BetHistory';
import AdminBets from './pages/AdminBets';

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/withdrawal-request" element={<WithdrawalRequest />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/bet-history" element={<BetHistory />} />
          <Route path="/admin-bets" element={<AdminBets />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;

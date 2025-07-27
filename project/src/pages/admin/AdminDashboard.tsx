import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminOverview from '../../components/admin/AdminOverview';
import ResidentManagement from '../../components/admin/ResidentManagement';
import PaymentManagement from '../../components/admin/PaymentManagement';
import ParkingManagement from '../../components/admin/ParkingManagement';
import EmployeeManagement from '../../components/admin/EmployeeManagement';
import FlatList from '../../components/admin/FlatList';
import ComplaintManagement from '../../components/admin/ComplaintManagement';

const AdminDashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <Routes>
            <Route path="/" element={<AdminOverview />} />
            <Route path="/residents" element={<ResidentManagement />} />
            <Route path="/payments" element={<PaymentManagement />} />
            <Route path="/parking" element={<ParkingManagement />} />
            <Route path="/employees" element={<EmployeeManagement />} />
            <Route path="/flats" element={<FlatList />} />
            <Route path="/complaints" element={<ComplaintManagement />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
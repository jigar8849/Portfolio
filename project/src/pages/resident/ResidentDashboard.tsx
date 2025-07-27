import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ResidentSidebar from '../../components/resident/ResidentSidebar';
import ResidentHeader from '../../components/resident/ResidentHeader';
import ResidentOverview from '../../components/resident/ResidentOverview';
import BillPayments from '../../components/resident/BillPayments';
import ComplaintSubmission from '../../components/resident/ComplaintSubmission';
import EventBooking from '../../components/resident/EventBooking';
import ResidentProfile from '../../components/resident/ResidentProfile';
import VehicleSearch from '../../components/resident/VehicleSearch';
import GuestManagement from '../../components/resident/GuestManagement';
import OwnerDirectory from '../../components/resident/OwnerDirectory';

const ResidentDashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <ResidentSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <ResidentHeader onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <Routes>
            <Route path="/" element={<ResidentOverview />} />
            <Route path="/bills" element={<BillPayments />} />
            <Route path="/complaints" element={<ComplaintSubmission />} />
            <Route path="/events" element={<EventBooking />} />
            <Route path="/profile" element={<ResidentProfile />} />
            <Route path="/vehicle-search" element={<VehicleSearch />} />
            <Route path="/guests" element={<GuestManagement />} />
            <Route path="/directory" element={<OwnerDirectory />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default ResidentDashboard;
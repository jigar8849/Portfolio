import React from 'react';

interface ResidentHeaderProps {
  onMenuClick: () => void;
}

const ResidentHeader: React.FC<ResidentHeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow p-4 flex items-center">
      <button onClick={onMenuClick} className="mr-4">Menu</button>
      <h1 className="text-xl font-bold">Resident Dashboard</h1>
    </header>
  );
};

export default ResidentHeader;

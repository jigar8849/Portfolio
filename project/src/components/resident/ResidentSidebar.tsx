import React from 'react';

interface ResidentSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResidentSidebar: React.FC<ResidentSidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <aside className="w-64 bg-white shadow-md">
      <button onClick={onClose} className="p-2">Close</button>
      <nav>
        <ul>
          <li><a href="/">Overview</a></li>
          <li><a href="/bills">Bills</a></li>
          <li><a href="/complaints">Complaints</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/vehicle-search">Vehicle Search</a></li>
          <li><a href="/guests">Guests</a></li>
          <li><a href="/directory">Owner Directory</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default ResidentSidebar;

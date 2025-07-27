import React, { useState } from 'react';
import { Car, Bike, Plus, Search, Edit, Trash2 } from 'lucide-react';

interface ParkingSlot {
  id: string;
  slotNumber: string;
  type: 'two-wheeler' | 'four-wheeler';
  residentName?: string;
  flatNumber?: string;
  block?: string;
  vehicleNumber?: string;
  status: 'occupied' | 'available';
}

const ParkingManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const mockParkingSlots: ParkingSlot[] = [
    {
      id: '1',
      slotNumber: 'TW-001',
      type: 'two-wheeler',
      residentName: 'John Doe',
      flatNumber: '301',
      block: 'A',
      vehicleNumber: 'MH12AB1234',
      status: 'occupied'
    },
    {
      id: '2',
      slotNumber: 'FW-001',
      type: 'four-wheeler',
      residentName: 'Jane Smith',
      flatNumber: '205',
      block: 'B',
      vehicleNumber: 'MH12CD5678',
      status: 'occupied'
    },
    {
      id: '3',
      slotNumber: 'TW-002',
      type: 'two-wheeler',
      status: 'available'
    },
    {
      id: '4',
      slotNumber: 'FW-002',
      type: 'four-wheeler',
      status: 'available'
    }
  ];

  const filteredSlots = mockParkingSlots.filter(slot => {
    const matchesSearch = slot.slotNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (slot.residentName && slot.residentName.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (slot.vehicleNumber && slot.vehicleNumber.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = typeFilter === '' || slot.type === typeFilter;
    const matchesStatus = statusFilter === '' || slot.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  const twoWheelerSlots = mockParkingSlots.filter(slot => slot.type === 'two-wheeler');
  const fourWheelerSlots = mockParkingSlots.filter(slot => slot.type === 'four-wheeler');
  const occupiedTwoWheeler = twoWheelerSlots.filter(slot => slot.status === 'occupied').length;
  const occupiedFourWheeler = fourWheelerSlots.filter(slot => slot.status === 'occupied').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Parking Management</h1>
        <button className="btn-primary flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Allocate Parking
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Two Wheeler Slots</p>
              <p className="text-2xl font-bold text-gray-900">
                {occupiedTwoWheeler}/{twoWheelerSlots.length}
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Bike className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-2">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${(occupiedTwoWheeler / twoWheelerSlots.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Four Wheeler Slots</p>
              <p className="text-2xl font-bold text-gray-900">
                {occupiedFourWheeler}/{fourWheelerSlots.length}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <Car className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-2">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full" 
                style={{ width: `${(occupiedFourWheeler / fourWheelerSlots.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Available Slots</p>
              <p className="text-2xl font-bold text-green-600">
                {mockParkingSlots.filter(slot => slot.status === 'available').length}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <Plus className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Occupancy Rate</p>
              <p className="text-2xl font-bold text-primary-600">
                {Math.round((mockParkingSlots.filter(slot => slot.status === 'occupied').length / mockParkingSlots.length) * 100)}%
              </p>
            </div>
            <div className="p-3 bg-primary-100 rounded-full">
              <Car className="h-6 w-6 text-primary-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by slot number, resident name, or vehicle number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 input-field"
            />
          </div>
          <select 
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="input-field md:w-48"
          >
            <option value="">All Types</option>
            <option value="two-wheeler">Two Wheeler</option>
            <option value="four-wheeler">Four Wheeler</option>
          </select>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="input-field md:w-48"
          >
            <option value="">All Status</option>
            <option value="occupied">Occupied</option>
            <option value="available">Available</option>
          </select>
        </div>
      </div>

      {/* Parking Slots Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Slot Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Resident Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vehicle Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSlots.map((slot) => (
                <tr key={slot.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full mr-3 ${
                        slot.type === 'two-wheeler' ? 'bg-blue-100' : 'bg-green-100'
                      }`}>
                        {slot.type === 'two-wheeler' ? (
                          <Bike className={`h-5 w-5 ${slot.type === 'two-wheeler' ? 'text-blue-600' : 'text-green-600'}`} />
                        ) : (
                          <Car className="h-5 w-5 text-green-600" />
                        )}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{slot.slotNumber}</div>
                        <div className="text-sm text-gray-500">ID: {slot.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      slot.type === 'two-wheeler' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {slot.type.replace('-', ' ').toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {slot.residentName ? (
                      <div>
                        <div className="text-sm font-medium text-gray-900">{slot.residentName}</div>
                        <div className="text-sm text-gray-500">Block {slot.block} - {slot.flatNumber}</div>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-500">Not Assigned</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {slot.vehicleNumber || 'N/A'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      slot.status === 'occupied' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {slot.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Edit className="h-4 w-4" />
                      </button>
                      {slot.status === 'occupied' && (
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ParkingManagement;
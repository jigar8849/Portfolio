import React, { useState } from 'react';
import { Download, Search, Building, Users } from 'lucide-react';

interface Flat {
  id: string;
  flatNumber: string;
  block: string;
  floor: number;
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
  familyMembers: number;
  status: 'occupied' | 'vacant';
  rentType: 'owned' | 'rented';
}

const FlatList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [blockFilter, setBlockFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const mockFlats: Flat[] = [
    {
      id: '1',
      flatNumber: '301',
      block: 'A',
      floor: 3,
      ownerName: 'John Doe',
      ownerPhone: '+91 9876543210',
      ownerEmail: 'john@email.com',
      familyMembers: 4,
      status: 'occupied',
      rentType: 'owned'
    },
    {
      id: '2',
      flatNumber: '205',
      block: 'B',
      floor: 2,
      ownerName: 'Jane Smith',
      ownerPhone: '+91 9876543211',
      ownerEmail: 'jane@email.com',
      familyMembers: 3,
      status: 'occupied',
      rentType: 'rented'
    },
    {
      id: '3',
      flatNumber: '102',
      block: 'A',
      floor: 1,
      ownerName: 'Mike Johnson',
      ownerPhone: '+91 9876543212',
      ownerEmail: 'mike@email.com',
      familyMembers: 2,
      status: 'occupied',
      rentType: 'owned'
    },
    {
      id: '4',
      flatNumber: '404',
      block: 'C',
      floor: 4,
      ownerName: '',
      ownerPhone: '',
      ownerEmail: '',
      familyMembers: 0,
      status: 'vacant',
      rentType: 'owned'
    }
  ];

  const filteredFlats = mockFlats.filter(flat => {
    const matchesSearch = flat.flatNumber.includes(searchTerm) ||
                         flat.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         flat.block.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBlock = blockFilter === '' || flat.block === blockFilter;
    const matchesStatus = statusFilter === '' || flat.status === statusFilter;
    return matchesSearch && matchesBlock && matchesStatus;
  });

  const blocks = [...new Set(mockFlats.map(flat => flat.block))];
  const totalFlats = mockFlats.length;
  const occupiedFlats = mockFlats.filter(flat => flat.status === 'occupied').length;
  const vacantFlats = mockFlats.filter(flat => flat.status === 'vacant').length;

  const generatePDF = () => {
    // This would integrate with a PDF generation library
    console.log('Generating PDF with flat list...');
    alert('PDF generation would be implemented here');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Flat List & Owner Directory</h1>
        <button
          onClick={generatePDF}
          className="btn-primary flex items-center"
        >
          <Download className="h-5 w-5 mr-2" />
          Download PDF
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Flats</p>
              <p className="text-2xl font-bold text-gray-900">{totalFlats}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Building className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Occupied</p>
              <p className="text-2xl font-bold text-green-600">{occupiedFlats}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <Users className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Vacant</p>
              <p className="text-2xl font-bold text-red-600">{vacantFlats}</p>
            </div>
            <div className="p-3 bg-red-100 rounded-full">
              <Building className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Occupancy Rate</p>
              <p className="text-2xl font-bold text-primary-600">
                {Math.round((occupiedFlats / totalFlats) * 100)}%
              </p>
            </div>
            <div className="p-3 bg-primary-100 rounded-full">
              <Building className="h-6 w-6 text-primary-600" />
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
              placeholder="Search by flat number, owner name, or block..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 input-field"
            />
          </div>
          <select 
            value={blockFilter}
            onChange={(e) => setBlockFilter(e.target.value)}
            className="input-field md:w-48"
          >
            <option value="">All Blocks</option>
            {blocks.map(block => (
              <option key={block} value={block}>Block {block}</option>
            ))}
          </select>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="input-field md:w-48"
          >
            <option value="">All Status</option>
            <option value="occupied">Occupied</option>
            <option value="vacant">Vacant</option>
          </select>
        </div>
      </div>

      {/* Flats Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Flat Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Owner Information
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Family Size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredFlats.map((flat) => (
                <tr key={flat.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        Block {flat.block} - {flat.flatNumber}
                      </div>
                      <div className="text-sm text-gray-500">Floor {flat.floor}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {flat.ownerName || 'Not Assigned'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {flat.ownerPhone ? (
                      <div>
                        <div className="text-sm text-gray-900">{flat.ownerPhone}</div>
                        <div className="text-sm text-gray-500">{flat.ownerEmail}</div>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-500">N/A</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {flat.familyMembers > 0 ? `${flat.familyMembers} Members` : 'N/A'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      flat.rentType === 'owned' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {flat.rentType.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      flat.status === 'occupied' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {flat.status.toUpperCase()}
                    </span>
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

export default FlatList;
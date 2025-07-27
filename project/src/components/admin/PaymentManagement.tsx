import React, { useState } from 'react';
import { Search, Download, Filter, CreditCard, DollarSign } from 'lucide-react';

interface Payment {
  id: string;
  residentName: string;
  flatNumber: string;
  block: string;
  billType: string;
  amount: number;
  dueDate: string;
  paidDate?: string;
  status: 'paid' | 'pending' | 'overdue';
  paymentMethod?: 'online' | 'cash';
}

const PaymentManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const mockPayments: Payment[] = [
    {
      id: '1',
      residentName: 'John Doe',
      flatNumber: '301',
      block: 'A',
      billType: 'Maintenance',
      amount: 2500,
      dueDate: '2024-01-15',
      paidDate: '2024-01-10',
      status: 'paid',
      paymentMethod: 'online'
    },
    {
      id: '2',
      residentName: 'Jane Smith',
      flatNumber: '205',
      block: 'B',
      billType: 'Water Bill',
      amount: 800,
      dueDate: '2024-01-20',
      status: 'pending'
    },
    {
      id: '3',
      residentName: 'Mike Johnson',
      flatNumber: '102',
      block: 'A',
      billType: 'Gas Bill',
      amount: 1200,
      dueDate: '2024-01-05',
      status: 'overdue'
    }
  ];

  const filteredPayments = mockPayments.filter(payment => {
    const matchesSearch = payment.residentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.flatNumber.includes(searchTerm) ||
                         payment.billType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === '' || payment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPaid = mockPayments
    .filter(p => p.status === 'paid')
    .reduce((sum, p) => sum + p.amount, 0);

  const totalPending = mockPayments
    .filter(p => p.status === 'pending' || p.status === 'overdue')
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Payment Management</h1>
        <button className="btn-primary flex items-center">
          <Download className="h-5 w-5 mr-2" />
          Export Report
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Collected</p>
              <p className="text-2xl font-bold text-green-600">₹{totalPaid.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Amount</p>
              <p className="text-2xl font-bold text-orange-600">₹{totalPending.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <CreditCard className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Collection Rate</p>
              <p className="text-2xl font-bold text-blue-600">
                {Math.round((totalPaid / (totalPaid + totalPending)) * 100)}%
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Filter className="h-6 w-6 text-blue-600" />
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
              placeholder="Search by resident name, flat number, or bill type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 input-field"
            />
          </div>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="input-field md:w-48"
          >
            <option value="">All Status</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="overdue">Overdue</option>
          </select>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Resident Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bill Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{payment.residentName}</div>
                      <div className="text-sm text-gray-500">Block {payment.block} - {payment.flatNumber}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{payment.billType}</div>
                    <div className="text-sm text-gray-500">ID: {payment.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">₹{payment.amount.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{payment.dueDate}</div>
                    {payment.paidDate && (
                      <div className="text-sm text-gray-500">Paid: {payment.paidDate}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      payment.status === 'paid' 
                        ? 'bg-green-100 text-green-800'
                        : payment.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {payment.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {payment.paymentMethod && (
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        payment.paymentMethod === 'online'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {payment.paymentMethod.toUpperCase()}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      {payment.status !== 'paid' && (
                        <button className="text-green-600 hover:text-green-900">
                          Mark Paid
                        </button>
                      )}
                      <button className="text-primary-600 hover:text-primary-900">
                        View Details
                      </button>
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

export default PaymentManagement;
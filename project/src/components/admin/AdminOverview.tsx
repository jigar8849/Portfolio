import React from 'react';
import { Users, CreditCard, AlertCircle, Car, TrendingUp, Calendar } from 'lucide-react';

const AdminOverview: React.FC = () => {
  const stats = [
    {
      title: 'Total Residents',
      value: '248',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Pending Payments',
      value: '₹45,000',
      change: '-8%',
      changeType: 'negative',
      icon: CreditCard,
      color: 'bg-green-500'
    },
    {
      title: 'Active Complaints',
      value: '7',
      change: '+2',
      changeType: 'neutral',
      icon: AlertCircle,
      color: 'bg-red-500'
    },
    {
      title: 'Parking Slots',
      value: '156/200',
      change: '78%',
      changeType: 'positive',
      icon: Car,
      color: 'bg-purple-500'
    }
  ];

  const recentActivities = [
    { id: 1, type: 'payment', message: 'John Doe paid maintenance bill', time: '2 hours ago' },
    { id: 2, type: 'complaint', message: 'New complaint submitted by Jane Smith', time: '4 hours ago' },
    { id: 3, type: 'resident', message: 'New resident added to Block A-301', time: '1 day ago' },
    { id: 4, type: 'event', message: 'Community hall booked for tomorrow', time: '2 days ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Admin!</h1>
        <p className="text-primary-100">Here's what's happening in your society today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className={`h-4 w-4 mr-1 ${
                    stat.changeType === 'positive' ? 'text-green-500' : 
                    stat.changeType === 'negative' ? 'text-red-500' : 'text-gray-500'
                  }`} />
                  <span className={`text-sm ${
                    stat.changeType === 'positive' ? 'text-green-600' : 
                    stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-full ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activities and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Users className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Add Resident</p>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <CreditCard className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Record Payment</p>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Calendar className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Schedule Event</p>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <AlertCircle className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">View Complaints</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
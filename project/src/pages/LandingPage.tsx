import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Users, Shield, Calendar } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ResidencyPro</span>
            </div>
            <div className="flex space-x-4">
              <Link to="/admin/login" className="btn-secondary">
                Admin Login
              </Link>
              <Link to="/resident/login" className="btn-secondary">
                Resident Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Modern Residency
            <span className="text-primary-600"> Management System</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Streamline your society management with our comprehensive platform. 
            Handle residents, payments, complaints, and events all in one place.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Link
              to="/create-account"
              className="btn-primary text-lg px-8 py-3 rounded-xl"
            >
              Create Society Account
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mx-auto">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Resident Management</h3>
              <p className="mt-2 text-base text-gray-500">
                Manage resident profiles, family details, and vehicle information
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mx-auto">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Payment Tracking</h3>
              <p className="mt-2 text-base text-gray-500">
                Track maintenance, utility bills, and generate automated receipts
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mx-auto">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Event Management</h3>
              <p className="mt-2 text-base text-gray-500">
                Book community halls and manage society events seamlessly
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mx-auto">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Complaint System</h3>
              <p className="mt-2 text-base text-gray-500">
                Submit and track complaints with photo and video evidence
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
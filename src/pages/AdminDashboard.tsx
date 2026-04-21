import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../contexts/AdminContext';
import AdminInventory from '../components/AdminInventory';
import { FiLogOut, FiHome } from 'react-icons/fi';

const AdminDashboard: React.FC = () => {
  const { logout } = useAdmin();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      {/* Header */}
      <div className="bg-white shadow-md border-b-4 border-pink-500">
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-pink-600">Admin Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage all products and categories</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                <FiHome size={20} /> Home
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                <FiLogOut size={20} /> Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <AdminInventory />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AdminDelivery() {
  const [deliveries, setDeliveries] = useState([
    {
      id: '#DLV001',
      orderId: '#ORD001',
      customer: 'John Smith',
      phone: '+1-555-0101',
      address: '123 Main St, City, Country',
      status: 'delivered',
      deliveryFee: 50,
      assignedTo: 'Driver A',
      date: '2024-06-01',
    },
    {
      id: '#DLV002',
      orderId: '#ORD002',
      customer: 'Jane Doe',
      phone: '+1-555-0102',
      address: '456 Oak Ave, City, Country',
      status: 'in-transit',
      deliveryFee: 50,
      assignedTo: 'Driver B',
      date: '2024-06-05',
    },
    {
      id: '#DLV003',
      orderId: '#ORD003',
      customer: 'Bob Johnson',
      phone: '+1-555-0103',
      address: '789 Pine Rd, City, Country',
      status: 'pending',
      deliveryFee: 50,
      assignedTo: 'Unassigned',
      date: '2024-06-08',
    },
  ]);

  const [deliveryFee, setDeliveryFee] = useState(50);
  const [showFeeModal, setShowFeeModal] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(null);
  const [selectedDriver, setSelectedDriver] = useState('');

  const drivers = ['Driver A', 'Driver B', 'Driver C', 'Driver D'];

  // Update delivery fee
  const updateDeliveryFee = (newFee) => {
    setDeliveryFee(newFee);
    setDeliveries(deliveries.map(d => ({ ...d, deliveryFee: newFee })));
    setShowFeeModal(false);
  };

  // Update delivery status
  const updateDeliveryStatus = (id, newStatus) => {
    setDeliveries(deliveries.map(delivery =>
      delivery.id === id ? { ...delivery, status: newStatus } : delivery
    ));
  };

  // Assign driver
  const assignDriver = (deliveryId, driver) => {
    setDeliveries(deliveries.map(delivery =>
      delivery.id === deliveryId ? { ...delivery, assignedTo: driver } : delivery
    ));
    setShowAssignModal(null);
    setSelectedDriver('');
  };

  // Get status styling
  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'in-transit':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-orange-100 text-orange-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'delivered':
        return 'Delivered';
      case 'in-transit':
        return 'In Transit';
      case 'pending':
        return 'Pending';
      case 'cancelled':
        return 'Cancelled';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Delivery Management</h1>
            <Link to="/" className="text-blue-600 hover:underline">← Back to Home</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Delivery Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium">Total Deliveries</p>
            <p className="text-3xl font-bold mt-2">{deliveries.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium">Pending</p>
            <p className="text-3xl font-bold text-orange-600 mt-2">{deliveries.filter(d => d.status === 'pending').length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium">In Transit</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">{deliveries.filter(d => d.status === 'in-transit').length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium">Delivered</p>
            <p className="text-3xl font-bold text-green-600 mt-2">{deliveries.filter(d => d.status === 'delivered').length}</p>
          </div>
        </div>

        {/* Delivery Fee Setting */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold">Delivery Fee</h3>
              <p className="text-3xl font-bold text-blue-600 mt-2">${deliveryFee}</p>
            </div>
            <button
              onClick={() => setShowFeeModal(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-bold"
            >
              Edit Fee
            </button>
          </div>
        </div>

        {/* Deliveries Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-4 text-left font-bold">Delivery ID</th>
                <th className="px-6 py-4 text-left font-bold">Order ID</th>
                <th className="px-6 py-4 text-left font-bold">Customer</th>
                <th className="px-6 py-4 text-left font-bold">Status</th>
                <th className="px-6 py-4 text-left font-bold">Assigned Driver</th>
                <th className="px-6 py-4 text-left font-bold">Delivery Fee</th>
                <th className="px-6 py-4 text-left font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {deliveries.map(delivery => (
                <tr key={delivery.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-bold">{delivery.id}</td>
                  <td className="px-6 py-4 text-blue-600 font-bold">{delivery.orderId}</td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium">{delivery.customer}</p>
                      <p className="text-sm text-gray-600">{delivery.phone}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={delivery.status}
                      onChange={(e) => updateDeliveryStatus(delivery.id, e.target.value)}
                      className={`px-3 py-1 rounded-full text-sm font-bold border-none cursor-pointer ${getStatusColor(delivery.status)}`}
                    >
                      <option value="pending">Pending</option>
                      <option value="in-transit">In Transit</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{delivery.assignedTo}</span>
                      <button
                        onClick={() => setShowAssignModal(delivery.id)}
                        className="text-blue-600 hover:text-blue-800 ml-2 text-sm"
                      >
                        Assign
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold">${delivery.deliveryFee}</td>
                  <td className="px-6 py-4">
                    <button
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      View Details
                    </button>
                  </td>

                  {/* Assign Driver Modal */}
                  {showAssignModal === delivery.id && (
                    <td colSpan="7" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        <h3 className="text-xl font-bold mb-4">Assign Driver</h3>
                        <div className="mb-4">
                          <label className="block text-sm font-medium mb-2">Select Driver</label>
                          <select
                            value={selectedDriver}
                            onChange={(e) => setSelectedDriver(e.target.value)}
                            className="w-full border rounded px-4 py-2"
                          >
                            <option value="">Choose a driver...</option>
                            {drivers.map(driver => (
                              <option key={driver} value={driver}>{driver}</option>
                            ))}
                          </select>
                        </div>
                        <div className="flex gap-3">
                          <button
                            onClick={() => assignDriver(delivery.id, selectedDriver)}
                            disabled={!selectedDriver}
                            className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 font-bold disabled:bg-gray-400"
                          >
                            Assign
                          </button>
                          <button
                            onClick={() => setShowAssignModal(null)}
                            className="flex-1 bg-gray-400 text-white py-2 rounded hover:bg-gray-500 font-bold"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Delivery Fee Modal */}
      {showFeeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h3 className="text-xl font-bold mb-4">Edit Delivery Fee</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Delivery Fee ($)</label>
              <input
                type="number"
                defaultValue={deliveryFee}
                onChange={(e) => setDeliveryFee(parseFloat(e.target.value))}
                className="w-full border rounded px-4 py-2"
                min="0"
                step="0.01"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => updateDeliveryFee(parseFloat(document.querySelector('input[type="number"]').value))}
                className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 font-bold"
              >
                Save
              </button>
              <button
                onClick={() => setShowFeeModal(false)}
                className="flex-1 bg-gray-400 text-white py-2 rounded hover:bg-gray-500 font-bold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDelivery;

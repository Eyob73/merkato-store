import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AdminOrderManagement() {
  const [orders, setOrders] = useState([
    {
      id: '#ORD001',
      date: '2024-06-01',
      customer: 'John Smith',
      items: 3,
      total: 1250,
      status: 'delivered',
      payment: 'paid',
      address: '123 Main St, City, Country',
      phone: '+1-555-0101',
    },
    {
      id: '#ORD002',
      date: '2024-06-05',
      customer: 'Jane Doe',
      items: 1,
      total: 750,
      status: 'in-transit',
      payment: 'paid',
      address: '456 Oak Ave, City, Country',
      phone: '+1-555-0102',
    },
    {
      id: '#ORD003',
      date: '2024-06-08',
      customer: 'Bob Johnson',
      items: 2,
      total: 1500,
      status: 'processing',
      payment: 'pending',
      address: '789 Pine Rd, City, Country',
      phone: '+1-555-0103',
    },
    {
      id: '#ORD004',
      date: '2024-06-08',
      customer: 'Alice Williams',
      items: 1,
      total: 600,
      status: 'pending',
      payment: 'paid',
      address: '321 Elm St, City, Country',
      phone: '+1-555-0104',
    },
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showInvoice, setShowInvoice] = useState(null);

  // Update order status
  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  // Get status styling
  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'in-transit':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
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
      case 'processing':
        return 'Processing';
      case 'pending':
        return 'Pending';
      case 'cancelled':
        return 'Cancelled';
      default:
        return status;
    }
  };

  // Print invoice
  const printInvoice = (order) => {
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write(`
      <html>
        <head>
          <title>Invoice ${order.id}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .invoice-header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 20px; }
            .invoice-details { margin-bottom: 30px; }
            .invoice-details h3 { margin: 10px 0; }
            .invoice-details p { margin: 5px 0; }
            .order-items { margin-bottom: 30px; }
            .order-items table { width: 100%; border-collapse: collapse; }
            .order-items th, .order-items td { border: 1px solid #ddd; padding: 10px; text-align: left; }
            .order-items th { background-color: #f0f0f0; }
            .total { text-align: right; font-size: 18px; font-weight: bold; margin-top: 20px; }
            .footer { text-align: center; margin-top: 40px; color: #666; }
          </style>
        </head>
        <body>
          <div class="invoice-header">
            <h1>INVOICE</h1>
            <p>${order.id}</p>
          </div>
          
          <div class="invoice-details">
            <h3>Customer Information</h3>
            <p><strong>Name:</strong> ${order.customer}</p>
            <p><strong>Phone:</strong> ${order.phone}</p>
            <p><strong>Address:</strong> ${order.address}</p>
            <p><strong>Order Date:</strong> ${order.date}</p>
          </div>

          <div class="order-items">
            <h3>Order Details</h3>
            <table>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Order Items (${order.items} items)</td>
                  <td>1</td>
                  <td>$${order.total}</td>
                  <td>$${order.total}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="total">
            <p>Total Amount: $${order.total}</p>
            <p>Payment Status: ${order.payment === 'paid' ? 'PAID' : 'PENDING'}</p>
            <p>Order Status: ${getStatusText(order.status)}</p>
          </div>

          <div class="footer">
            <p>Thank you for your business!</p>
            <p>For inquiries, contact: info@merkato.com</p>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Order Management</h1>
            <Link to="/" className="text-blue-600 hover:underline">← Back to Home</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Orders Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium">Total Orders</p>
            <p className="text-3xl font-bold mt-2">{orders.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium">Pending</p>
            <p className="text-3xl font-bold text-orange-600 mt-2">{orders.filter(o => o.status === 'pending').length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium">In Transit</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">{orders.filter(o => o.status === 'in-transit').length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium">Delivered</p>
            <p className="text-3xl font-bold text-green-600 mt-2">{orders.filter(o => o.status === 'delivered').length}</p>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-4 text-left font-bold">Order ID</th>
                <th className="px-6 py-4 text-left font-bold">Customer</th>
                <th className="px-6 py-4 text-left font-bold">Date</th>
                <th className="px-6 py-4 text-left font-bold">Items</th>
                <th className="px-6 py-4 text-left font-bold">Total</th>
                <th className="px-6 py-4 text-left font-bold">Status</th>
                <th className="px-6 py-4 text-left font-bold">Payment</th>
                <th className="px-6 py-4 text-left font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-bold text-blue-600 cursor-pointer hover:underline" onClick={() => setSelectedOrder(order)}>
                    {order.id}
                  </td>
                  <td className="px-6 py-4">{order.customer}</td>
                  <td className="px-6 py-4 text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 text-center font-medium">{order.items}</td>
                  <td className="px-6 py-4 font-bold">${order.total}</td>
                  <td className="px-6 py-4">
                    <select
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                      className={`px-3 py-1 rounded-full text-sm font-bold border-none cursor-pointer ${getStatusColor(order.status)}`}
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="in-transit">In Transit</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${order.payment === 'paid' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                      {order.payment === 'paid' ? 'Paid' : 'Pending'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        View
                      </button>
                      <button
                        onClick={() => printInvoice(order)}
                        className="text-green-600 hover:text-green-800 font-medium text-sm"
                      >
                        Print
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl max-h-96 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Order Details</h2>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-gray-600 hover:text-gray-800 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 text-sm">Order ID</p>
                  <p className="font-bold">{selectedOrder.id}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Order Date</p>
                  <p className="font-bold">{selectedOrder.date}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Customer</p>
                  <p className="font-bold">{selectedOrder.customer}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Phone</p>
                  <p className="font-bold">{selectedOrder.phone}</p>
                </div>
              </div>

              <div>
                <p className="text-gray-600 text-sm">Address</p>
                <p className="font-bold">{selectedOrder.address}</p>
              </div>

              <div className="border-t pt-4">
                <p className="text-gray-600 text-sm">Order Summary</p>
                <p className="font-bold mb-2">Items: {selectedOrder.items}</p>
                <p className="text-2xl font-bold text-blue-600">Total: ${selectedOrder.total}</p>
              </div>

              <div className="border-t pt-4">
                <p className="text-gray-600 text-sm mb-2">Status</p>
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${getStatusColor(selectedOrder.status)}`}>
                  {getStatusText(selectedOrder.status)}
                </span>
              </div>

              <div className="border-t pt-4 flex gap-3">
                <button
                  onClick={() => printInvoice(selectedOrder)}
                  className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 font-bold"
                >
                  Print Invoice
                </button>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="flex-1 bg-gray-400 text-white py-2 rounded hover:bg-gray-500 font-bold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminOrderManagement;

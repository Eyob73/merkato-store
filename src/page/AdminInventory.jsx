import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AdminInventory() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', sku: 'SKU001', quantity: 50, reorderLevel: 10, price: 500, lastUpdated: '2024-06-08' },
    { id: 2, name: 'Product 2', sku: 'SKU002', quantity: 25, reorderLevel: 10, price: 750, lastUpdated: '2024-06-07' },
    { id: 3, name: 'Product 3', sku: 'SKU003', quantity: 5, reorderLevel: 10, price: 1000, lastUpdated: '2024-06-05' },
    { id: 4, name: 'Product 4', sku: 'SKU004', quantity: 0, reorderLevel: 10, price: 600, lastUpdated: '2024-06-03' },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editQuantity, setEditQuantity] = useState('');
  const [showAddStock, setShowAddStock] = useState(null);
  const [addQuantity, setAddQuantity] = useState('');

  // Update stock quantity
  const updateStock = (id, newQuantity) => {
    setProducts(products.map(product =>
      product.id === id 
        ? { ...product, quantity: newQuantity, lastUpdated: new Date().toISOString().split('T')[0] }
        : product
    ));
    setEditingId(null);
    setEditQuantity('');
  };

  // Add stock to inventory
  const addStock = (id, addQty) => {
    const product = products.find(p => p.id === id);
    if (product) {
      updateStock(id, product.quantity + parseInt(addQty));
      setShowAddStock(null);
      setAddQuantity('');
    }
  };

  // Check stock status
  const getStockStatus = (quantity, reorderLevel) => {
    if (quantity === 0) return { status: 'Out of Stock', color: 'bg-red-100 text-red-800' };
    if (quantity <= reorderLevel) return { status: 'Low Stock', color: 'bg-yellow-100 text-yellow-800' };
    return { status: 'In Stock', color: 'bg-green-100 text-green-800' };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Inventory Management</h1>
            <Link to="/" className="text-blue-600 hover:underline">← Back to Home</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Inventory Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium">Total Products</p>
            <p className="text-3xl font-bold mt-2">{products.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium">Total Stock</p>
            <p className="text-3xl font-bold mt-2">{products.reduce((sum, p) => sum + p.quantity, 0)}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium">Out of Stock</p>
            <p className="text-3xl font-bold text-red-600 mt-2">{products.filter(p => p.quantity === 0).length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 text-sm font-medium">Low Stock</p>
            <p className="text-3xl font-bold text-yellow-600 mt-2">{products.filter(p => p.quantity > 0 && p.quantity <= 10).length}</p>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-4 text-left font-bold">Product Name</th>
                <th className="px-6 py-4 text-left font-bold">SKU</th>
                <th className="px-6 py-4 text-left font-bold">Current Stock</th>
                <th className="px-6 py-4 text-left font-bold">Reorder Level</th>
                <th className="px-6 py-4 text-left font-bold">Status</th>
                <th className="px-6 py-4 text-left font-bold">Last Updated</th>
                <th className="px-6 py-4 text-left font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => {
                const stockStatus = getStockStatus(product.quantity, product.reorderLevel);
                return (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">{product.name}</td>
                    <td className="px-6 py-4 text-gray-600">{product.sku}</td>
                    <td className="px-6 py-4">
                      {editingId === product.id ? (
                        <div className="flex gap-2">
                          <input
                            type="number"
                            min="0"
                            value={editQuantity}
                            onChange={(e) => setEditQuantity(e.target.value)}
                            className="w-20 border rounded px-2 py-1"
                          />
                          <button
                            onClick={() => updateStock(product.id, parseInt(editQuantity))}
                            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500 text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <span className="font-bold text-lg">{product.quantity}</span>
                      )}
                    </td>
                    <td className="px-6 py-4">{product.reorderLevel}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${stockStatus.color}`}>
                        {stockStatus.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{product.lastUpdated}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setEditingId(product.id);
                            setEditQuantity(product.quantity);
                          }}
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => setShowAddStock(product.id)}
                          className="text-green-600 hover:text-green-800 font-medium text-sm"
                        >
                          Add Stock
                        </button>

                        {/* Add Stock Modal */}
                        {showAddStock === product.id && (
                          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                              <h3 className="text-xl font-bold mb-4">Add Stock for {product.name}</h3>
                              <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Quantity to Add</label>
                                <input
                                  type="number"
                                  min="1"
                                  value={addQuantity}
                                  onChange={(e) => setAddQuantity(e.target.value)}
                                  className="w-full border rounded px-4 py-2"
                                  placeholder="Enter quantity"
                                />
                              </div>
                              <p className="text-gray-600 mb-4">
                                Current: {product.quantity} → New: {product.quantity + (parseInt(addQuantity) || 0)}
                              </p>
                              <div className="flex gap-3">
                                <button
                                  onClick={() => addStock(product.id, addQuantity)}
                                  className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 font-bold"
                                >
                                  Confirm
                                </button>
                                <button
                                  onClick={() => {
                                    setShowAddStock(null);
                                    setAddQuantity('');
                                  }}
                                  className="flex-1 bg-gray-400 text-white py-2 rounded hover:bg-gray-500 font-bold"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminInventory;

import React from 'react';
import { Product } from '../../../types';
import { Plus, X } from 'lucide-react';

interface BasicInfoTabProps {
  product: Product;
  setProduct: (product: Product) => void;
}

export default function BasicInfoTab({ product, setProduct }: BasicInfoTabProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const addBadge = () => {
    setProduct({
      ...product,
      badges: [...product.badges, '']
    });
  };

  const updateBadge = (index: number, value: string) => {
    const newBadges = [...product.badges];
    newBadges[index] = value;
    setProduct({ ...product, badges: newBadges });
  };

  const removeBadge = (index: number) => {
    setProduct({
      ...product,
      badges: product.badges.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="p-6 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Product ID</label>
          <input
            type="text"
            name="id"
            value={product.id}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
          <input
            type="number"
            name="rating"
            value={product.rating}
            onChange={handleChange}
            step="0.1"
            min="0"
            max="5"
            className="w-40 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Number of Reviews</label>
          <input
            type="number"
            name="reviews"
            value={product.reviews}
            onChange={handleChange}
            className="w-40 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <label className="block text-sm font-medium text-gray-700">Product Badges</label>
          <button
            onClick={addBadge}
            className="inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700"
          >
            <Plus size={16} />
            Add Badge
          </button>
        </div>
        <div className="space-y-3">
          {product.badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="text"
                value={badge}
                onChange={(e) => updateBadge(index, e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Enter badge text"
              />
              <button
                onClick={() => removeBadge(index)}
                className="text-gray-400 hover:text-red-500"
              >
                <X size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
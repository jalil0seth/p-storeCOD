import React from 'react';
import { Product, Size } from '../../../types';
import { Plus, X, Check } from 'lucide-react';

interface PricingTabProps {
  product: Product;
  setProduct: (product: Product) => void;
}

export default function PricingTab({ product, setProduct }: PricingTabProps) {
  const addSize = () => {
    const newSize: Size = {
      value: '',
      label: '',
      price: 0,
      popular: false
    };
    setProduct({
      ...product,
      sizes: [...product.sizes, newSize]
    });
  };

  const updateSize = (index: number, field: keyof Size, value: string | number | boolean) => {
    const newSizes = [...product.sizes];
    newSizes[index] = {
      ...newSizes[index],
      [field]: value
    };
    setProduct({ ...product, sizes: newSizes });
  };

  const removeSize = (index: number) => {
    setProduct({
      ...product,
      sizes: product.sizes.filter((_, i) => i !== index)
    });
  };

  const updateUpsell = (field: string, value: string | number) => {
    setProduct({
      ...product,
      upsell: {
        ...product.upsell,
        [field]: value
      }
    });
  };

  return (
    <div className="p-6 space-y-8">
      <div>
        <div className="flex items-center justify-between mb-4">
          <label className="block text-sm font-medium text-gray-700">Product Sizes</label>
          <button
            onClick={addSize}
            className="inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700"
          >
            <Plus size={16} />
            Add Size
          </button>
        </div>
        <div className="space-y-4">
          {product.sizes.map((size, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-1">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Value</label>
                  <input
                    type="text"
                    value={size.value}
                    onChange={(e) => updateSize(index, 'value', e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="e.g., 30ml"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Label</label>
                  <input
                    type="text"
                    value={size.label}
                    onChange={(e) => updateSize(index, 'label', e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="e.g., 30 مل"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Price</label>
                  <input
                    type="number"
                    value={size.price}
                    onChange={(e) => updateSize(index, 'price', Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={size.popular}
                      onChange={(e) => updateSize(index, 'popular', e.target.checked)}
                      className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                    />
                    <span className="text-sm text-gray-600">Popular Size</span>
                  </label>
                </div>
              </div>
              <button
                onClick={() => removeSize(index)}
                className="text-gray-400 hover:text-red-500"
              >
                <X size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100 pt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Upsell Product</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={product.upsell.name}
              onChange={(e) => updateUpsell('name', e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
            <input
              type="number"
              value={product.upsell.price}
              onChange={(e) => updateUpsell('price', Number(e.target.value))}
              className="w-40 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <input
              type="text"
              value={product.upsell.description}
              onChange={(e) => updateUpsell('description', e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
            <input
              type="text"
              value={product.upsell.image}
              onChange={(e) => updateUpsell('image', e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            {product.upsell.image && (
              <img
                src={product.upsell.image}
                alt="Upsell product"
                className="mt-2 h-24 w-24 object-cover rounded-lg border border-gray-200"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
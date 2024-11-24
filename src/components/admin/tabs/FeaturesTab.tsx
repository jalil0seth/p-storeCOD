import React from 'react';
import { Product } from '../../../types';
import { Plus, X } from 'lucide-react';

interface FeaturesTabProps {
  product: Product;
  setProduct: (product: Product) => void;
}

export default function FeaturesTab({ product, setProduct }: FeaturesTabProps) {
  const addFeature = () => {
    setProduct({
      ...product,
      features: [...product.features, { title: '', description: '' }]
    });
  };

  const updateFeature = (index: number, field: 'title' | 'description', value: string) => {
    const newFeatures = [...product.features];
    newFeatures[index] = {
      ...newFeatures[index],
      [field]: value
    };
    setProduct({ ...product, features: newFeatures });
  };

  const removeFeature = (index: number) => {
    setProduct({
      ...product,
      features: product.features.filter((_, i) => i !== index)
    });
  };

  const addUsage = () => {
    setProduct({
      ...product,
      usage: [...product.usage, '']
    });
  };

  const updateUsage = (index: number, value: string) => {
    const newUsage = [...product.usage];
    newUsage[index] = value;
    setProduct({ ...product, usage: newUsage });
  };

  const removeUsage = (index: number) => {
    setProduct({
      ...product,
      usage: product.usage.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="p-6 space-y-8">
      <div>
        <div className="flex items-center justify-between mb-4">
          <label className="block text-sm font-medium text-gray-700">Product Features</label>
          <button
            onClick={addFeature}
            className="inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700"
          >
            <Plus size={16} />
            Add Feature
          </button>
        </div>
        <div className="space-y-4">
          {product.features.map((feature, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-1 space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Title</label>
                    <input
                      type="text"
                      value={feature.title}
                      onChange={(e) => updateFeature(index, 'title', e.target.value)}
                      className="w-full px-3 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Description</label>
                    <input
                      type="text"
                      value={feature.description}
                      onChange={(e) => updateFeature(index, 'description', e.target.value)}
                      className="w-full px-3 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <button
                  onClick={() => removeFeature(index)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100 pt-8">
        <div className="flex items-center justify-between mb-4">
          <label className="block text-sm font-medium text-gray-700">Usage Instructions</label>
          <button
            onClick={addUsage}
            className="inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700"
          >
            <Plus size={16} />
            Add Instruction
          </button>
        </div>
        <div className="space-y-3">
          {product.usage.map((instruction, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="text"
                value={instruction}
                onChange={(e) => updateUsage(index, e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Enter usage instruction"
              />
              <button
                onClick={() => removeUsage(index)}
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
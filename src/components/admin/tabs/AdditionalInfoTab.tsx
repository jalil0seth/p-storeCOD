import React from 'react';
import { Product } from '../../../types';
import { Plus, X } from 'lucide-react';

interface AdditionalInfoTabProps {
  product: Product;
  setProduct: (product: Product) => void;
}

export default function AdditionalInfoTab({ product, setProduct }: AdditionalInfoTabProps) {
  const addInfo = () => {
    setProduct({
      ...product,
      additionalInfo: [...product.additionalInfo, { label: '', value: '' }]
    });
  };

  const updateInfo = (index: number, field: 'label' | 'value', value: string) => {
    const newInfo = [...product.additionalInfo];
    newInfo[index] = {
      ...newInfo[index],
      [field]: value
    };
    setProduct({ ...product, additionalInfo: newInfo });
  };

  const removeInfo = (index: number) => {
    setProduct({
      ...product,
      additionalInfo: product.additionalInfo.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="p-6 space-y-8">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Ingredients</label>
        <textarea
          value={product.ingredients}
          onChange={(e) => setProduct({ ...product, ingredients: e.target.value })}
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          placeholder="Enter product ingredients"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <label className="block text-sm font-medium text-gray-700">Additional Information</label>
          <button
            onClick={addInfo}
            className="inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700"
          >
            <Plus size={16} />
            Add Info
          </button>
        </div>
        <div className="space-y-4">
          {product.additionalInfo.map((info, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Label</label>
                  <input
                    type="text"
                    value={info.label}
                    onChange={(e) => updateInfo(index, 'label', e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="e.g., Country of Origin"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Value</label>
                  <input
                    type="text"
                    value={info.value}
                    onChange={(e) => updateInfo(index, 'value', e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="e.g., Morocco"
                  />
                </div>
              </div>
              <button
                onClick={() => removeInfo(index)}
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
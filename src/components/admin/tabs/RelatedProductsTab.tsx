import React from 'react';
import { Product } from '../../../types';
import { Plus, X } from 'lucide-react';

interface RelatedProductsTabProps {
  product: Product;
  setProduct: (product: Product) => void;
}

export default function RelatedProductsTab({ product, setProduct }: RelatedProductsTabProps) {
  const addRelatedProduct = () => {
    const newProduct = {
      id: product.relatedProducts.length + 1,
      name: '',
      price: 0,
      image: ''
    };
    setProduct({
      ...product,
      relatedProducts: [...product.relatedProducts, newProduct]
    });
  };

  const updateRelatedProduct = (index: number, field: string, value: string | number) => {
    const newProducts = [...product.relatedProducts];
    newProducts[index] = {
      ...newProducts[index],
      [field]: field === 'price' ? Number(value) : value
    };
    setProduct({ ...product, relatedProducts: newProducts });
  };

  const removeRelatedProduct = (index: number) => {
    setProduct({
      ...product,
      relatedProducts: product.relatedProducts.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <label className="block text-sm font-medium text-gray-700">Related Products</label>
        <button
          onClick={addRelatedProduct}
          className="inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700"
        >
          <Plus size={16} />
          Add Product
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {product.relatedProducts.map((relatedProduct, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-start gap-4">
              <div className="flex-1 space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Product Name</label>
                  <input
                    type="text"
                    value={relatedProduct.name}
                    onChange={(e) => updateRelatedProduct(index, 'name', e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Price</label>
                  <input
                    type="number"
                    value={relatedProduct.price}
                    onChange={(e) => updateRelatedProduct(index, 'price', e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Image URL</label>
                  <input
                    type="text"
                    value={relatedProduct.image}
                    onChange={(e) => updateRelatedProduct(index, 'image', e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                  {relatedProduct.image && (
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="mt-2 h-24 w-24 object-cover rounded-lg border border-gray-200"
                    />
                  )}
                </div>
              </div>
              <button
                onClick={() => removeRelatedProduct(index)}
                className="text-gray-400 hover:text-red-500"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
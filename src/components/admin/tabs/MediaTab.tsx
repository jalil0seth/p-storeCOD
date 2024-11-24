import React from 'react';
import { Product } from '../../../types';
import { Plus, X } from 'lucide-react';

interface MediaTabProps {
  product: Product;
  setProduct: (product: Product) => void;
}

export default function MediaTab({ product, setProduct }: MediaTabProps) {
  const handleMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, mainImage: e.target.value });
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, video: e.target.value });
  };

  const addGalleryImage = () => {
    setProduct({
      ...product,
      gallery: [...product.gallery, '']
    });
  };

  const updateGalleryImage = (index: number, value: string) => {
    const newGallery = [...product.gallery];
    newGallery[index] = value;
    setProduct({ ...product, gallery: newGallery });
  };

  const removeGalleryImage = (index: number) => {
    setProduct({
      ...product,
      gallery: product.gallery.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="p-6 space-y-8">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Main Product Image</label>
        <input
          type="text"
          value={product.mainImage}
          onChange={handleMainImageChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          placeholder="Enter image URL"
        />
        {product.mainImage && (
          <img
            src={product.mainImage}
            alt="Main product"
            className="mt-2 h-48 w-48 object-cover rounded-lg border border-gray-200"
          />
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Product Video URL</label>
        <input
          type="text"
          value={product.video}
          onChange={handleVideoChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          placeholder="Enter video URL"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <label className="block text-sm font-medium text-gray-700">Gallery Images</label>
          <button
            onClick={addGalleryImage}
            className="inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700"
          >
            <Plus size={16} />
            Add Image
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.gallery.map((image, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="flex-1 space-y-2">
                <input
                  type="text"
                  value={image}
                  onChange={(e) => updateGalleryImage(index, e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Enter image URL"
                />
                {image && (
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="h-24 w-24 object-cover rounded-lg border border-gray-200"
                  />
                )}
              </div>
              <button
                onClick={() => removeGalleryImage(index)}
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
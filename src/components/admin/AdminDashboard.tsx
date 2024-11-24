import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Settings, Image, Tag, ListPlus, Info, Package, Link } from 'lucide-react';
import productData from '../../data/product.json';
import BasicInfoTab from './tabs/BasicInfoTab';
import MediaTab from './tabs/MediaTab';
import PricingTab from './tabs/PricingTab';
import FeaturesTab from './tabs/FeaturesTab';
import AdditionalInfoTab from './tabs/AdditionalInfoTab';
import RelatedProductsTab from './tabs/RelatedProductsTab';
import { downloadJson } from '../../lib/utils';

const AdminDashboard = () => {
  const [product, setProduct] = useState(productData.product);

  const handleSave = () => {
    const jsonData = { product };
    downloadJson(jsonData, 'product.json');
    alert('Changes saved! Download will begin shortly.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Product Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">Manage your product information</p>
          </div>
          <div className="flex gap-3">
            <a
              href="/"
              target="_blank"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              <Link size={16} />
              View Store
            </a>
            <button
              onClick={handleSave}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
            >
              Save Changes
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="border-b border-gray-100 w-full p-1">
              <TabsTrigger value="basic" className="flex items-center gap-2">
                <Settings size={16} />
                Basic Info
              </TabsTrigger>
              <TabsTrigger value="media" className="flex items-center gap-2">
                <Image size={16} />
                Media
              </TabsTrigger>
              <TabsTrigger value="pricing" className="flex items-center gap-2">
                <Tag size={16} />
                Pricing & Sizes
              </TabsTrigger>
              <TabsTrigger value="features" className="flex items-center gap-2">
                <ListPlus size={16} />
                Features
              </TabsTrigger>
              <TabsTrigger value="additional" className="flex items-center gap-2">
                <Info size={16} />
                Additional Info
              </TabsTrigger>
              <TabsTrigger value="related" className="flex items-center gap-2">
                <Package size={16} />
                Related Products
              </TabsTrigger>
            </TabsList>

            <TabsContent value="basic">
              <BasicInfoTab product={product} setProduct={setProduct} />
            </TabsContent>

            <TabsContent value="media">
              <MediaTab product={product} setProduct={setProduct} />
            </TabsContent>

            <TabsContent value="pricing">
              <PricingTab product={product} setProduct={setProduct} />
            </TabsContent>

            <TabsContent value="features">
              <FeaturesTab product={product} setProduct={setProduct} />
            </TabsContent>

            <TabsContent value="additional">
              <AdditionalInfoTab product={product} setProduct={setProduct} />
            </TabsContent>

            <TabsContent value="related">
              <RelatedProductsTab product={product} setProduct={setProduct} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
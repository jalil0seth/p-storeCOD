import React, { useState } from 'react';
import { Search, User, MapPin, Menu, X, ShoppingBag } from 'lucide-react';

const categories = [
  {
    name: 'العناية بالبشرة',
    subcategories: ['زيوت طبيعية', 'أقنعة الوجه', 'كريمات مرطبة', 'غسول الوجه']
  },
  {
    name: 'العناية بالشعر',
    subcategories: ['زيت الأرغان', 'شامبو طبيعي', 'بلسم الشعر', 'أقنعة الشعر']
  },
  {
    name: 'منتجات التجميل',
    subcategories: ['مكياج طبيعي', 'أحمر شفاه', 'مسكرة طبيعية', 'كريم أساس']
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');

  return (
    <header className="bg-white shadow-sm relative z-50" dir="rtl">
      {/* Top Bar */}
      <div className="bg-emerald-600 text-white py-2">
        <div className="container mx-auto px-4 text-center text-sm">
          شحن مجاني للطلبات فوق 500 درهم | توصيل سريع خلال 48 ساعة
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#B76E79]">بيوتي مغرب</div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 space-x-reverse">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative group"
                onMouseEnter={() => setActiveCategory(category.name)}
                onMouseLeave={() => setActiveCategory('')}
              >
                <button className="text-gray-700 hover:text-[#B76E79] py-8">
                  {category.name}
                </button>
                {activeCategory === category.name && (
                  <div className="absolute top-full right-0 w-64 bg-white shadow-lg rounded-lg p-4 border border-gray-100">
                    <div className="grid gap-2">
                      {category.subcategories.map((sub) => (
                        <a
                          key={sub}
                          href="#"
                          className="text-gray-600 hover:text-[#B76E79] hover:bg-gray-50 px-4 py-2 rounded-md"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-6 space-x-reverse">
            <button className="text-gray-700 hover:text-[#B76E79]">
              <Search size={20} />
            </button>
            <button className="text-gray-700 hover:text-[#B76E79]">
              <User size={20} />
            </button>
            <button className="text-gray-700 hover:text-[#B76E79]">
              <ShoppingBag size={20} />
            </button>
            <button className="flex items-center text-gray-700 hover:text-[#B76E79]">
              <MapPin size={20} />
              <span className="mr-2">الدار البيضاء</span>
            </button>
            <button
              className="lg:hidden text-gray-700 hover:text-[#B76E79]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-4">
            {categories.map((category) => (
              <div key={category.name} className="mb-4">
                <div className="font-medium text-gray-900 mb-2">{category.name}</div>
                <div className="grid gap-2 pr-4">
                  {category.subcategories.map((sub) => (
                    <a
                      key={sub}
                      href="#"
                      className="text-gray-600 hover:text-[#B76E79]"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
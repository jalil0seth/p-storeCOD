import React from 'react';
import { Search, User, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-[#B76E79]">بيوتي مغرب</div>
          
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            <a href="#" className="text-gray-700 hover:text-[#B76E79]">الرئيسية</a>
            <a href="#" className="text-gray-700 hover:text-[#B76E79]">منتجاتنا</a>
            <a href="#" className="text-gray-700 hover:text-[#B76E79]">العناية بالبشرة</a>
            <a href="#" className="text-gray-700 hover:text-[#B76E79]">العناية بالشعر</a>
          </nav>

          <div className="flex items-center space-x-6 space-x-reverse">
            <button className="text-gray-700 hover:text-[#B76E79]">
              <Search size={20} />
            </button>
            <button className="text-gray-700 hover:text-[#B76E79]">
              <User size={20} />
            </button>
            <button className="flex items-center text-gray-700 hover:text-[#B76E79]">
              <MapPin size={20} />
              <span className="mr-2">الدار البيضاء</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
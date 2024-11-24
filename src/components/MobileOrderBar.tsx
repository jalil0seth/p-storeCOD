import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface MobileOrderBarProps {
  price: number;
  onOrderClick: () => void;
}

export default function MobileOrderBar({ price, onOrderClick }: MobileOrderBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden shadow-lg" dir="rtl">
      <div className="flex items-center justify-between gap-4 max-w-[80rem] mx-auto">
        <div>
          <div className="text-sm text-gray-600">السعر الإجمالي</div>
          <div className="text-xl font-bold text-emerald-600">{price} درهم</div>
        </div>
        <button
          onClick={onOrderClick}
          className="flex-1 bg-emerald-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
        >
          <ShoppingCart size={20} />
          اطلب الآن
        </button>
      </div>
    </div>
  );
}
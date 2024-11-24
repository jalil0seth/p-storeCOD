import React, { useState } from 'react';
import { MapPin, Phone, Check, Package, ShoppingCart } from 'lucide-react';

interface OrderFormProps {
  pricing: {
    basePrice: number;
    subtotal: number;
    discount: number;
    upsellPrice: number;
    total: number;
  };
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
  hasUpsell: boolean;
  setHasUpsell: (hasUpsell: boolean) => void;
}

const SIZES = [
  { value: '30ml', label: '30 مل', price: 149 },
  { value: '100ml', label: '100 مل', price: 299 },
  { value: '200ml', label: '200 مل', price: 499 }
];

const QUANTITIES = [1, 2, 3];

export default function OrderForm({ 
  pricing,
  selectedSize, 
  setSelectedSize, 
  quantity, 
  setQuantity,
  hasUpsell,
  setHasUpsell
}: OrderFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    address: '',
  });

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg" dir="rtl">
      <div className="space-y-8">
        {/* Product Variations */}
        <div>
          <h3 className="text-lg font-semibold mb-4">اختر الحجم</h3>
          <div className="grid grid-cols-3 gap-3">
            {SIZES.map((size) => (
              <button
                key={size.value}
                onClick={() => setSelectedSize(size.value)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedSize === size.value
                    ? 'border-emerald-600 bg-emerald-50 shadow-sm'
                    : 'border-gray-200 hover:border-emerald-200'
                }`}
              >
                <div className="text-sm font-medium">{size.label}</div>
                <div className={`text-base font-bold mt-1 ${
                  selectedSize === size.value ? 'text-emerald-600' : 'text-gray-900'
                }`}>{size.price} درهم</div>
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selection */}
        <div>
          <h3 className="text-lg font-semibold mb-4">الكمية</h3>
          <div className="grid grid-cols-3 gap-3">
            {QUANTITIES.map((value) => (
              <button
                key={value}
                onClick={() => setQuantity(value)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  quantity === value
                    ? 'border-emerald-600 bg-emerald-50 shadow-sm'
                    : 'border-gray-200 hover:border-emerald-200'
                }`}
              >
                <div className="text-sm font-medium">كمية {value}</div>
                <div className={`text-base font-bold mt-1 ${
                  quantity === value ? 'text-emerald-600' : 'text-gray-900'
                }`}>{value} قطعة</div>
              </button>
            ))}
          </div>
          {quantity >= 2 && (
            <div className="mt-3 bg-emerald-50 text-emerald-700 p-3 rounded-xl flex items-center gap-2">
              <Check size={20} />
              <span className="font-medium">خصم 20% تم تطبيقه!</span>
            </div>
          )}
        </div>

        {/* Upsell Option */}
        <div className="border-2 border-gray-100 rounded-xl p-4 hover:border-emerald-200 transition-colors">
          <label className="flex items-start gap-4 cursor-pointer">
            <input
              type="checkbox"
              checked={hasUpsell}
              onChange={(e) => setHasUpsell(e.target.checked)}
              className="mt-1 w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500"
            />
            <div className="flex-1">
              <div className="font-medium text-lg">أضف طقم العناية الكامل</div>
              <div className="text-sm text-gray-600 mt-1">
                احصل على طقم العناية الكامل يتضمن قناع الوجه وفرشاة خاصة للتطبيق
              </div>
              <div className="text-emerald-600 font-bold mt-2">+99 درهم فقط</div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=200" 
              alt="طقم العناية"
              className="w-24 h-24 rounded-lg object-cover"
            />
          </label>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-xl p-6 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">السعر الأساسي ({quantity} قطعة)</span>
            <span>{pricing.subtotal} درهم</span>
          </div>
          {pricing.discount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-emerald-600">خصم الكمية (20%)</span>
              <span className="text-emerald-600">-{pricing.discount} درهم</span>
            </div>
          )}
          {hasUpsell && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">طقم العناية الكامل</span>
              <span>{pricing.upsellPrice} درهم</span>
            </div>
          )}
          <div className="border-t border-gray-200 pt-3 flex justify-between font-bold">
            <span>الإجمالي</span>
            <span className="text-emerald-600 text-xl">{pricing.total} درهم</span>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل *</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="أدخل اسمك الكامل"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف *</label>
              <div className="relative">
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent pl-12"
                  placeholder="0600000000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <img src="https://flagcdn.com/w20/ma.png" alt="Morocco" className="h-5 w-auto" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">المدينة *</label>
            <select
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            >
              <option value="">اختر مدينتك</option>
              <option value="casablanca">الدار البيضاء</option>
              <option value="rabat">الرباط</option>
              <option value="marrakech">مراكش</option>
              <option value="fes">فاس</option>
              <option value="tangier">طنجة</option>
              <option value="agadir">أغادير</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">العنوان *</label>
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent pr-10"
                placeholder="أدخل عنوانك الكامل"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>

        <button className="hidden md:flex w-full bg-emerald-600 text-white py-4 rounded-xl font-medium hover:bg-emerald-700 transition-colors text-lg items-center justify-center gap-2">
          <ShoppingCart size={20} />
          اطلب الآن - الدفع عند الاستلام
        </button>

        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          <div className="p-3 bg-gray-50 rounded-xl">
            <div className="font-medium">توصيل سريع</div>
            <div className="text-gray-500">2-4 أيام عمل</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-xl">
            <div className="font-medium">الدفع عند الاستلام</div>
            <div className="text-gray-500">آمن و مضمون</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-xl">
            <div className="font-medium">ضمان الجودة</div>
            <div className="text-gray-500">منتج أصلي 100%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState, useRef } from 'react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import Header from './Header';
import OrderForm from './OrderForm';
import MobileOrderBar from './MobileOrderBar';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const relatedProducts: Product[] = [
  {
    id: 1,
    name: "زيت الأرغان النقي العضوي",
    price: 199,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "الزعفران الفاخر",
    price: 299,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "قناع الغاسول الطبيعي",
    price: 149,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=400"
  }
];

export function calculatePrice(size: string, quantity: number, hasUpsell: boolean) {
  const SIZES = {
    '30ml': 149,
    '100ml': 299,
    '200ml': 499
  };
  const basePrice = SIZES[size as keyof typeof SIZES];
  const subtotal = basePrice * quantity;
  const discount = quantity >= 2 ? subtotal * 0.2 : 0;
  const upsellPrice = hasUpsell ? 99 : 0;
  return {
    basePrice,
    subtotal,
    discount,
    upsellPrice,
    total: subtotal - discount + upsellPrice
  };
}

function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('100ml');
  const [hasUpsell, setHasUpsell] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const pricing = calculatePrice(selectedSize, quantity, hasUpsell);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Navigation Breadcrumb */}
      <div className="max-w-[80rem] mx-auto px-4 py-4 text-sm text-gray-600" dir="rtl">
        <div className="flex items-center gap-2">
          <span>الرئيسية</span>
          <ChevronRight size={16} />
          <span>العناية بالبشرة</span>
          <ChevronRight size={16} />
          <span className="text-emerald-600">زيت أرغان عضوي فاخر</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[80rem] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white">
              <img 
                src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800" 
                alt="زيت أرغان عضوي فاخر" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden bg-white border-2 border-gray-100 hover:border-emerald-500 cursor-pointer transition-colors">
                  <img 
                    src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=200" 
                    alt={`صورة المنتج ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Order Form */}
          <div ref={formRef}>
            <OrderForm 
              pricing={pricing}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              quantity={quantity}
              setQuantity={setQuantity}
              hasUpsell={hasUpsell}
              setHasUpsell={setHasUpsell}
            />
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-16" dir="rtl">
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6">وصف المنتج</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600">
                زيت الأرغان العضوي الفاخر مستخرج يدويًا من قبل تعاونيات نسائية في منطقة سوس بالمغرب. 
                غني بفيتامين E والأحماض الدهنية الأساسية، هذا الزيت متعدد الاستخدامات يمكن استخدامه للوجه 
                والشعر والجسم. معتمد عضويًا ومعصور على البارد للحفاظ على جميع فوائده.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="flex flex-col items-center text-center p-4 bg-emerald-50 rounded-lg">
                  <CheckCircle2 size={24} className="text-emerald-600 mb-2" />
                  <h3 className="font-medium mb-1">100% عضوي</h3>
                  <p className="text-sm text-gray-600">معتمد عضويًا</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-emerald-50 rounded-lg">
                  <CheckCircle2 size={24} className="text-emerald-600 mb-2" />
                  <h3 className="font-medium mb-1">معصور على البارد</h3>
                  <p className="text-sm text-gray-600">يحافظ على العناصر الغذائية</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-emerald-50 rounded-lg">
                  <CheckCircle2 size={24} className="text-emerald-600 mb-2" />
                  <h3 className="font-medium mb-1">تجارة عادلة</h3>
                  <p className="text-sm text-gray-600">يدعم التعاونيات المحلية</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 mb-24 md:mb-16" dir="rtl">
          <h2 className="text-2xl font-semibold mb-8">منتجات ذات صلة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">{product.name}</h3>
                  <p className="text-emerald-600 font-bold mt-2">{product.price} درهم</p>
                  <button className="w-full mt-4 bg-emerald-50 text-emerald-600 py-2 rounded-lg font-medium hover:bg-emerald-600 hover:text-white transition-colors">
                    اطلب الآن
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Order Bar */}
      <MobileOrderBar price={pricing.total} onOrderClick={scrollToForm} />
    </div>
  );
}

export default ProductPage;
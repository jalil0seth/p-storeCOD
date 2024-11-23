import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#1a1a1a] text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1590874023110-f82d4c63b599?w=1800&q=80"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="min-h-[600px] flex items-center">
          <div className="max-w-2xl space-y-8">
            <div>
              <h1 className="text-5xl font-bold leading-tight mb-4">
                اكتشف روعة الحرف
                <br />
                <span className="text-primary">المغربية الأصيلة</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                نقدم لك أجود المنتجات المغربية التقليدية المصنوعة بحرفية عالية
                وبأيدي صناع مهرة
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-14 px-8 text-lg gap-2 bg-primary hover:bg-primary/90">
                <ShoppingBag className="h-5 w-5" />
                تسوق الآن
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 text-lg gap-2 border-white/20 bg-white/10 hover:bg-white/20 text-white"
              >
                اكتشف المزيد
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">+1000</div>
                <div className="text-gray-400">منتج متوفر</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">+50</div>
                <div className="text-gray-400">حرفي ماهر</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">+5000</div>
                <div className="text-gray-400">عميل سعيد</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
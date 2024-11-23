import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[500px] py-12">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              اكتشف أفضل المنتجات
              <br />
              <span className="text-primary">المغربية التقليدية</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              تسوق من تشكيلتنا الواسعة من المنتجات المغربية الأصيلة، مع خدمة التوصيل لجميع أنحاء المملكة
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="gap-2">
                <ShoppingBag className="h-5 w-5" />
                تسوق الآن
              </Button>
              <Button size="lg" variant="outline">
                اكتشف المزيد
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full bg-primary/10 absolute -top-4 -right-4 w-24 h-24" />
            <div className="aspect-square rounded-full bg-primary/10 absolute -bottom-4 -left-4 w-32 h-32" />
            <img
              src="https://images.unsplash.com/photo-1590874023110-f82d4c63b599?w=800&q=80"
              alt="Moroccan Crafts"
              className="rounded-lg shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
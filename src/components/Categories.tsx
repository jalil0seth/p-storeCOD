import { 
  Gem, 
  Coffee, 
  Scroll, // Changed from Rug to Scroll as it's more appropriate for traditional items
  ShoppingBag, 
  Lamp, 
  Palette 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  {
    name: 'مجوهرات',
    icon: Gem,
    color: 'bg-purple-500/10 text-purple-500',
  },
  {
    name: 'أواني',
    icon: Coffee,
    color: 'bg-amber-500/10 text-amber-500',
  },
  {
    name: 'سجاد',
    icon: Scroll,
    color: 'bg-red-500/10 text-red-500',
  },
  {
    name: 'حقائب',
    icon: ShoppingBag,
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    name: 'إضاءة',
    icon: Lamp,
    color: 'bg-green-500/10 text-green-500',
  },
  {
    name: 'ديكور',
    icon: Palette,
    color: 'bg-orange-500/10 text-orange-500',
  },
];

export function Categories() {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">تصفح حسب الفئة</h2>
        <p className="text-muted-foreground">اختر من مجموعة متنوعة من الفئات</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant="ghost"
            className="h-32 flex flex-col gap-4 hover:bg-gray-100"
          >
            <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center`}>
              <category.icon className="h-6 w-6" />
            </div>
            <span className="font-medium">{category.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
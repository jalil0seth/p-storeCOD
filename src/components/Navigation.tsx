import { Home, Gift, Star, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'الرئيسية', icon: Home },
  { name: 'المنتجات', icon: Gift },
  { name: 'العروض المميزة', icon: Star },
  { name: 'اتصل بنا', icon: Phone },
];

export function Navigation() {
  return (
    <nav className="border-b bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center lg:justify-start space-x-1 space-x-reverse h-12">
          {navigation.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className="h-12 rounded-none border-b-2 border-transparent hover:border-primary gap-2"
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
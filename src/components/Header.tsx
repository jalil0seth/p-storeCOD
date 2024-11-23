import { ShoppingCart, Package, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useStore } from '@/context/StoreContext';

export function Header() {
  const { state } = useStore();
  const itemCount = state.cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Package className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold text-primary">متجر المغرب</h1>
          </div>
          
          <div className="flex-1 max-w-xl relative hidden md:block">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="ابحث عن منتجات..."
              className="w-full pr-10"
            />
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-sm">
                {itemCount}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
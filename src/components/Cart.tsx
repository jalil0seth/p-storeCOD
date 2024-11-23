import { Minus, Plus, Trash2, CreditCard } from 'lucide-react';
import { useStore } from '@/context/StoreContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

export function Cart() {
  const { state, dispatch } = useStore();

  if (state.cart.length === 0) {
    return (
      <Card className="p-8 text-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <CreditCard className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="font-bold mb-1">السلة فارغة</h3>
            <p className="text-sm text-muted-foreground">أضف منتجات إلى سلة التسوق</p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">سلة التسوق</h2>
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
          {state.cart.length} منتجات
        </span>
      </div>
      <ScrollArea className="h-[400px] pr-4">
        {state.cart.map(item => (
          <div key={item.id} className="mb-6">
            <div className="flex gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">{item.arabicName}</h3>
                <p className="text-primary font-bold mb-2">{item.price} درهم</p>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() =>
                      dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: { id: item.id, quantity: Math.max(0, item.quantity - 1) },
                      })
                    }
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center font-bold">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() =>
                      dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: { id: item.id, quantity: item.quantity + 1 },
                      })
                    }
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                    onClick={() =>
                      dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })
                    }
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
            <Separator className="my-6" />
          </div>
        ))}
      </ScrollArea>
      <div className="space-y-4 mt-6">
        <div className="bg-gray-50 p-4 rounded-xl space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">المجموع الفرعي:</span>
            <span className="font-medium">{state.total} درهم</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">رسوم التوصيل:</span>
            <span className="font-medium">30 درهم</span>
          </div>
          <Separator />
          <div className="flex justify-between font-bold text-lg">
            <span>المجموع:</span>
            <span className="text-primary">{state.total + 30} درهم</span>
          </div>
        </div>
        <Button className="w-full gap-2 py-6 text-lg bg-primary hover:bg-primary/90">
          <CreditCard className="h-5 w-5" />
          إتمام الطلب
        </Button>
      </div>
    </Card>
  );
}
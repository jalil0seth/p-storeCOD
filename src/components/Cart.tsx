import { Minus, Plus, Trash2 } from 'lucide-react';
import { useStore } from '@/context/StoreContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

export function Cart() {
  const { state, dispatch } = useStore();

  if (state.cart.length === 0) {
    return (
      <Card className="p-6 text-center">
        <p className="text-gray-500">السلة فارغة</p>
      </Card>
    );
  }

  return (
    <Card className="p-4">
      <h2 className="text-xl font-bold mb-4">سلة التسوق</h2>
      <ScrollArea className="h-[400px] pr-4">
        {state.cart.map(item => (
          <div key={item.id} className="mb-4">
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.arabicName}</h3>
                <p className="text-sm text-gray-600">{item.price} درهم</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    dispatch({
                      type: 'UPDATE_QUANTITY',
                      payload: { id: item.id, quantity: Math.max(0, item.quantity - 1) },
                    })
                  }
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    dispatch({
                      type: 'UPDATE_QUANTITY',
                      payload: { id: item.id, quantity: item.quantity + 1 },
                    })
                  }
                >
                  <Plus className="h-4 w-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() =>
                    dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })
                  }
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Separator className="my-4" />
          </div>
        ))}
      </ScrollArea>
      <div className="mt-4">
        <div className="flex justify-between mb-4">
          <span className="font-semibold">المجموع:</span>
          <span className="font-bold">{state.total} درهم</span>
        </div>
        <Button className="w-full" size="lg">
          متابعة الطلب
        </Button>
      </div>
    </Card>
  );
}
import { Product, useStore } from '@/context/StoreContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useStore();

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">{product.arabicName}</h3>
          <p className="text-gray-600 text-sm mb-2">{product.arabicDescription}</p>
          <p className="text-primary font-bold">{product.price} درهم</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
        >
          <ShoppingCart className="h-4 w-4 ml-2" />
          أضف إلى السلة
        </Button>
      </CardFooter>
    </Card>
  );
}
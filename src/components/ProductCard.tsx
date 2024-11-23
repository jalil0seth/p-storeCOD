import { Product, useStore } from '@/context/StoreContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useStore();

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Badge className="absolute top-4 right-4 bg-white/90 text-primary">
            الدفع عند الاستلام
          </Badge>
          <Button
            className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2"
            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
          >
            <ShoppingCart className="h-5 w-5" />
            أضف إلى السلة
          </Button>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h3 className="text-xl font-bold mb-2">{product.arabicName}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {product.arabicDescription}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-primary">{product.price} درهم</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
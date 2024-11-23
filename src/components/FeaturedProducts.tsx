import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const featuredProducts = [
  {
    id: 'featured-1',
    name: 'طقم شاي فاخر',
    image: 'https://images.unsplash.com/photo-1578575436955-ef29da568c6c?w=800&q=80',
    price: 599,
    rating: 4.8,
    sales: 120,
  },
  {
    id: 'featured-2',
    name: 'سجادة مغربية تقليدية',
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&q=80',
    price: 1299,
    rating: 4.9,
    sales: 85,
  },
  {
    id: 'featured-3',
    name: 'فانوس نحاسي منقوش',
    image: 'https://images.unsplash.com/photo-1573074617613-fc8ef27eaa2f?w=800&q=80',
    price: 399,
    rating: 4.7,
    sales: 95,
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">المنتجات المميزة</h2>
        <Badge variant="secondary" className="text-sm">
          أفضل المبيعات
        </Badge>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <Card key={product.id} className="group overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4 text-white">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">{product.price} درهم</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
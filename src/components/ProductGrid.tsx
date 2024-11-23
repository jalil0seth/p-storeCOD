import { Product } from '@/context/StoreContext';
import { ProductCard } from './ProductCard';

const products: Product[] = [
  {
    id: '1',
    name: 'Traditional Moroccan Tea Set',
    arabicName: 'طقم شاي مغربي تقليدي',
    price: 299,
    image: 'https://images.unsplash.com/photo-1584534560587-0f7127fb7c1a?w=800&q=80',
    description: 'Authentic Moroccan tea set with intricate designs',
    arabicDescription: 'طقم شاي مغربي أصيل بتصاميم دقيقة',
  },
  {
    id: '2',
    name: 'Handmade Leather Pouf',
    arabicName: 'بوف جلدي يدوي',
    price: 499,
    image: 'https://images.unsplash.com/photo-1584534560587-0f7127fb7c1a?w=800&q=80',
    description: 'Traditional Moroccan leather pouf, handcrafted',
    arabicDescription: 'بوف مغربي تقليدي من الجلد، مصنوع يدويًا',
  },
  // Add more products as needed
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
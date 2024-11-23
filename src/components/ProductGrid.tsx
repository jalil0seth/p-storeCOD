import { Product } from '@/context/StoreContext';
import { ProductCard } from './ProductCard';

const products: Product[] = [
  {
    id: '1',
    name: 'Traditional Moroccan Tea Set',
    arabicName: 'طقم شاي مغربي تقليدي فاخر',
    price: 299,
    image: 'https://images.unsplash.com/photo-1584534560587-0f7127fb7c1a?w=800&q=80',
    description: 'Authentic Moroccan tea set with intricate designs',
    arabicDescription: 'طقم شاي مغربي أصيل بتصاميم دقيقة ومميزة، يشمل الإبريق والكؤوس',
  },
  {
    id: '2',
    name: 'Handmade Leather Pouf',
    arabicName: 'بوف جلدي مغربي يدوي',
    price: 499,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&q=80',
    description: 'Traditional Moroccan leather pouf, handcrafted',
    arabicDescription: 'بوف مغربي تقليدي من الجلد الطبيعي، مصنوع يدويًا بحرفية عالية',
  },
  {
    id: '3',
    name: 'Moroccan Ceramic Plate',
    arabicName: 'طبق سيراميك مغربي',
    price: 199,
    image: 'https://images.unsplash.com/photo-1578575436955-ef29da568c6c?w=800&q=80',
    description: 'Hand-painted ceramic plate with traditional patterns',
    arabicDescription: 'طبق سيراميك مرسوم يدويًا بنقوش تقليدية مغربية أصيلة',
  },
  {
    id: '4',
    name: 'Argan Oil Set',
    arabicName: 'مجموعة زيت أركان الأصلي',
    price: 399,
    image: 'https://images.unsplash.com/photo-1573074617613-fc8ef27eaa2f?w=800&q=80',
    description: 'Pure Moroccan Argan oil set for hair and skin',
    arabicDescription: 'مجموعة زيت أركان مغربي نقي للشعر والبشرة',
  }
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
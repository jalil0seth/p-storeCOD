import { StoreProvider } from '@/context/StoreContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { ProductGrid } from '@/components/ProductGrid';
import { Cart } from '@/components/Cart';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';

export default function App() {
  return (
    <StoreProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <Navigation />
        <main>
          <Hero />
          <div className="container mx-auto px-4 py-12">
            <FeaturedProducts />
            <div className="mt-16 grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">جميع المنتجات</h2>
                <ProductGrid />
              </div>
              <div className="lg:col-span-1">
                <Cart />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </StoreProvider>
  );
}
import { StoreProvider } from '@/context/StoreContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { ProductGrid } from '@/components/ProductGrid';
import { Cart } from '@/components/Cart';
import { Footer } from '@/components/Footer';
import { Categories } from '@/components/Categories';
import { Benefits } from '@/components/Benefits';

export default function App() {
  return (
    <StoreProvider>
      <div className="min-h-screen bg-[#f8f9fa]">
        <Header />
        <main>
          <Hero />
          <div className="container mx-auto px-4">
            <Categories />
            <Benefits />
            <FeaturedProducts />
            <div className="my-16 grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">تسوق منتجاتنا</h2>
                    <p className="text-muted-foreground">اكتشف مجموعتنا المميزة من المنتجات المغربية الأصيلة</p>
                  </div>
                </div>
                <ProductGrid />
              </div>
              <div className="lg:col-span-1 relative">
                <div className="lg:sticky lg:top-24">
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </StoreProvider>
  );
}
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-card mt-16 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">عن المتجر</h3>
            <p className="text-muted-foreground">
              نقدم أفضل المنتجات المغربية التقليدية بجودة عالية وأسعار مناسبة
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="p-0 h-auto">الشروط والأحكام</Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto">سياسة الخصوصية</Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto">سياسة الإرجاع</Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto">الأسئلة الشائعة</Button>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">تواصل معنا</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>الهاتف: 0600000000</li>
              <li>البريد: info@store.com</li>
              <li>العنوان: الدار البيضاء، المغرب</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">النشرة البريدية</h3>
            <p className="text-muted-foreground">اشترك للحصول على آخر العروض والتخفيضات</p>
            <div className="flex gap-2">
              <Input placeholder="البريد الإلكتروني" />
              <Button>اشتراك</Button>
            </div>
            <div className="flex gap-4 mt-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>© 2024 متجر المغرب. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}
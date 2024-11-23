import { Shield, Truck, Clock, CreditCard } from 'lucide-react';

const benefits = [
  {
    title: 'ضمان الجودة',
    description: 'نضمن جودة جميع منتجاتنا',
    icon: Shield,
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    title: 'توصيل سريع',
    description: 'توصيل لجميع أنحاء المملكة',
    icon: Truck,
    color: 'bg-green-500/10 text-green-500',
  },
  {
    title: 'دعم على مدار الساعة',
    description: 'فريق دعم متواجد دائماً لمساعدتك',
    icon: Clock,
    color: 'bg-purple-500/10 text-purple-500',
  },
  {
    title: 'الدفع عند الاستلام',
    description: 'ادفع بعد استلام منتجك',
    icon: CreditCard,
    color: 'bg-amber-500/10 text-amber-500',
  },
];

export function Benefits() {
  return (
    <div className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center mb-4`}>
              <benefit.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
            <p className="text-muted-foreground">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
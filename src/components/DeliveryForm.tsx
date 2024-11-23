import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { MapPin, Phone, User, Mail, Home, Package, CreditCard } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FormField } from './FormField';

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "الاسم يجب أن يتكون من حرفين على الأقل",
  }),
  email: z.string().email({
    message: "يرجى إدخال بريد إلكتروني صحيح",
  }),
  phone: z.string().min(10, {
    message: "رقم الهاتف يجب أن يتكون من 10 أرقام على الأقل",
  }),
  address: z.string().min(10, {
    message: "العنوان يجب أن يتكون من 10 أحرف على الأقل",
  }),
  city: z.string().min(2, {
    message: "يرجى اختيار المدينة",
  }),
  paymentMethod: z.enum(["cod"], {
    required_error: "يرجى اختيار طريقة الدفع",
  }),
  notes: z.string().optional(),
});

export function DeliveryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentMethod: "cod",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({
        title: "تم إرسال الطلب بنجاح",
        description: "سنتصل بك قريباً لتأكيد طلبك",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "حدث خطأ",
        description: "يرجى المحاولة مرة أخرى",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <Card className="p-6">
        <div className="space-y-4">
          <div className="grid gap-4">
            <FormField
              label="الاسم الكامل"
              name="fullName"
              form={form}
              icon={<User className="h-5 w-5" />}
              placeholder="محمد أحمد"
            />
            <FormField
              label="البريد الإلكتروني"
              name="email"
              form={form}
              icon={<Mail className="h-5 w-5" />}
              placeholder="example@domain.com"
              type="email"
            />
            <FormField
              label="رقم الهاتف"
              name="phone"
              form={form}
              icon={<Phone className="h-5 w-5" />}
              placeholder="0600000000"
            />
          </div>

          <div className="space-y-4">
            <FormField
              label="العنوان"
              name="address"
              form={form}
              icon={<Home className="h-5 w-5" />}
              placeholder="أدخل عنوانك الكامل"
              multiline
            />
            <FormField
              label="المدينة"
              name="city"
              form={form}
              icon={<MapPin className="h-5 w-5" />}
              placeholder="الدار البيضاء"
            />
          </div>

          <div className="space-y-4">
            <Label>طريقة الدفع</Label>
            <RadioGroup
              defaultValue="cod"
              className="grid grid-cols-1 gap-4"
              {...form.register("paymentMethod")}
            >
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="cod" id="cod" />
                <Label htmlFor="cod" className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-gray-400" />
                  <span>الدفع عند الاستلام</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="relative">
            <Label htmlFor="notes">ملاحظات إضافية (اختياري)</Label>
            <Textarea
              id="notes"
              placeholder="أي ملاحظات إضافية حول طلبك"
              {...form.register("notes")}
              className="min-h-[100px]"
            />
          </div>
        </div>
      </Card>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="flex items-center gap-2">
            <Package className="animate-bounce" />
            <span>جاري إرسال الطلب...</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Package />
            <span>تأكيد الطلب</span>
          </div>
        )}
      </Button>
    </form>
  );
}
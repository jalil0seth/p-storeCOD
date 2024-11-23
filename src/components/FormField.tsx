import { ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface FormFieldProps {
  label: string;
  name: string;
  form: UseFormReturn<any>;
  icon: ReactNode;
  placeholder: string;
  type?: string;
  multiline?: boolean;
}

export function FormField({
  label,
  name,
  form,
  icon,
  placeholder,
  type = "text",
  multiline = false,
}: FormFieldProps) {
  return (
    <div className="relative">
      <Label htmlFor={name}>{label}</Label>
      <div className="relative">
        {multiline ? (
          <Textarea
            id={name}
            placeholder={placeholder}
            {...form.register(name)}
            className="pr-10 min-h-[100px]"
          />
        ) : (
          <Input
            id={name}
            type={type}
            placeholder={placeholder}
            {...form.register(name)}
            className="pr-10"
          />
        )}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      </div>
      {form.formState.errors[name] && (
        <p className="text-sm text-red-500 mt-1">
          {form.formState.errors[name]?.message as string}
        </p>
      )}
    </div>
  );
}
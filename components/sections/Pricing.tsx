import { cn } from '@/lib/utils';
import type { PricingData, PricingSettings } from '@/lib/types';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react'; 

const paddingMap = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-24',
  xl: 'py-24 md:py-32',
};

export function Pricing({ data, settings }: { data: PricingData; settings: PricingSettings }) {
  const paddingTopClass = paddingMap[settings.paddingTop] || paddingMap.lg;
  const paddingBottomClass = paddingMap[settings.paddingBottom] || paddingMap.lg;

  return (
    <section id={settings.id}
      style={{
        backgroundColor: settings.backgroundColor,
        color: settings.textColor,
      }}
      className={cn(
        "w-full",
        paddingTopClass,
        paddingBottomClass
      )}
    >
      <div className="container mx-auto px-4 md:px-6"> 
        {/* 1. Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-primary tracking-tighter">
            {data.title}
          </h2>
          <p className="max-w-[700px] text-lg text-foreground/80">
            {data.subtitle}
          </p>
        </div>

        {/* 2. Grid de Preços */}
        {/* Usamos 'items-stretch' para que todos os cards tenham a mesma altura */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {data.plans.map((plan) => (
            <Card 
              key={plan.name}
              className={cn(
                "flex flex-col", // Garante que o footer fique no final
                plan.isFeatured ? "bg-primary text-primary-foreground border-2 border-primary" : "bg-background/80"
              )}
            >
              <CardHeader>
                <CardTitle className="font-primary">{plan.name}</CardTitle>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold font-primary">{plan.price}</span>
                  {plan.period && (
                    <span className={cn(
                      "text-lg",
                      plan.isFeatured ? "text-primary-foreground/80" : "text-foreground/70"
                    )}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <CardDescription className={cn(
                  plan.isFeatured ? "text-primary-foreground/90" : "text-foreground/80"
                )}>
                  {plan.description}
                </CardDescription>
              </CardHeader>

              {/* flex-grow empurra o footer para baixo */}
              <CardContent className="flex-grow space-y-3">
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  asChild
                  size="lg"
                  className="w-full"
                  // Botão com estilo invertido se for "featured"
                  variant={plan.isFeatured ? "secondary" : "default"}
                >
                  <a href={plan.ctaButton.href}>{plan.ctaButton.text}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
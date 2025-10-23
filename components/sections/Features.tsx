import { cn } from "@/lib/utils";
import type { FeaturesData, FeaturesSettings } from '@/lib/types';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, BarChart3, ShieldCheck, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Rocket: Rocket,
  BarChart3: BarChart3,
  ShieldCheck: ShieldCheck,
}
  
const paddingMap = {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-20',
    lg: 'py-20 md:py-24',
    xl: 'py-24 md:py-32',
}

export function Features({ data, settings }: { data: FeaturesData; settings: FeaturesSettings }) {
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

        {/* 2. Grid de Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.items.map((item) => {
            // Encontra o componente de Ícone correspondente
            const IconComponent = iconMap[item.icon];

            return (
              <Card key={item.title} className="bg-background/80">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                  {IconComponent && (
                    <div className="p-2 bg-primary/10 rounded-full">
                       <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  )}
                  <CardTitle className="font-primary">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
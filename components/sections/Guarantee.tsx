import { cn } from '@/lib/utils';
import type { GuaranteeData, GuaranteeSettings } from '@/lib/types';
import Image from 'next/image';

import { Wrench, ThumbsUp, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Wrench: Wrench,
  ThumbsUp: ThumbsUp,
};

const paddingMap = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-24',
  xl: 'py-24 md:py-32',
};

export function Guarantee({ data, settings }: { data: GuaranteeData; settings: GuaranteeSettings }) {
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
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-6">

        {/* Coluna de Texto (Garantia e Selos) */}
        <div className="px-4 md:px-25">
          <h2 className="text-3xl md:text-4xl font-bold font-primary tracking-tighter mb-4">
            {data.title}
          </h2>
          <p className="text-lg text-foreground/80">
            {data.description}
          </p>

          {/* Lista de Selos */}
          <div className="space-y-4 pt-4">
            {data.seals.map((seal) => {
              const IconComponent = iconMap[seal.icon];
              return (
                <div key={seal.text} className="flex items-center gap-3">
                  {IconComponent && (
                    <IconComponent className="h-6 w-6 text-primary" />
                  )}
                  <span className="font-semibold text-foreground/90">{seal.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Coluna da Imagem (Selo de Garantia) */}
        <div className="flex items-center justify-center">
          <Image
            src={data.badge.src}
            alt={data.badge.alt}
            width={300}
            height={300}
            unoptimized // Necessário para placeholders SVG
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}
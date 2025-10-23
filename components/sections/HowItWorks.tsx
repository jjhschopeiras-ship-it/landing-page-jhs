// components/sections/HowItWorks.tsx
import { cn } from '@/lib/utils';
// Importamos os tipos que definimos
import type { HowItWorksData, HowItWorksSettings } from '@/lib/types';

// Mapeamento de padding
const paddingMap = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-24',
  xl: 'py-24 md:py-32',
};

export function HowItWorks({ data, settings }: { data: HowItWorksData; settings: HowItWorksSettings }) {
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
        {/* 1. Cabeçalho da Seção (igual ao de Features) */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-primary tracking-tighter">
            {data.title}
          </h2>
          <p className="max-w-[700px] text-lg text-foreground/80">
            {data.subtitle}
          </p>
        </div>

        {/* 2. Grid de Passos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.items.map((item, index) => {
            // 'index' é 0, 1, 2. Vamos usá-lo para mostrar 1, 2, 3.
            const stepNumber = index + 1;

            return (
              <div key={item.title} className="flex flex-col items-center text-center space-y-4">
                {/* Círculo com o Número do Passo */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl font-primary">
                  {stepNumber}
                </div>

                {/* Título e Descrição do Passo */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-primary">{item.title}</h3>
                  <p className="text-foreground/80">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
// components/sections/Faq.tsx
import { cn } from '@/lib/utils';
// Importamos os tipos que definimos
import type { FaqData, FaqSettings } from '@/lib/types';

// Importamos os componentes Accordion do shadcn/ui
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Mapeamento de padding
const paddingMap = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-24',
  xl: 'py-24 md:py-32',
};

export function Faq({ data, settings }: { data: FaqData; settings: FaqSettings }) {
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
      <div className="container max-w-3xl mx-auto"> 
        {/* 1. Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-primary tracking-tighter">
            {data.title}
          </h2>
          <p className="text-lg text-foreground/80">
            {data.subtitle}
          </p>
        </div>

        {/* 2. Lista de Perguntas (Accordion) */}
        <Accordion type="single" collapsible className="w-full">
          {data.items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold text-lg font-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
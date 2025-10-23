// components/sections/AboutUs.tsx
import { cn } from '@/lib/utils';
// Importamos os tipos que definimos
import type { AboutUsData, AboutUsSettings } from '@/lib/types';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// Mapeamento de padding
const paddingMap = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-24',
  xl: 'py-24 md:py-32',
};

export function AboutUs({ data, settings }: { data: AboutUsData; settings: AboutUsSettings }) {
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

        {/* Coluna de Imagem */}
        <div className="flex items-center justify-center">
          <Image
            src={data.image.src}
            alt={data.image.alt}
            width={550}
            height={400}
            // Como não é SVG, não precisamos de 'unoptimized'
            className="rounded-lg object-cover aspect-video"
          />
        </div>

        {/* Coluna de Texto */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-primary tracking-tighter">
            {data.title}
          </h2>

          {/* Mapeia os parágrafos do JSON */}
          <div className="space-y-4 text-lg text-foreground/80">
            {data.paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          {/* Renderiza o botão apenas se ele existir no JSON */}
          {data.ctaButton && (
            <Button asChild variant="outline" size="lg">
              <a href={data.ctaButton.href}>{data.ctaButton.text}</a>
            </Button>
          )}
        </div>

      </div>
    </section>
  );
}
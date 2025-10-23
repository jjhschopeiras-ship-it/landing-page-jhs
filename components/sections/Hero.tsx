// components/sections/Hero.tsx
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { HeroData, HeroSettings } from '@/lib/types';

// O mapa de padding ainda é útil para o container de texto
const paddingMap = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-24',
  xl: 'py-24 md:py-32',
};

export function Hero({ data, settings }: { data: HeroData; settings: HeroSettings }) {
  const paddingTopClass = paddingMap[settings.paddingTop] || paddingMap.lg;
  const paddingBottomClass = paddingMap[settings.paddingBottom] || paddingMap.lg;

  return (
    <section id={settings.id}
      style={{
        // 1. Aplica a imagem de fundo dinamicamente
        backgroundImage: `url(${data.backgroundImageSrc})`
      }}
      // 2. Arquitetura da Seção:
      // - 'relative': Permite que o overlay seja posicionado
      // - 'flex items-center justify-center': CENTRALIZA O CONTEÚDO
      // - 'min-h-[calc(100vh-4rem)]': Preenche o resto da tela (abaixo do header)
      // - 'bg-cover bg-center': Garante que a imagem cubra o espaço
      className={cn(
        "relative w-full flex items-center justify-center min-h-[calc(100vh-4rem)] bg-cover bg-left"
      )}
    >
      {/* 3. O Overlay (Filtro) */}
      {/* Cobre todo o 'section' e fica por baixo do conteúdo (z-0) */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: settings.overlayColor || '#000000',
          opacity: settings.overlayOpacity || 0.5
        }}
      />

      {/* 4. O Conteúdo (Texto + CTA) */}
      {/* Fica na frente do overlay (z-10) e é centralizado pelo 'flex' do 'section' */}
      <div 
        className={cn(
          "relative z-10 container flex flex-col items-center text-center px-4 md:px-6",
          paddingTopClass, // Adiciona padding interno
          paddingBottomClass
        )}
        style={{
          // Aplica a cor do texto do JSON (ex: #FFFFFF)
          color: settings.textColor
        }}
      >
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter font-primary">
            {data.title}
          </h1>
          <p className="max-w-[700px] mx-auto text-lg md:text-xl opacity-90">
            {/* Usamos 'opacity-90' para o subtítulo,
                já que a cor principal é herdada do 'style' acima */}
            {data.subtitle}
          </p>
          <Button size="lg" asChild>
            <a href={data.ctaButton.href}>{data.ctaButton.text}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
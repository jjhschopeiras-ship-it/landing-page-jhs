import { cn } from '@/lib/utils';
import type { LogosData, LogosSettings } from '@/lib/types';
import Image from 'next/image';

const paddingMap = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-24',
  xl: 'py-24 md:py-32',
};

export function Logos({ data, settings }: { data: LogosData; settings: LogosSettings }) {
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
        {/* 1. Título da Seção */}
        <h3 className="text-lg font-semibold text-center text-foreground/70 mb-8 font-body">
          {data.title}
        </h3>

        {/* 2. Fileira de Logos */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {data.items.map((item) => (
            <Image
              key={item.alt}
              src={item.src}
              alt={item.alt}
              width={150} // Largura padrão do logo
              height={60} // Altura padrão do logo
              unoptimized
              className="
                object-contain     // Garante que o logo não distorça
                grayscale          // Começa em preto e branco
                opacity-60         // Começa semi-transparente
                hover:grayscale-0  // Em hover, fica colorido
                hover:opacity-100  // Em hover, opacidade total
                transition-all     // Transição suave
                duration-300
              "
            />
          ))}
        </div>
      </div>
    </section>
  );
}
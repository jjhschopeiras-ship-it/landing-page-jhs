import { cn } from '@/lib/utils';
import type { TestimonialsData, TestimonialsSettings } from '@/lib/types';

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const paddingMap = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-24',
  xl: 'py-24 md:py-32',
};

export function Testimonials({ data, settings }: { data: TestimonialsData; settings: TestimonialsSettings }) {
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

        {/* 2. Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.items.map((item) => (
            <Card key={item.name} className="bg-background/80 flex flex-col">
              {/* O CardContent ocupa o espaço, empurrando o CardFooter para baixo */}
              <CardContent className="pt-6 flex-grow">
                <blockquote className="text-lg text-foreground/90 italic">
                  &quot;{item.quote}&quot;
                </blockquote>
              </CardContent>
              <CardFooter className="flex items-center gap-4 mt-4">
                <Avatar>
                  <AvatarImage src={item.avatarSrc} alt={item.name} />
                  {/* Fallback caso a imagem não carregue */}
                  <AvatarFallback>
                    {item.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold font-primary">{item.name}</p>
                  <p className="text-sm text-foreground/80">{item.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
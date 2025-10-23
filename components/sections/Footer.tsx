
import type { FooterData, FooterSettings } from '@/lib/types';
import { Linkedin, Instagram, Twitter, Facebook, Youtube, type LucideIcon } from 'lucide-react';
import Image from 'next/image';

const socialIconMap: Record<string, LucideIcon> = {
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Twitter: Twitter,
  Facebook: Facebook,
  Youtube: Youtube,
};

export function Footer({ data, settings }: { data: FooterData; settings: FooterSettings }) {
  const bgColor = settings.backgroundColor || 'hsl(var(--primary))';
  const textColor = settings.textColor || 'hsl(var(--primary-foreground))';
  const logoText = data.logoSrc; // Pega o logo do JSON principal

  return (
    <footer
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      className="w-full pt-4 md:pt-8"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Grid Principal */}
        {/* Mantemos md:grid-cols-3, mas ajustamos alinhamentos internos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-start">

          {/* Coluna 1: Logo */}
          {/* Ajustado: items-start para alinhar à esquerda no desktop */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <a href="#" className="text-xl font-bold"> {/* Link para home */}
              <Image src={logoText} alt="Logo" width={100} height={50}/>
            </a>
          </div>

          {/* Coluna 2: Links Úteis */}
          {/* Ajustado: text-center md:text-left nas colunas internas */}
          {data.linkColumns && data.linkColumns.length > 0 && (
            <div className="grid grid-cols-2 gap-8 text-center md:text-left">
              {data.linkColumns.map((column) => (
                <div key={column.title} className="space-y-3">
                  <h4 className="font-semibold font-primary">{column.title}</h4>
                  <ul className="space-y-2">
                    {column.links.map((link) => (
                      <li key={link.text}>
                        <a
                          href={link.href}
                          className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {/* Fallback caso não haja links: Adiciona uma div vazia para manter o grid */}
          {(!data.linkColumns || data.linkColumns.length === 0) && <div className="hidden md:block"></div>}


          {/* Coluna 3: Redes Sociais */}
          {/* Ajustado: justify-center md:justify-end para alinhar à direita no desktop */}
          <div className="flex justify-center md:justify-end items-start space-x-4">
            {data.socialLinks.map((social) => {
              const IconComponent = socialIconMap[social.platform];
              return (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  {IconComponent && <IconComponent className="h-6 w-6" />}
                </a>
              );
            })}
          </div>
        </div>

        {/* Linha Separadora */}
        <div className="border-t border-[var(--primary-foreground)] opacity-20 my-6"></div>

        {/* Linha do Copyright */}
        <div className="flex justify-center pb-8 md:pb-12">
          <p className="text-sm text-center opacity-80">{data.copyrightText}</p>
        </div>

      </div>
    </footer>
  );
}
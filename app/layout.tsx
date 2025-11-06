import type { Metadata } from 'next';
import Script from 'next/script'; // 1. Adicionado import
import './globals.css';

import { Merriweather, Lato } from 'next/font/google';

import { Header } from '@/components/sections/Header';
import pageConfig from '@/config/landing-page.json';
import { FloatingWhatsAppButton } from '@/components/FloatingWhatsAppButton';

const merriweather = Merriweather({
  weight: ['700'], // Apenas Bold para títulos
  subsets: ['latin'],
  variable: '--font-primary',
});
const lato = Lato({
  weight: ['400', '700'], // Regular e Bold para corpo
  subsets: ['latin'],
  variable: '--font-body',
});
const fontMap = {
  Merriweather: merriweather,
  Lato: lato,
};

const primaryFontFamily =
  fontMap[pageConfig.settings.typography.fontPrimary as keyof typeof fontMap] ||
  merriweather;
const bodyFontFamily =
  fontMap[pageConfig.settings.typography.fontBody as keyof typeof fontMap] ||
  lato;

export const metadata: Metadata = {
  title: pageConfig.settings.seo.title,
  description: pageConfig.settings.seo.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, whatsappLink } = pageConfig.settings;

  const navLinks = pageConfig.sections
    // Filtra apenas as seções que têm ID e menuTitle definidos
    .filter((section) => section.settings?.id && section.settings?.menuTitle)
    // Mapeia para o formato { text, href } esperado pelo Header
    .map((section) => ({
      text: section.settings.menuTitle!, // '!' assume que menuTitle existe após o filter
      href: `#${section.settings.id!}`, // '!' assume que id existe após o filter
    }));

  return (
    <html
      lang="pt-BR"
      style={
        {
          '--background': theme.backgroundColor,
          '--foreground': theme.textColor,
          '--primary': theme.primaryColor,
          '--secondary': theme.secondaryColor,
          '--radius': theme.borderRadius,
        } as React.CSSProperties
      }
    >
      {/* 2. Adicionado <head> com as tags do Google */}
      <head>
        {/* Script 1: Google Tag (gtag.js) */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}`}
        />
        {/* Script 2: Inicialização inline */}
        <Script id="google-tag-init">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}');
          `}
        </Script>
      </head>
      
      {/* 3. Seu <body> original */}
      <body
        className={`${primaryFontFamily.variable} ${bodyFontFamily.variable} font-body pt-16`}
      >
        <Header data={{ ...pageConfig.header, navLinks }} />
        {children}
        <FloatingWhatsAppButton href={whatsappLink} />
      </body>
    </html>
  );
}
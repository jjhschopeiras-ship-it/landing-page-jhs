// lib/types.ts

// --- Tipos de Base ---
type PaddingValue = "sm" | "md" | "lg" | "xl";

// Configurações base que toda seção terá
interface BaseSectionSettings {
  paddingTop: PaddingValue;
  paddingBottom: PaddingValue;
  backgroundColor?: string;
  textColor?: string;
  id?: string; 
  menuTitle?: string;
}

// --- Tipos Específicos do Hero ---
export interface HeroSettings extends BaseSectionSettings {
  overlayColor?: string;   // Cor do filtro escuro, ex: "#0F172A"
  overlayOpacity?: number; // Opacidade do filtro, ex: 0.5
}

export interface HeroData {
  title: string;
  subtitle: string;
  ctaButton: { text: string; href: string };
  backgroundImageSrc: string; 
}

// Interface "empacotada" do Hero
export interface HeroSection {
  component: "Hero";
  settings: HeroSettings;
  data: HeroData;
}

export type FeaturesSettings = BaseSectionSettings;

export interface FeaturesData {
  title: string;
  subtitle: string;
  items: {
    icon: string;
    title: string;
    description: string;
  } [];
}

export interface FeaturesSection {
  component: 'Features';
  settings: FeaturesSettings;
  data: FeaturesData;
}

export type HowItWorksSettings = BaseSectionSettings;

export interface HowItWorksData {
  title: string;
  subtitle: string;
  items: {
    title: string;
    description: string;
  }[];
}

export interface HowItWorksSection {
  component: "HowItWorks";
  settings: HowItWorksSettings;
  data: HowItWorksData;
}

export type TestimonialsSettings = BaseSectionSettings;

export interface TestimonialsData {
  title: string;
  subtitle: string;
  items: {
    quote: string;
    name: string;
    role: string;
    avatarSrc: string;
  }[];
}

export interface TestimonialsSection {
  component: "Testimonials";
  settings: TestimonialsSettings;
  data: TestimonialsData;
}

export type LogosSettings = BaseSectionSettings;

export interface LogosData {
  title: string;
  items: {
    src: string;
    alt: string;
  }[];
}

export interface LogosSection {
  component: "Logos";
  settings: LogosSettings;
  data: LogosData;
}

export type GuaranteeSettings = BaseSectionSettings;

export interface GuaranteeData {
  title: string;
  description: string;
  badge: {
    src: string;
    alt: string;
  };
  seals: {
    icon: string;
    text: string;
  }[];
}

export interface GuaranteeSection {
  component: "Guarantee";
  settings: GuaranteeSettings;
  data: GuaranteeData;
}

export type PricingSettings = BaseSectionSettings;

export interface PricingData {
  title: string;
  subtitle: string;
  plans: {
    name: string;
    price: string;
    period: string;
    description: string;
    isFeatured: boolean;
    features: string[];
    ctaButton: { text: string; href: string };
  }[];  
};

export interface PricingSection {
  component: "Pricing";
  settings: PricingSettings;
  data: PricingData;
}

export type AboutUsSettings = BaseSectionSettings;

export interface AboutUsData {
  title: string;
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
  };
  ctaButton: { text: string; href: string };
}

export interface AboutUsSection { 
  component: "AboutUs";
  settings: AboutUsSettings;
  data: AboutUsData;
}

export type FaqSettings = BaseSectionSettings;

export interface FaqData {
  title: string;
  subtitle: string;
  items: {
    question: string;
    answer: string;
  }[];
}

export interface FaqSection {
  component: "Faq";
  settings: FaqSettings;
  data: FaqData;
}

export interface FooterSettings {
  backgroundColor?: string;
  textColor?: string;
}

export interface FooterData {
  copyrightText: string;
  socialLinks: {
    platform: "LinkedIn" | "Instagram" | "Facebook" | "Twitter" | "Youtube"; // Nomes dos ícones Lucide + nomes comuns
    href: string;
  }[];
  // Opcional: Colunas de links úteis
  linkColumns?: {
    title: string;
    links: {
      text: string;
      href: string;
    }[];
  }[];
}

export interface FooterSection {
  component: "Footer";
  settings: FooterSettings; // Usa as settings simplificadas
  data: FooterData;
}

export type Section = HeroSection | FeaturesSection | HowItWorksSection | TestimonialsSection | LogosSection | GuaranteeSection | PricingSection | AboutUsSection | FaqSection | FooterSection;


// --- Configuração da Página (JSON) ---
export interface PageConfig {
  settings: {
    theme: {
      primaryColor: string;
      secondaryColor: string;
      backgroundColor: string;
      textColor: string;
      borderRadius: string;
    };
    typography: {
      fontPrimary: string;
      fontBody: string;
    };
    seo: {
      title: string;
      description: string;
    };
    whatsappLink?: string;
  };
  header: {
    logo: string;
    ctaButton: { text: string; href: string };
  };
  sections: Section[]; // Usa nosso novo tipo mestre!
}
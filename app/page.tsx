import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Testimonials  } from '@/components/sections/Testimonials';
import { Logos } from '@/components/sections/Logos';
import { Guarantee } from '@/components/sections/Guarantee';
import { Pricing } from '@/components/sections/Pricing';
import { Faq } from '@/components/sections/Faq';
import { AboutUs } from '@/components/sections/AboutUs';
import { Footer } from '@/components/sections/Footer';


import pageConfigJson from '@/config/landing-page.json';
import type { PageConfig } from '@/lib/types';

const pageConfig: PageConfig = pageConfigJson as PageConfig;


export default function Home() {
  const { sections } = pageConfig;

  return (
    <main>
        {sections.map((section, index) => {
        switch (section.component) {
          case "Hero":
            return (
              <Hero
                key={index}
                data={section.data} 
                settings={section.settings} 
              />
            );

          case "Features":
            return (
              <Features
                key={index}
                data={section.data}
                settings={section.settings} 
              />
            );

          case "HowItWorks":
            return (
              <HowItWorks
                key={index}
                data={section.data}
                settings={section.settings} 
              />
            );

          case "Testimonials":
            return (
              <Testimonials
                key={index}
                data={section.data} // TS sabe que isso é TestimonialsData
                settings={section.settings} // TS sabe que isso é TestimonialsSettings
              />
            );  

          case "Logos":
            return (
              <Logos
                key={index}
                data={section.data} // TS sabe que isso é TestimonialsData
                settings={section.settings} // TS sabe que isso é TestimonialsSettings
              />
            );  
          
          case "Guarantee":
            return (
              <Guarantee
                key={index}
                data={section.data} // TS sabe que isso é GuaranteeData
                settings={section.settings} // TS sabe que isso é GuaranteeSettings
              />
            );
          
          case "Pricing":
            return (
              <Pricing
                key={index}
                data={section.data} // TS sabe que isso é PricingData
                settings={section.settings} // TS sabe que isso é PricingSettings
              />
            );

          case "Faq":
            return (
              <Faq
                key={index}
                data={section.data} // TS sabe que isso é FaqData
                settings={section.settings} // TS sabe que isso é FaqSettings
              />
            );
            
            case "AboutUs":
            return (
              <AboutUs
                key={index}
                data={section.data} // TS sabe que isso é AboutUsData
                settings={section.settings} // TS sabe que isso é AboutUsData 
              />
            );
          
          case "Footer":
            return (
              <Footer
                key={index}
                data={section.data} // TS sabe que isso é FooterData
                settings={section.settings} // TS sabe que isso é FooterSettings
              />
            );
              
          default:            
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _exhaustiveCheck: never = section;
            return <div key={index}>Componente desconhecido</div>;
        }
      })}
    </main>
  );
}

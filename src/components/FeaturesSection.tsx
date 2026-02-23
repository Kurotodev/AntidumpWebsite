import { Shield, Lock, Eye, Zap, Server, Code } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const icons = [Shield, Lock, Eye, Zap, Server, Code];

const FeaturesSection = () => {
  const { lang } = useLanguage();
  const t = translations.features;

  // Duplicate items for a seamless infinite marquee
  const allItems = [...t.items, ...t.items, ...t.items, ...t.items];

  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="font-mono text-sm text-primary tracking-widest">{t.label[lang]}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 text-foreground">
            {t.title1[lang]} <span className="gradient-red-text">{t.title2[lang]}</span>
          </h2>
        </div>

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex animate-marquee pause-on-hover py-4">
            {allItems.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={i}
                  className="glass-panel p-8 border border-glow transition-all duration-300 w-[350px] min-h-[220px] mx-4 flex-shrink-0 flex flex-col justify-center"
                >
                  <Icon className="w-10 h-10 text-[#ff4d4d] mb-5" />
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title[lang]}</h3>
                  <p className="font-body text-muted-foreground text-base leading-relaxed whitespace-normal">{item.description[lang]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const ProtectionSection = () => {
  const { lang } = useLanguage();
  const t = translations.protection;

  return (
    <section id="protection" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="font-mono text-sm text-primary tracking-widest">{t.label[lang]}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 text-foreground">
            {t.title1[lang]} <span className="gradient-red-text">{t.title2[lang]}</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {t.stats.map((stat, i) => (
            <div key={i} className="text-center glass-panel p-8 border border-glow">
              <div className="font-display text-4xl md:text-5xl font-black gradient-red-text text-glow-red mb-2">
                {stat.value}
              </div>
              <div className="font-body text-lg text-muted-foreground">{stat.label[lang]}</div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {t.layers.map((layer, i) => (
            <div key={i}>
              <div className="flex justify-between mb-2">
                <span className="font-mono text-sm text-foreground">{layer.name[lang]}</span>
                <span className="font-mono text-sm text-primary">{layer.percent}%</span>
              </div>
              <div className="h-2 bg-secondary overflow-hidden">
                <div
                  className="h-full gradient-red glow-red-sm transition-all duration-1000"
                  style={{ width: `${layer.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtectionSection;

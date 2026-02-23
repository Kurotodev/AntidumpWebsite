import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import PaymentMethods from "@/components/PaymentMethods";

const PricingSection = () => {
  const { lang } = useLanguage();
  const t = translations.pricing;

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
      <div className="container mx-auto px-10 relative z-10">
        <div className="text-center mb-20 text-balance">
          <span className="font-mono text-sm text-primary tracking-widest">{t.label[lang]}</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 text-foreground">
            {t.title1[lang]} <span className="gradient-red-text">{t.title2[lang]}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto items-stretch px-4">
          {t.plans.map((plan, i) => (
            <div
              key={i}
              className={`group relative flex flex-col p-10 transition-all duration-500 hover:-translate-y-2 ${plan.highlighted
                ? "z-10 bg-gradient-to-b from-primary/10 via-background to-background"
                : "bg-background/40"
                } border ${plan.highlighted ? "border-primary/50 shadow-[0_0_50px_rgba(255,0,0,0.1)]" : "border-white/5 hover:border-primary/30"
                } rounded-3xl overflow-hidden`}
            >
              {/* Animated background glow for recommended plan */}
              {plan.highlighted && (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,0,0,0.1),transparent_70%)]" />
              )}

              {/* Highlight badge */}
              {plan.highlighted && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-primary-foreground text-[10px] font-bold tracking-[0.15em] w-[180px] py-1.5 rotate-45 translate-x-[55px] translate-y-[28px] shadow-xl uppercase text-center">
                    {t.recommended[lang]}
                  </div>
                </div>
              )}

              <div className="relative z-10 h-full flex flex-col">
                <span className={`inline-block mb-6 px-3 py-1 rounded-md text-[10px] font-mono tracking-widest uppercase border w-fit ${plan.highlighted ? "border-primary/40 text-primary bg-primary/10" : "border-white/10 text-muted-foreground"
                  }`}>
                  {plan.highlighted ? "Elite Defense" : "Standard"}
                </span>

                <h3 className="font-display text-3xl font-black text-foreground mb-2 flex items-center gap-3">
                  {plan.name}
                  {plan.highlighted && <i className="fa-duotone fa-solid fa-sparkles text-primary text-xl" />}
                </h3>
                <p className="font-body text-muted-foreground text-sm mb-8 max-w-[240px] leading-relaxed">
                  {plan.description[lang]}
                </p>

                <div className="flex items-baseline gap-2 mb-10 group-hover:scale-105 transition-transform duration-300">
                  <span className="font-display text-6xl font-black tracking-tighter text-foreground">
                    {plan.price}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">/ LIFETIME</span>
                </div>

                <div className="h-px w-full bg-white/5 mb-8" />

                <ul className="space-y-4 mb-12 flex-1">
                  {plan.features[lang].map((feature, j) => (
                    <li key={j} className="flex items-start gap-4 group/item">
                      <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center border ${plan.highlighted ? "border-primary/30 bg-primary/10" : "border-white/10"
                        }`}>
                        <i className={`fa-solid fa-check text-[10px] ${plan.highlighted ? "text-primary" : "text-muted-foreground"}`} />
                      </div>
                      <span className="font-body text-muted-foreground text-base leading-snug group-hover/item:text-foreground transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://discord.gg/E7mysBQeUk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative w-full py-5 rounded-xl font-display text-xs font-black tracking-[0.3em] uppercase transition-all duration-300 overflow-hidden group/btn text-center flex items-center justify-center ${plan.highlighted
                    ? "bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] shadow-red-500/20"
                    : "border border-white/10 text-foreground hover:border-primary/50 hover:bg-primary/5"
                    }`}
                >
                  <span className="relative z-10">{t.select[lang]}</span>
                  {plan.highlighted && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/btn:animate-[shimmer_2.5s_infinite]" />
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>

        <PaymentMethods />
      </div>
    </section>
  );
};

export default PricingSection;

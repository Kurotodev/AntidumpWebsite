import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const HeroSection = () => {
  const { lang } = useLanguage();
  const t = translations.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Shield protection" className="w-full h-full object-cover opacity-40" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>
      <div className="absolute inset-0 scanline pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-block mb-6 px-4 py-1 border border-glow font-mono text-sm text-primary tracking-widest">
          {t.badge[lang]}
        </div>
        <div className="min-h-[160px] md:min-h-[220px] flex flex-col justify-center mb-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[1.1]">
            <span className="text-foreground whitespace-nowrap">{t.title1[lang]}</span>
            <br />
            <span className="gradient-red-text text-glow-red block md:inline-block mt-2 md:mt-0">{t.title2[lang]}</span>
          </h1>
        </div>
        <p className="text-xl md:text-2xl font-body text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.description[lang]}
        </p>

        <div
          className="relative mx-auto max-w-3xl aspect-video mb-10 glow-red overflow-hidden border border-glow transition-all duration-300"
          style={{ borderRadius: "2vh", transform: "translateZ(0)" }}
        >
          <iframe
            src="https://www.youtube.com/embed/BTZy5r4UVX8"
            title="AntiDump Demo"
            className="w-full h-full"
            style={{ borderRadius: "2vh" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
          <div className="absolute inset-0 scanline pointer-events-none" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://discord.gg/E7mysBQeUk"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-red px-10 py-4 font-display text-lg font-bold tracking-widest text-primary-foreground glow-red hover:scale-105 transition-transform"
          >
            {t.cta1[lang]}
          </a>
          <a href="#features" className="border border-glow px-10 py-4 font-display text-lg font-bold tracking-widest text-foreground hover:bg-primary/10 transition-colors">
            {t.cta2[lang]}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

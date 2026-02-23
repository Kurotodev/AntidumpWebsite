import { Shield, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const Navbar = () => {
  const { lang, setLang } = useLanguage();
  const t = translations.nav;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-glow">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-primary" />
          <span className="font-display text-xl font-bold tracking-wider text-foreground">
            ANTI<span className="text-primary">DUMP</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-body text-lg">
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
            {t.features[lang]}
          </a>
          <a href="#protection" className="text-muted-foreground hover:text-primary transition-colors">
            {t.protection[lang]}
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
            {t.pricing[lang]}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="flex items-center gap-2 border border-glow px-3 py-1.5 font-mono text-xs text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <Globe className="w-4 h-4" />
            {lang === "es" ? "EN" : "ES"}
          </button>
          <a
            href="https://discord.gg/E7mysBQeUk"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-red px-6 py-2 font-display text-sm font-semibold tracking-wider text-primary-foreground glow-red-sm hover:scale-105 transition-transform"
          >
            {t.buy[lang]}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

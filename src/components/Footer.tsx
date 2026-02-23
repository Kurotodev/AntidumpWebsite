import { Shield } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const Footer = () => {
  const { lang } = useLanguage();
  const t = translations.footer;

  return (
    <footer className="border-t border-glow py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Shield className="w-6 h-6 text-primary" />
          <span className="font-display text-lg font-bold tracking-wider text-foreground">
            ANTI<span className="text-primary">DUMP</span>
          </span>
        </div>
        <p className="font-body text-muted-foreground">{t.copyright[lang]}</p>
      </div>
    </footer>
  );
};

export default Footer;

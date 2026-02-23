import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const methods = [
  { name: "Binance", icon: "fa-duotone fa-solid fa-hexagon-nodes", color: "text-[#F3BA2F]" },
  { name: "Bitcoin", icon: "fa-brands fa-bitcoin", color: "text-[#F7931A]" },
  { name: "PayPal", icon: "fa-brands fa-paypal", color: "text-[#003087]" },
  { name: "Zelle", icon: "fa-duotone fa-solid fa-bolt-lightning", color: "text-[#6B16D1]" },
  { name: "BBVA", subtitle: "México", icon: "fa-duotone fa-solid fa-building-columns", color: "text-blue-500" },
  { name: "TD Bank", subtitle: "Canada", icon: "fa-duotone fa-solid fa-building-columns", color: "text-green-600" },
  { name: "Crypto", subtitle: "ETH, LTC...", icon: "fa-duotone fa-solid fa-coins", color: "text-[#ff4d4d]" },
  { name: "Gift Card", subtitle: "Amazon/Steam", icon: "fa-duotone fa-solid fa-gift-card", color: "text-[#ff4d4d]" },
];

const PaymentMethods = () => {
  const { lang } = useLanguage();
  const t = translations.pricing;

  return (
    <div className="mt-24 mb-10 text-center">
      <div className="inline-block mb-10 px-4 py-1 border border-glow/30 font-mono text-[10px] text-primary/70 tracking-[0.2em] uppercase bg-primary/5">
        {t.paymentTitle[lang]}
      </div>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto px-4">
        {methods.map((m, i) => (
          <div
            key={i}
            className="glass-panel border border-glow/20 px-6 py-4 flex items-center gap-4 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group min-w-[170px] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full -mr-8 -mt-8 blur-2xl group-hover:bg-primary/10 transition-colors" />

            <div className="relative z-10">
              <div className={`text-2xl ${m.color} transition-transform duration-300 group-hover:scale-110 flex items-center justify-center w-8 h-8`}>
                <i className={m.icon}></i>
              </div>
            </div>

            <div className="text-left relative z-10">
              <span className="font-display text-sm font-bold text-foreground block tracking-wide group-hover:text-primary transition-colors">
                {m.name}
              </span>
              {m.subtitle && (
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-tight">
                  {m.subtitle}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;

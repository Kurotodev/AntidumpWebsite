export type Lang = "es" | "en";

export const translations = {
  nav: {
    features: { es: "Características", en: "Features" },
    protection: { es: "Protección", en: "Protection" },
    pricing: { es: "Precios", en: "Pricing" },
    buy: { es: "COMPRAR", en: "BUY NOW" },
  },
  hero: {
    badge: { es: "SISTEMA DE PROTECCIÓN v6.0", en: "PROTECTION SYSTEM v6.0" },
    title1: { es: "PROTEGE TU", en: "PROTECT YOUR" },
    title2: { es: "SERVIDOR", en: "SERVER" },
    description: {
      es: "El sistema anti dump más avanzado para FiveM. Encriptación militar, detección en tiempo real y protección total contra extracciones no autorizadas.",
      en: "The most advanced anti dump system for FiveM. Military-grade encryption, real-time detection and total protection against unauthorized extractions.",
    },
    cta1: { es: "OBTENER AHORA", en: "GET NOW" },
    cta2: { es: "VER MÁS", en: "LEARN MORE" },
  },
  features: {
    label: { es: "CARACTERÍSTICAS", en: "FEATURES" },
    title1: { es: "PROTECCIÓN", en: "TOTAL" },
    title2: { es: "TOTAL", en: "PROTECTION" },
    items: [
      {
        title: { es: "Anti Dump Total", en: "Total Anti-Dump" },
        description: {
          es: "Protección completa contra la extracción de scripts y recursos de tu servidor FiveM.",
          en: "Complete protection against script and resource extraction from your FiveM server.",
        },
      },
      {
        title: { es: "Detección en Tiempo Real", en: "Real-Time Detection" },
        description: {
          es: "Monitoreo 24/7 que detecta y bloquea intentos de dump automáticamente.",
          en: "24/7 monitoring that detects and blocks dump attempts automatically.",
        },
      },
      {
        title: { es: "Bajo Impacto", en: "Low Impact" },
        description: {
          es: "Optimizado para no afectar el rendimiento de tu servidor. 0% lag garantizado.",
          en: "Optimized to not affect your server performance. 0% lag guaranteed.",
        },
      },
      {
        title: { es: "Multi-Servidor", en: "Multi-Server" },
        description: {
          es: "Licencia flexible para proteger múltiples (maximo 3) servidores con un solo panel de control.",
          en: "Flexible license to protect multiple (maximum 3) servers with a single control panel.",
        },
      },
    ],
  },
  protection: {
    label: { es: "CALIDAD", en: "QUALITY" },
    title1: { es: "NIVEL DE", en: "PROTECTION" },
    title2: { es: "PROTECCIÓN", en: "LEVEL" },
    stats: [
      { value: "99.9%", label: { es: "Tasa de Protección", en: "Protection Rate" } },
      { value: "0ms", label: { es: "Impacto en Lag", en: "Lag Impact" } },
      { value: "24/7", label: { es: "Monitoreo Activo", en: "Active Monitoring" } },
      { value: "50+", label: { es: "Servidores Protegidos", en: "Protected Servers" } },
    ],
    layers: [
      { name: { es: "Capa 1 — Anti Dump", en: "Layer 1 — Anti Inject Cheats" }, percent: 99.9 },
      { name: { es: "Capa 2 — Anti External Dump", en: "Layer 2 — Anti External Dump" }, percent: 100 }
    ],
  },
  pricing: {
    label: { es: "PRECIOS", en: "PRICING" },
    title1: { es: "ELIGE TU", en: "CHOOSE YOUR" },
    title2: { es: "PLAN", en: "PLAN" },
    select: { es: "SELECCIONAR", en: "SELECT" },
    recommended: { es: "RECOMENDADO", en: "RECOMMENDED" },
    plans: [
      {
        name: "EXTERNAL CHEATS",
        price: "$30",
        description: {
          es: "Protección contra amenazas externas",
          en: "Protection against external threats",
        },
        features: {
          es: [
            "Detección de Bots",
            "Bloqueo de Páginas de Dump",
            "Protección contra Scrapers",
            "Soporte por Discord",
            "Actualizaciones semanales",
          ],
          en: [
            "Bot Detection",
            "Dump Page Blocking",
            "Scraper Protection",
            "External Trainer Blocking",
            "Discord Support",
            "Weekly Updates",
          ],
        },
        highlighted: false,
      },
      {
        name: "COMBO",
        price: "$100",
        description: {
          es: "External + Internal — Protección completa 2 en 1",
          en: "External + Internal — Complete 2-in-1 protection",
        },
        features: {
          es: [
            "Todo de External Cheat",
            "Todo de Internal Cheat",
            "Protección Completa 2 en 1",
            "Detección de Bots + DLL Injection",
            "Detección en Tiempo Real",
            "Soporte Prioritario 24/7",
            "Auditoría de Seguridad",
          ],
          en: [
            "Everything in External Cheat",
            "Everything in Internal Cheat",
            "Complete 2-in-1 Protection",
            "Bot + DLL Injection Detection",
            "Real-Time Detection",
            "24/7 Priority Support",
            "Security Audit",
          ],
        },
        highlighted: true,
      },
      {
        name: "INTERNAL CHEAT",
        price: "$80",
        description: {
          es: "Protección contra cheats inyectados",
          en: "Protection against injected cheats",
        },
        features: {
          es: [
            "Detección de DLL Injection",
            "Protección de Memoria",
            "Detección en Tiempo Real",
            "Soporte Prioritario 24/7"
          ],
          en: [
            "DLL Injection Detection",
            "Memory Protection",
            "Real-Time Detection",
            "24/7 Priority Support"
          ],
        },
        highlighted: false,
      },
    ],
    paymentTitle: { es: "MÉTODOS DE PAGO ACEPTADOS", en: "ACCEPTED PAYMENT METHODS" },
  },
  footer: {
    copyright: {
      es: "© 2026 AntiDump. Protección total para servidores FiveM.",
      en: "© 2026 AntiDump. Total protection for FiveM servers.",
    },
  },
} as const;

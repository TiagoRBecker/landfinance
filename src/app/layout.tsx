import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"], // todas as weights
  variable: "--font-sora",
  display: "swap",
});




const domain = "www.cotasraciais.guedesbampoi.com.br"
export const metadata: Metadata = {
 
  title: "Advocacia Especializada em Cotas Raciais | Defesa e Recursos",

 
  description:
    "Seu direito às cotas raciais foi negado? Nosso escritório oferece assessoria jurídica completa para recursos administrativos e ações judiciais, garantindo a sua vaga. Consulte um especialista agora.",

  
  keywords: [
    "advogado cotas raciais",
    "recurso cotas raciais",
    "banca de heteroidentificação",
    "negativa cotas faculdade",
    "escritório de advocacia cotas",
    "ação judicial cotas raciais",
  ],

  verification: {
    google: "7ZvCvS9A3nvuxZ-6jB5FKckD77MYeeIMHyaYu6DiERo",
  },
  alternates: {
    canonical: "/",
  },

 
  openGraph: {
    title: "Defesa Legal em Cotas Raciais: Garanta Sua Vaga",
    description:
      "Assessoria jurídica especializada para reverter a negativa em bancas de heteroidentificação. Fale com um advogado.",
    url: domain, 
    siteName: "Nome do Escritório | Advocacia",
    images: [
      {
        url: "", // 
        height: 630,
        alt: "Advogado defendendo o direito às cotas raciais",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  // 6. Robots (Instruções para os robôs de busca)
  robots: {
    index: true, // Permite indexar
    follow: true, // Permite seguir links
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // 7. Twitter Card (Otimização para Twitter/X)
 
};

// ----------------------------------------------------------------------

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className} `}>{children}</body>
    </html>
  );
}

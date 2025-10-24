import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"], // todas as weights
  variable: "--font-sora",
  display: "swap",
});




const domain = "https://dividas.guedesbampoi.com.br"
export const metadata: Metadata = {
 
  title: "Nulidades e Prescrição em Cobrança e Execução | Defesa Legal",

 
  description:
    "Identifique Nulidades e Prescrições em Processos de Cobrança e Execução. Nosso escritório é especializado em estratégias de defesa para devedores e otimização para credores. Consulte um especialista.",

 
  keywords: [
    "nulidade processo cobrança",
    "prescrição intercorrente",
    "exceção de pré-executividade",
    "defesa processo execução",
    "nulidade citação execução",
    "advogado processo execução",
    "extinção de execução por prescrição",
  ],

  verification: {
    google: "7ZvCvS9A3nvuxZ-6jB5FKckD77MYeeIMHyaYu6DiERo",
  },
  alternates: {
    canonical: "/",
  },

 
  openGraph: {
    title: "Análise Jurídica: Nulidades e Prescrições em Processos de Dívida",
    description:
      "Assessoria especializada em direito processual para análise e alegação de nulidades, decadência e prescrição em ações de cobrança e execução. Proteja seu patrimônio.",
    url: domain, 
    
    siteName: "Guedes Bampi Advogados Associados | Advocacia", 
    images: [
      {
        url: "", // Inserir URL da imagem relevante (ex: jurista analisando documentos ou balança da justiça)
        height: 630,
        alt: "Advogado analisando processo judicial de cobrança e execução",
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
  // Adicione se necessário, seguindo o padrão anterior.
 
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

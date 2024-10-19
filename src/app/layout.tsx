import type { Metadata } from "next";
 import {Montserrat} from "next/font/google";
import "./globals.css";

 

export const metadata: Metadata = {
  title: "Green Ice",
  description: "Em nossa plataforma, oferecemos soluções tecnológicas personalizadas que vão desde migrações de servidores on-premise para a nuvem até consultorias em TI e auditorias de segurança. Além disso, incentivamos a implementação de políticas de igualdade de gênero, oferecendo serviços exclusivos para empresas que atingem metas de diversidade. Com nosso suporte, sua empresa pode acessar treinamentos, desenvolvimento de software sob medida e monitoramento de infraestrutura, tudo isso enquanto promove uma cultura mais inclusiva e preparada para o futuro. Transforme sua organização em um exemplo de inovação e igualdade com nossos serviços especializados.",
};
const font  = Montserrat({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={font.className }
      >
        {children}
      </body>
    </html>
  );
}

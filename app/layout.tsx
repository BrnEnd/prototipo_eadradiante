import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "EaD Radiante — Graduação, Pós e Formação Pedagógica",
  description: "Cursos 100% online, suporte e selo MEC. Estude no seu tempo.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-[color:var(--bg)] text-white antialiased scroll-smooth">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ambiental · Montevideo",
  description:
    "Visualizaciones e indicadores ambientales de Montevideo. Observatorio Ambiental.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

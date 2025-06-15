import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";

const poppins = Poppins ({
  subsets: ["latin"],
  weight: ["200", "400", "500", "800"],
});

export const metadata: Metadata = {
  title: "JhosaviaPassword",
  description: "Creando un administrador de contraseñas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}>
          {children}
          <Toaster />
          </body>
    </html>
  );
}

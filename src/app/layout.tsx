import type { Metadata } from "next";
import { Poppins, Montserrat, Fira_Code } from "next/font/google";
import "../style/globals.css";
import { Navbar, Footer } from "@/components";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--firacode",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RinoRezky",
  description:
    "Welcome to Rino Rezky's portfolio website. Explore projects, skills, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} ${firaCode.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

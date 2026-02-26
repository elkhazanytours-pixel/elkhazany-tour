import "./globals.css";
import Providers from "../components/Providers";
import Footer from "../components/Footer";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "El Khazany Tour",
  description: "Luxury private tours in Egypt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={[
          inter.variable,
          playfair.variable,
          "bg-[#0B0B0F] text-white antialiased selection:bg-yellow-500/30 selection:text-yellow-100",
        ].join(" ")}
      >
        <div className="cine-vignette" />
        <div className="cine-grain" />
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
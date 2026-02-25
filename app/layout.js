import "./globals.css";
import Providers from "../components/Providers";
import Footer from "../components/Footer";

export const metadata = {
  title: "El Khazany Tour",
  description: "Luxury private tours in Egypt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#0B0B0F] text-white">
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
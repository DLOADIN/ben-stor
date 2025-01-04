import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://benstores.vercel.app/"),
  title: {
    default: "BS BRAND",
    template: "%s | BS BRAND",
  },
  description: "BEN STORES AND BS BRAND",
  openGraph: {
    title: "BS BRAND",
    type: "website",
    locale: "en_US",
    siteName: "BSBRAND",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: "linear-gradient(to top, #dfe9f3 0%, white 100%)",
          backgroundColor: "black",
          color: "black",
        }}
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}

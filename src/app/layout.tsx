import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bsbrandstore.com/"),
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

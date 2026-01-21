import "./globals.css";

// Page metadata for SEO
const siteConfig = {
  title: "BS BRAND",
  description: "BEN STORES AND BS BRAND",
  url: "https://bsbrandstore.com/",
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

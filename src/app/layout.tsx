import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gianti Logistics - Leading Transport and Logistics Solutions",
  description:
    "We go beyond the traditional role of a logistics provider; we're your reliable partner in cold chain management. With a rich history rooted in family values and over 25 years of hands-on industry experience, we've grown to become a top-tier 4PL provider.",
  openGraph: {
    title: "Gianti Logistics - Leading Transport and Logistics Solutions",
    description:
      "We go beyond the traditional role of a logistics provider; we're your reliable partner in cold chain management.",
    images: ["/images/gianti/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-mod-js w-mod-ix">
      <head>
        <link
          href="https://cdn.prod.website-files.com/660eb6abe8cde3bea6a9c111/css/freezpak.webflow.shared.d6e0db068.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/images/gianti/favicon.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link href="/images/gianti/favicon.png" rel="apple-touch-icon" />
      </head>
      <body data-scroll-time="0">{children}</body>
    </html>
  );
}

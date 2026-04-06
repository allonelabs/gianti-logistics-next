import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gianti Logistics - Leading Transport and Logistics Solutions",
  description:
    "Gianti Logistics is a leading transport and logistics provider based in Georgia, specializing in containerized, heavy lift, and project cargo transportation across the Caucasus, CIS, and worldwide. Marine services, terminal operations, and multimodal freight solutions.",
  openGraph: {
    title: "Gianti Logistics - Leading Transport and Logistics Solutions",
    description:
      "Leading transport and logistics provider in Georgia. Containerized, heavy lift, and project cargo. Marine services, terminal operations, multimodal freight.",
    images: ["/images/gianti/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ka" className="w-mod-js w-mod-ix">
      <head>
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

import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Construction Page",
  description: "Generated by Tobibor Rahman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

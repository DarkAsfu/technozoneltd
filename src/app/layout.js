import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const monumentExtended = localFont({
  src: "./fonts/MonumentExtended-Regular.otf",
  variable: "--font-monument-extended",
  weight: "100 400",
});
export const metadata = {
  title: "TechnoZoneLtd",
  description: "Technozone is startup agency company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${monumentExtended.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

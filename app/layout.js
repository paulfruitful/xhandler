import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./_components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "XHandler",
  description: "Edit, Delete and Handle Your Twitter More Efficiently",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black antialiased`}
      >
        <Nav/>
        {children}
      </body>
    </html>
  );
}

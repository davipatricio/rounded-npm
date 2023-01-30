import Navbar from "@/components/Navbar";
import { Inter } from "@next/font/google";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  params: {
    slug: string[];
  };
  children: React.ReactNode;
}

export default function RootLayout({ children, params: { slug } }: Props) {
  console.log('sec layout')
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        {slug.length === 1 && <Navbar />}

        {children}
      </body>
    </html>
  );
}

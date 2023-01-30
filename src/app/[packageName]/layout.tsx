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
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

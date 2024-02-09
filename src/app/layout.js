import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import 'swiper/css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tickete",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main>
        {children}
        </main>
      <Footer/>
        </body>
    </html>
  );
}

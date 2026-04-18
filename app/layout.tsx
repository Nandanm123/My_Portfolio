import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nandan Mallikarjuna | AI Engineer & ML Specialist Portfolio",
  description: "Portfolio showcasing AI/ML projects, ETL pipelines, computer vision, and full-stack AI solutions. Real-time crop prediction (99% accuracy), Netflix clone with Docker, ball tracking system, and deep fake detection. Experienced in Python, TensorFlow, PyTorch, AWS, Azure, and Kubernetes.",
  keywords: "AI Engineer, Machine Learning, Data Engineering, MLOps, Python, TensorFlow, PyTorch, AWS, Docker, Computer Vision, NLP",
  authors: [{ name: "Nandan Mallikarjuna" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nandan-portfolio.com",
    title: "Nandan Mallikarjuna | AI Engineer & ML Specialist",
    description: "Portfolio showcasing AI/ML expertise with real-world projects in crop prediction, streaming platforms, computer vision, and deep learning.",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Nandan Mallikarjuna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandan Mallikarjuna | AI Engineer Portfolio",
    description: "AI/ML engineer specializing in production-grade solutions for data science, MLOps, and computer vision.",
    creator: "@nandan_ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${font.className} antialiased bg-[#0d0d1f]`}>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

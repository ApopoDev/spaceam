import "./app.css";
import localFont from "next/font/local";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const alpino = localFont({
  src: "../../public/fonts/Alpino-Variable.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-alpino",
});

const ViewCanvas = dynamic(() => import("@/components/ViewCanvas"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable} suppressHydrationWarning>
      <body className="overflow-x-hidden bg-salmon">
        <Header />
        <main>
          {children}
          <ViewCanvas />
        </main>
        <Footer />
      </body>
    </html>
  );
}

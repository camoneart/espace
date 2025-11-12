import { Roboto_Flex, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Pointer from "@/features/pointer/components/Pointer";
import { pageMetadata } from "@/config/metadata";

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = pageMetadata.home;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${robotoFlex.variable} ${notoSerifJP.variable} antialiased tracking-wider h-dvh`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="h-full px-[30px]">{children}</main>
          <Footer />
          <Pointer />
        </ThemeProvider>
      </body>
    </html>
  );
}

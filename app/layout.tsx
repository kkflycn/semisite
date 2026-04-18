import type { Metadata } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sc",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "芯迹半导体设备 — 专业半导体中后道二手设备交易与服务",
    template: "%s | 芯迹半导体设备",
  },
  description:
    "专业从事半导体中后道二手/翻新设备交易与服务，涵盖焊线机、探针台、划片机、固晶机、测试机等，提供验机、整备、安装调试及维保全流程服务。",
  keywords: [
    "半导体设备",
    "二手半导体设备",
    "焊线机",
    "探针台",
    "划片机",
    "固晶机",
    "测试机",
    "Wire Bonder",
    "Probe Station",
    "Dicing Saw",
    "Die Bonder",
    "半导体服务",
  ],
  authors: [{ name: "芯迹半导体设备" }],
  creator: "芯迹半导体设备",
  metadataBase: new URL("https://www.xinjisemi.com"),
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.xinjisemi.com",
    siteName: "芯迹半导体设备",
    title: "芯迹半导体设备 — 专业半导体中后道二手设备交易与服务",
    description:
      "专业从事半导体中后道二手/翻新设备交易与服务，涵盖焊线机、探针台、划片机、固晶机、测试机等。",
  },
  twitter: {
    card: "summary_large_image",
    title: "芯迹半导体设备",
    description: "专业半导体中后道二手设备交易与服务",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} ${notoSansSC.variable} dark h-full`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-background text-foreground antialiased"
        style={{
          fontFamily:
            "var(--font-noto-sc), var(--font-inter), system-ui, sans-serif",
        }}
      >
        <Header />
        {/* pt-16 compensates for the fixed header height */}
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

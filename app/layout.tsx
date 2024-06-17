import type { Metadata } from "next";
import Script from 'next/script'
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";


import HeaderMenu from "./components/HeaderMenu";
import FooterForm from "./components/FooterForm";
import FooterSert from "./components/FooterSert";
import FooterMenu from "./components/FooterMenu";
import MobileMenu from "./components/MobileMenu";

import '../styles/assets/compile/style4.css';
import '../styles/assets/compile/style6.css';
import '../styles/assets/compile/style9.css';
import '../styles/assets/compile/style15.css';
import '../styles/assets/compile/style16.css';
import '../styles/assets/compile/style17.css';
import '../styles/assets/compile/style18.css';
import '../styles/assets/compile/style22.css';
import '../styles/assets/compile/style23.css';
import '../styles/assets/compile/style24.css';
import '../styles/assets/style.css';

import Contacts from "./components/Contacts";
import YandexMetric from "./components/YandexMetric";
import type { Viewport } from 'next'
 
export const viewport: Viewport = {
  themeColor: 'white',
}

import BackBanner from "./components/BackBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEO-First digital-агентство: сайты, продвижение, реклама!",
  description: "Доступные цены на разработку сайтов в Волгограде. Большое портфолио и качественное портфолио! Самые конкурентные цены и сроки. Строгие гарантии на результат и сроки со 100% возвратом денег!",
  // icons: {
  //   icon: "/favicon.ico",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

//   React.useEffect(() => {
//     const event = new Event('rendered')
//     document.dispatchEvent(event)
// }, [])


  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="l-site_wrap js-body">
            <div className="l-site js-site">
                <div className="b-scrolltop js-scrolltop"></div>
                <HeaderMenu />
                  {children}
                <FooterForm />
                <FooterSert />
                <FooterMenu />
            </div>
        <MobileMenu />
        </div>
        <BackBanner />
        <Contacts />
        <YandexMetric />
      </body>
      <Script src="/javascript.js" />
    </html>
  );
}

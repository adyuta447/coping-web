import "@/styles/globals.css";
import "@/styles/navbar.css";
import "@/styles/header.css";
import "@/styles/aboutus.css";
import "@/styles/menuitem.css";
import "@/styles/dampaksocial.css";
import "@/styles/tokoh.css";
import "@/styles/laurels.css";
import "@/styles/chatai.css";
import "@/styles/footeroverlay.css";
import "@/styles/footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <title>Coping Mechanism</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

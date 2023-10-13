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

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Component {...pageProps} />;
}

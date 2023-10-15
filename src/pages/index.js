import ChatAI from "@/components/ChatAI/ChatAI";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/container/Footer/Footer";
import dynamic from "next/dynamic";
import React from "react";

const Header = dynamic(() => import("@/container/Header/Header"));
const AboutUs = dynamic(() => import("@/container/AboutUs/AboutUs"));
const DampakSocial = dynamic(() =>
  import("@/container/DampakSocial/DampakSocial")
);
const Tokoh = dynamic(() => import("@/container/Tokoh/Tokoh"));
const Laurels = dynamic(() => import("@/container/Laurels/Laurels"));
const FindUs = dynamic(() => import("@/container/FindUs/FindUs"));

export default function index() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <AboutUs />
        <DampakSocial />
        <Tokoh />
        <Laurels />
        <FindUs />
        <Footer />
      </div>
    </>
  );
}

// // app/page.js
// import Chat from "./chat";

// export default function Page() {
//   return <Chat />;
// }

import ChatAI from "@/components/ChatAI/ChatAI";
import Navbar from "@/components/Navbar/Navbar";
import DampakSocial from "@/container/DampakSocial/DampakSocial";
import FindUs from "@/container/FindUs/FindUs";
import Footer from "@/container/Footer/Footer";
import Laurels from "@/container/Laurels/Laurels";
import Tokoh from "@/container/Tokoh/Tokoh";
import dynamic from "next/dynamic";
import React from "react";

const Header = dynamic(() => import("@/container/Header/Header"));
const AboutUs = dynamic(() => import("@/container/AboutUs/AboutUs"));
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

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import Image from "next/image";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">
          Project Profile Penguatan Pelajar Pencasila
        </h1>
        <p className="p__opensans">SMAS Suluh Jakarta</p>
        <p className="p__opensans">Kelas Fase F-1</p>
      </div>

      <div className="app__footer-links_logo">
        <Image
          src="/assets/trinity.png"
          width={210}
          height={45}
          layout="responsive"
          alt="footer_logo"
        />
        <p className="p__opensans">
          &quot;Kegagalan adalah kunci kesuksesan tapi saya lupa taruh kuncinya
          dimana&quot;
        </p>

        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Anggota Kelompok 3</h1>
        <p className="p__opensans">Jan Agra Adyuta H. </p>
        <p className="p__opensans">Nur Arinafi Rizkia Putri</p>
        <p className="p__opensans">Fariz Nizar S.</p>
        <p className="p__opensans">M. Gibran Al Ikhsan</p>
        <p className="p__opensans">Fatih Nibras Kaysan</p>
        <p className="p__opensans">Rajandra Pratama A.</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Copyright Trinity</p>
    </div>
  </div>
);

export default Footer;

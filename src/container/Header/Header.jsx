import Image from "next/image";
import SubHeading from "@/components/SubHeading/SubHeading";

export default function Header() {
  return (
    <>
      <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
          <SubHeading title="Coping Mechanism" />
          <h1
            className="app__header-h1"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            Rokok dalam Mengatasi Stres Remaja
          </h1>
          <p
            className="p__opensans"
            style={{ margin: "2rem 0" }}
            data-aos="fade-down"
            data-aos-delay="600"
            data-aos-offset="0"
          >
            Mengatasi stres remaja bukanlah tugas yang mudah, tetapi apa yang
            terjadi jika solusi yang mereka pilih, seperti merokok, justru
            menjadi bagian dari masalahnya?
          </p>
        </div>
        <div
          className="app__wrapper_img"
          data-aos="zoon-in"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <Image
            src="/assets/welcome.png"
            width={450}
            height={496}
            layout="responsive"
            alt="header_img"
          />
        </div>
      </div>
    </>
  );
}

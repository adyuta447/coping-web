import Image from "next/image";
import SubHeading from "@/components/SubHeading/SubHeading";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Coping Mechanism" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Kesimpulan dari Dilema Merokok
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
    </div>

    <div className="app__wrapper_img">
      <Image
        src="/assets/saly-19.png"
        width={450}
        height={496}
        layout="responsive"
        alt="finus_img"
      />
    </div>
  </div>
);

export default FindUs;

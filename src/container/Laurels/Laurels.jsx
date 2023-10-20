import Image from "next/image";
import data from "../../constant/data";
import SubHeading from "@/components/SubHeading/SubHeading";

const AwardCard = ({ award: { title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <div className="app__laurels_awards-card_content">
      <p
        className="p__cormorant"
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-offset="0"
        style={{ color: "#DCCA87" }}
      >
        {title}
      </p>
      <p
        className="p__opensans"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-offset="0"
      >
        {subtitle}
      </p>
    </div>
  </div>
);

const Laurels = () => (
  <div
    className="app__bg__laurels app__wrapper section__padding"
    id="dokumentasi"
  >
    <div className="app__wrapper_info">
      <SubHeading title="Coping Mechanism" />
      <h1 className="headtext__cormorant">Dilema Merokok di Kalangan Remaja</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>

    <div className="app__wrapper_img">
      <Image
        src="/assets/msn.png"
        width={500}
        height={500}
        layout="responsive"
        loading="lazy"
        alt="laurels_img"
      />
    </div>
  </div>
);

export default Laurels;

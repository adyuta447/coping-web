import Image from "next/image";
import data from "../../constant/data";
import SubHeading from "@/components/SubHeading/SubHeading";

const AwardCard = ({ award: { title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg__laurels app__wrapper section__padding" id="dokumentasi">
    <div className="app__wrapper_info">
      <SubHeading title="Coping Mechanism" />
      <h1 className="headtext__cormorant">Dilema Merokok Bagi Merokok</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>

    <div className="app__wrapper_img">
      <Image
        src="/assets/man.png"
        width={500}
        height={500}
        layout="responsive"
        alt="laurels_img"
      />
    </div>
  </div>
);

export default Laurels;

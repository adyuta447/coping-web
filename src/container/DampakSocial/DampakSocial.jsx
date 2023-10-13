import SubHeading from "@/components/SubHeading/SubHeading";
import MenuItem from "@/components/MenuItem/MenuItem";
import data from "../../constant/data";
import Image from "next/image";

const DampakSocial = () => (
  <div className="app__dampakSocial flex__center section__padding" id="dampak">
    <div className="app__dampakSocial-title">
      <SubHeading title="Coping Mechanism" />
      <h1 className="headtext__cormorant">Dampak dari Rokok</h1>
    </div>

    <div className="app__dampakSocial-main">
      <div className="app__dampakSocial-main_positive  flex__center">
        <p className="app__dampakSocial-main_heading">Dampak Positif</p>
        <div className="app__dampakSocial_menu_items">
          {data.positive.map((positive, index) => (
            <MenuItem
              key={positive.title + index}
              title={positive.title}
              number={positive.number}
              desc={positive.desc}
            />
          ))}
        </div>
      </div>

      <div className="app__dampakSocial-main_img">
        <Image
          src="/assets/boy-cigarette.png"
          width={377}
          height={661}
          property="priority"
          alt="menu__img"
          layout="responsive"
          loading="lazy"
        />
      </div>

      <div className="app__dampakSocial-main_negative  flex__center">
        <p className="app__dampakSocial-main_heading">Dampak Negatif</p>
        <div className="app__dampakSocial_menu_items">
          {data.negative.map((negative, index) => (
            <MenuItem
              key={negative.title + index}
              title={negative.title}
              number={negative.number}
              desc={negative.desc}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default DampakSocial;

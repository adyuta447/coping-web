import Image from "next/image";
import SubHeading from "@/components/SubHeading/SubHeading";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Coping Mechanism" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Kesimpulan dari Dilema Merokok di Kalangan Remaja
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Pemahaman yang mendalam tentang dilema merokok sebagai mekanisme
          koping pada remaja sangat berdampak pada kesejahteraan mereka. Ini
          membantu remaja menyadari bahwa merokok, meskipun memberikan lega
          sementara, bukanlah solusi yang berkelanjutan.
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Lantas, Apa solusi dari permasalahan tersebut?
        </p>
        <p className="p__opensans">
          Edukasi, dukungan sosial, dan pengembangan keterampilan untuk
          mengatasi tekanan secara adaptif penting untuk membantu mereka membuat
          pilihan gaya hidup yang lebih sehat.
        </p>
        <br />
        <p className="p__opensans">
          Dengan kerja sama dan dukungan yang tepat, kita dapat membimbing
          remaja menuju masa depan yang lebih cerah dan bebas dari risiko
          kesehatan.
        </p>
      </div>
    </div>

    <div className="app__wrapper_img">
      <Image
        src="/assets/findus.png"
        width={450}
        height={496}
        layout="responsive"
        alt="finus_img"
        style={{
          borderBottomRightRadius: "50px",
        }}
      />
    </div>
  </div>
);

export default FindUs;

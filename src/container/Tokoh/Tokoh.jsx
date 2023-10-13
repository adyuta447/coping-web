import Image from "next/image";
import SubHeading from "@/components/SubHeading/SubHeading";

export default function Tokoh() {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <Image
          src="/assets/lewis.png"
          width={437}
          height={544}
          layout="responsive"
          alt="img__tokoh"
        />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Menurut Buku" />
        <h1 className="headtext__cormorant">
          The Psychology <br />
          of Stress: An Integrated Approach
        </h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <Image
              src="/assets/quote.png"
              width={46}
              height={40}
              alt="quote_image"
            />
            <p className="p__opensans">
              Merokok mengandung nikotin yang dapat memberikan sensasi relaksasi
              pada sistem saraf.
            </p>
          </div>
          <p className="p__opensans">
            {" "}
            bahwa nikotin memiliki efek menenangkan yang dapat membantu
            mengurangi rasa tegang dan kecemasan, sehingga merokok bisa dianggap
            sebagai upaya untuk mengatasi stres.{" "}
          </p>
        </div>

        <div className="app__chef-sign">
          <p>Richard L. Lewis</p>
          <p className="p__opensans">
            Professor of Psychology, Linguistics and Cognitive Science,
            University of Michigan
          </p>
        </div>
      </div>
    </div>
  );
}

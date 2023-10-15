const MenuItem = ({ title, number, desc }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p
          className="p__cormorant"
          data-aos="fade-down"
          data-aos-delay="600"
          data-aos-offset="0"
          style={{ color: "#DCCA87" }}
        >
          {title}
        </p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p className="p__cormorant">{number}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p
        className="p__opensans"
        data-aos="fade-up"
        data-aos-delay="1000"
        data-aos-offset="0"
        style={{ color: "#AAAAAA" }}
      >
        {desc}
      </p>
    </div>
  </div>
);

export default MenuItem;

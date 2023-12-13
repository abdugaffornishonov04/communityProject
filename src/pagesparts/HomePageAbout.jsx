const HomePageAbout = () => {
  return (
    <section className="home-page-about">
      <div className="container">
        <div className="hpa-wrapper">
          <h2 className="hpa-title">
            We help more than 1500 companies from all sectors
          </h2>
          <p className="hpa-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
            commodo suscipit tellus et pellentesque.
          </p>
          <div className="hpa-cards">
            <div className="hpa-card">
              <div className="hpa-card-image">
                <img src="/hpa-cardimg1.png" alt="" />
              </div>
              <h4>Business strategy</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et,{" "}
              </p>
              <a href="#">
                <p>Learn More </p>
                <img src="/hpa-arrow.svg" alt="" />
              </a>
            </div>
            <div className="hpa-card">
              <div className="hpa-card-image">
                <img src="/hpa-cardimg2.png" alt="" />
              </div>
              <h4>Business strategy</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et,{" "}
              </p>
              <a href="#">
                <p>Learn More </p>
                <img src="/hpa-arrow.svg" alt="" />
              </a>
            </div>
            <div className="hpa-card">
              <div className="hpa-card-image">
                <img src="/hpa-cardimg3.png" alt="" />
              </div>
              <h4>Business strategy</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et,{" "}
              </p>
              <a href="#">
                <p>Learn More </p>
                <img src="/hpa-arrow.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageAbout;

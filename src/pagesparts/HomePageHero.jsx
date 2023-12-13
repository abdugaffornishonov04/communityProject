const HomePageHero = () => {
  return (
    <section className="home-page-hero">
      <div className="container">
        <div className="hph-wrapper">
          <div className="hph-left">
            <h1 className="hph-title">Prosper with our bespoke solutions</h1>
            <p className="hph-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique
            </p>
            <div className="hph-link">
              <a href="#" className="hph-link1">
                See our services
              </a>
              <a href="#" className="hph-link2">
                See All Services
              </a>
            </div>
            <div className="hph-logos">
              <p>Worked with 100+ Companies</p>
              <div className="hph-logos-wrapper">
                <img src="/hphlogos1.svg" alt="" />
                <img src="/hphlogos2.svg" alt="" />
                <img src="/hphlogos3.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="hph-right">
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;

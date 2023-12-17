import HomePageAbout from "../pagesparts/HomePageAbout";
import HomePageHero from "../pagesparts/HomePageHero";
import HomePageSoftware from "../pagesparts/HomePageSoftware";

const HomePage = () => {
  return (
    <div className="home-page">
      <HomePageHero />
      <HomePageAbout />
      <HomePageSoftware />
    </div>
  );
};

export default HomePage;

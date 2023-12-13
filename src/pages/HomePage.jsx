import HomePageAbout from "../pagesparts/HomePageAbout";
import HomePageHero from "../pagesparts/HomePageHero";

const HomePage = () => {
  return (
    <div  className="home-page">
      <HomePageHero/>
      <HomePageAbout/>
    </div>
  );
};

export default HomePage;

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectsOverview from "./components/ProjectsOverview";
import ScrollProfile from "./components/ScrollProfile";
import Stacks from "./components/Stacks";
import Navbar from "./components/Navbar";
import { Element } from "react-scroll";
import Modal from "./components/Modal";

function Home() {
  return (
    <div>
      <Navbar />

      <Modal />
      <Element name="home">
        <Hero />
      </Element>
      <Element name="techStack">
        <Stacks />
      </Element>
      <Element name="profile">
        <ScrollProfile />
      </Element>
      <Element name="projects">
        <ProjectsOverview />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </div>
  );
}

export default Home;

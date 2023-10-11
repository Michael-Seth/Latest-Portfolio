import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectsOverview from "./components/ProjectsOverview";
import ScrollProfile from "./components/ScrollProfile";
import Stacks from "./components/Stacks";
import Navbar from "./components/navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stacks />
      <ScrollProfile />
      <ProjectsOverview />
      <Footer />
    </div>
  );
}

export default Home;

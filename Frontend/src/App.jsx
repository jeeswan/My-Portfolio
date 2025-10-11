import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Aboutme from "./components/Aboutme/Aboutme.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contactme from "./components/Contactme/Contactme.jsx";

function App() {
  

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Aboutme />
      <Experience />
      <Projects />
      <Contactme />
    </div>
  )
}

export default App

import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Wave from './components/Wave';
import WaveBottom from './components/WaveBottom';
import ContactMe from './components/ContactMe';
import Triangle from './components/Triangle';
import Skills from './components/Skills';
import TriangleBottom from './components/TriangleBottom';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Triangle/>
      <Skills/>
      <TriangleBottom/>
      <WorkExperience/>
      <Wave/>
      <Projects/>
      <WaveBottom/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;

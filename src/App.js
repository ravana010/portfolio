/* eslint-disable jsx-a11y/img-redundant-alt */
import './index.css'
import pdf from './file/Resume (1).pdf'
import me5 from "./images/me5.jpeg";
import lap2 from "./images/2lap.jpg";
import Skills from "./Component/Skills";
import ProjectOne from "./Component/ProjectOne";
import Flutterpro from "./Component/Flutterpro";
import Footer from './Component/Footer';

function App() {
  return (
    <div className="maindiv">
      <header id="home">
        <div className="topnav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <img className="backgroundimg" src={lap2} alt="green" />
        <div className="textonimage">
          <img className="myimage" src={me5} alt="my image" />
          <h1>Aman Deep Rawat</h1>
          <h3>Software developer</h3>
        </div>
      </header>
      <div id="about">
        <h1 className="mainHeadding">What do I offer</h1>
        <p>I help you to build your future by building the design you want,</p>
        <p>here are my fields of expertise</p>
        <br />
        <div className="row">
          <div className="column">
            <h2>Web developement</h2>
            <Skills name="Html" color="crimson " percent="80" height="5" />
            <Skills name="Css" color="skyblue" percent="60" height="5" />
            <Skills name="JavaScript" color="purple" percent="50" height="5" />
            <Skills name="React Js" color=" orange" percent="50" height="5" />
            <Skills name="Node Js" color="chartreuse" percent="40" height="5" />
            <Skills name="Express Js" color="cornflowerblue" percent="30" height="5"/>
          </div>
          <div className="column">
            <h2>Other Skills</h2>
            <Skills name="Android Studio" color="crimson " percent="50" height="5"/>
            <Skills name="Dart" color="skyblue" percent="60" height="5" />
            <Skills name="java" color="purple" percent="70" height="5" />
          </div>
        </div>
        <span>If you want my resume, here is my resume : </span><a href={pdf} download={"Myresume.pdf"}>Download</a>
      </div>
      <div id="projects">
        <h1 className="mainHeadding">My Projects</h1>
        <p className="headding1">React project</p>
        <ProjectOne />
        <p className="headding1">Flutter Project</p>
        <Flutterpro/>
      </div>
      <div id="contact">
        <Footer/>
      </div>
    </div>
  );
}
export default App;
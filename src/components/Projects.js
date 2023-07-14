import project01 from "../assets/project01.PNG";
import project01b from "../assets/project01b.PNG";
import project01c from "../assets/project01c.PNG";
import project02 from "../assets/project02.PNG";
import project03 from "../assets/projects03.PNG";
import project02b from "../assets/project02b.PNG";
import project02c from "../assets/project02bc.PNG";
import project03b from "../assets/projects03b.PNG";
import project03c from "../assets/projects03c.PNG";
import project04 from "../assets/project04.PNG";
import project04b from "../assets/project04b.PNG";
import project04c from "../assets/project04c.PNG";
import {AiFillHtml5} from "react-icons/ai";
import {IoLogoCss3} from "react-icons/io";
import {BiLogoJavascript} from "react-icons/bi";
import {GrReactjs} from "react-icons/gr";
import {BiLogoNodejs} from "react-icons/bi";
import {SiMysql} from "react-icons/si";
import {BsFillBootstrapFill} from "react-icons/bs";
import Carousel from "./Carousel";


const Projects = () => {
    return(
        <div id="projects" className="py-5" style={{backgroundColor: "#1190CB"}}>
          <h1 className="text-white text-center mb-5">Proyectos</h1>
          <div style={{display: "flex", flexDirection: "column", gap: "50px"}}>
          <div class="mb-3 w-75 mx-auto text-white"  style={{backgroundColor: "#1190CB"}}>
            <div class="row g-0">
              <div class="col-md-6">
                <Carousel carrouselId="carousel1" img1={project02} img2={project02b} img3={project02c} />
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h2 class="card-title">Lobelbuy</h2>
                  <p class="card-text" style={{fontSize: "20px"}}>Es una tienda de segunda mano inspirada en páginas muy conocidas como Wallapop. Tiene chats en tiempo real, reseñas, login, búsquedas, etc. Tiene una base de datos con MySQL</p>
                  <p style={{fontSize: "20px"}}>Realizado con:</p>
                  <div className="d-flex flex-row gap-3">
                    <AiFillHtml5 size="50px"/>
                    <IoLogoCss3 size="50px"/>
                    <BiLogoJavascript size="50px"/>
                    <BsFillBootstrapFill size="50px"/>
                    <GrReactjs size="50px"/>
                    <BiLogoNodejs size="50px"/>
                    <SiMysql size="50px"/>
                  </div>
                  <a className="btn mt-4" href="https://frontend-lobelbuy-pa8s.onrender.com/" target="_blank" style={{backgroundColor: "white", color: "#1190CB"}}>Ver proyecto</a>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3 w-75 mx-auto text-white"  style={{backgroundColor: "#1190CB"}}>
            <div class="row g-0">
              <div class="col-md-6">
                <Carousel carrouselId="carousel2" img1={project01} img2={project01b} img3={project01c} />
                {/*<img src={project01} class="img-fluid rounded-start" alt="Card title"/>*/}
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h2 class="card-title">Tienda de videojuegos</h2>
                  <p class="card-text" style={{fontSize: "20px"}}>Es una tienda de videojuegos que realicé con las tecnologías más basicas. Los datos los guardaba en un fichero JSON y los mostraba en pantalla. </p>
                  <p style={{fontSize: "20px"}}>Realizado con:</p>
                  <div className="d-flex flex-row gap-3">
                    <AiFillHtml5 size="50px"/>
                    <IoLogoCss3 size="50px"/>
                    <BiLogoJavascript size="50px"/>
                    <BsFillBootstrapFill size="50px"/>
                  </div>
                  <a className="btn mt-4" href="https://64b084cf7f7c045176dc78c2--heartfelt-kangaroo-121bcd.netlify.app/" target="_blank" style={{backgroundColor: "white", color: "#1190CB"}}>Ver proyecto</a>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3 w-75 mx-auto text-white"  style={{backgroundColor: "#1190CB"}}>
            <div class="row g-0">
              <div class="col-md-6">
                <Carousel carrouselId="carousel3" img1={project03b} img2={project03c} img3={project03} />
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h2 class="card-title">Ruleta de la suerte</h2>
                  <p class="card-text" style={{fontSize: "20px"}}>Se trata del famoso juego de Antena3.</p>
                  <p style={{fontSize: "20px"}}>Realizado con:</p>
                  <div className="d-flex flex-row gap-3">
                    <AiFillHtml5 size="50px"/>
                    <IoLogoCss3 size="50px"/>
                    <BiLogoJavascript size="50px"/>
                  </div>
                  <a className="btn mt-4" style={{backgroundColor: "white", color: "#1190CB"}} href="https://64b087b734d49656b598b184--bucolic-lollipop-0e8c9c.netlify.app/menu.html" target="_blank">Ver proyecto</a>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3 w-75 mx-auto text-white"  style={{backgroundColor: "#1190CB"}}>
            <div class="row g-0">
              <div class="col-md-6">
                <Carousel carrouselId="carousel4" img1={project04} img2={project04b} img3={project04c} />
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h2 class="card-title">Arkanoid</h2>
                  <p class="card-text" style={{fontSize: "20px"}}>Fue mi primer proyecto y además mi primer juego. Se trata de un videojuego muy conocido llamado Arkanoid.</p>
                  <p style={{fontSize: "20px"}}>Realizado con:</p>
                  <div className="d-flex flex-row gap-3">
                    <AiFillHtml5 size="50px"/>
                    <IoLogoCss3 size="50px"/>
                    <BiLogoJavascript size="50px"/>
                  </div>
                  <a className="btn mt-4" style={{backgroundColor: "white", color: "#1190CB"}} href="https://64b148b97a9b59165499238e--glittering-cocada-7152bf.netlify.app/" target="_blank">Ver proyecto</a>
                </div>
              </div>
            </div>
          </div>
          </div>

         
        </div>

        
    )
}

export default Projects;
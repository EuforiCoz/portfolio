import fotoCV from "../assets/foto_curriculum.jfif";
import linkedin from "../assets/linked.png"

const AboutMe = () => {
    return(
        <div id="aboutme" className="aboutme pt-5 mx-auto">
            <div class="mb-3">
                <div class="row g-0">
                  <div class="col-md-5 m-auto">
                    <img src={fotoCV} style={{width: "100%"}} class=" rounded-circle" alt="Card title"/>
                  </div>
                  <div class="col-md-7 my-auto">
                    <div class="card-body text-center">
                      <h1 class="card-title text-center ">Alejandro Javier Peco Romero</h1>
                      <p className="text-center m-0 pb-3" style={{fontSize: "22px"}}>Desarrollador Web</p>
                      <p class="card-text text-center text-muted pb-4" style={{fontSize: "24px"}}>Ofrezco las mejores soluciones con las tecnologías más usadas en la actualidad con HTML, CSS y JavaScript. A día de hoy sigo obteniendo más conocimientos de programación y en reforzar lo aprendido</p>
                      <div className="d-flex flex-row justify-content-center gap-3">
                        <a className="btn text-white fs-5" href="#contactme" style={{backgroundColor: "#1190CB"}}>Contáctame</a>
                        <span className="text-muted" style={{fontSize: "22px"}}> o </span> 
                        <a href="https://www.linkedin.com/in/alejandro-peco-romero-06490521b/" target="_blank"><img src={linkedin} style={{width: "45px"}}/></a>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
        </div>
    )
}

export default AboutMe;
import fotoCV from "../assets/foto_curriculum.jfif";


const AboutMe = () => {
    return(
        <div id="aboutme" className="pt-5 w-50 mx-auto">
            <div class="mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={fotoCV} style={{width: "100%"}} class=" rounded-circle" alt="Card title"/>
                  </div>
                  <div class="col-md-8 my-auto">
                    <div class="card-body text-center">
                      <h1 class="card-title text-center ">Alejandro Javier Peco Romero</h1>
                      <p class="card-text text-center text-muted" style={{fontSize: "22px"}}>Soy un programador web que está empezando en este mundillo. Me gustaría trabajar y ganar experiencia</p>
                      <a className="btn text-white fs-5" href="#contactme" style={{backgroundColor: "#1190CB"}}>Contáctame</a>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    )
}

export default AboutMe;
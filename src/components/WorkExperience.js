import imgmakenai from "../assets/makenai.png";
import imgvtlab from "../assets/vtlab.png";


const WorkExperience = () => {
    return(
        <div id="workexperience" className="container-fluid">
            <h1 className="text-center mb-5">Experiencia</h1>
            <div class="row text-center w-75 mx-auto">
              <div class="col-md-6 col-xs-12 card" style={{border: 0}}>
                <img class="card-img-top mx-auto" style={{width: "250px"}}  src={imgmakenai} alt="Card image cap"/>
                <div class="card-body">
                  <h4 class="card-title">Desarrollador Web</h4>
                  <p class="card-text text-muted">Abril 2021 - Junio 2021</p>
                  <p style={{fontSize: "18px"}}>Trabajando como Desarrollador Web en Makenai Solutions con tecnologías como Vuejs y Nodejs/Express realizando peticiones a APIs externas</p>
                  <p style={{fontSize: "18px"}}>Desarrollando bots en Microsoft Teams con Microsoft Azure</p>
                </div>
              </div>
              <div class="col-md-6 col-xs-12 card"  style={{border: 0}}>
                <img class="card-img-top mx-auto" style={{width: "250px"}} src={imgvtlab} alt="Card image cap"/>
                <div class="card-body">
                  <h4 class="card-title">Desarrollador Frontend</h4>
                  <p class="card-text text-muted">Abril 2023 - Junio 2023</p>
                  <p style={{fontSize: "18px"}}>Trabajando como Desarrollador Frontend en VT-Lab con tecnologías como HTML5, CSS3, Javascript, JQuery y Bootstrap</p>
                  <p style={{fontSize: "18px"}}>Diseñando y creando nuevas funcionalidades</p>
                  <p style={{fontSize: "18px"}}>Arreglando errores de código</p>
                </div>
              </div>
            </div>
            
        </div>
    )
}

export default WorkExperience;
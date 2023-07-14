import imghtml from "../assets/html5.png";
import imgcss from "../assets/css.png";
import imgjs from "../assets/js.png";
import imgbs from "../assets/bootstrap.png";
import imgreact from "../assets/react.png";
import imgphp from "../assets/php.png";
import imgnode from "../assets/node.png";
import imgmysql from "../assets/mysql.png";
import CardTechnology from "./CardTechnology";

const Skills = () => {
    return(
        <div id="skills" className="py-5" style={{backgroundColor: "#1190CB"}}>

            <h1 className="text-center text-white mb-5">Habilidades</h1>

            <div className="container w-75 mx-auto" >
                <div class="card-group text-center">
                    <CardTechnology img={imghtml} title="HTML5"/>
                    <CardTechnology img={imgcss} title="CSS3"/>
                    <CardTechnology img={imgjs} title="JavaScript"/>
                    <CardTechnology img={imgbs} title="Bootstrap"/>
                </div>

                <div class="card-group text-center">
                    <CardTechnology img={imgreact} title="Reactjs"/>
                    <CardTechnology img={imgphp} title="PHP"/>
                    <CardTechnology img={imgnode} title="Nodejs"/>
                    <CardTechnology img={imgmysql} title="MySQL"/>
                </div>
            </div>
        </div>
        
    )
}

export default Skills;
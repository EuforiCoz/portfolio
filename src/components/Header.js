



const Header = () => {
    return(
        <header id="header" className="">
            <div className="relative d-flex justify-content-around align-items-center my-auto py-3" style={{backgroundColor: "#1190CB"}}>
                    <div class="" aria-label="Logo" style={{width: "100px", height: "100px"}}>
                        <img class="img-fluid" src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/709/8465804709_05344d56-ee1b-4b5a-a160-3ecf6a59bc5e.png?cb=1689174898"  alt="" role="none"/>
                    </div>
                
                    <ul class="nav">
                        <li class="nav-item">
                            <h5><a class="nav-link text-white"  href="#aboutme" aria-current="page">Sobre mí</a></h5>
                        </li>
                        <li class="nav-item">
                            <h5><a class="nav-link text-white"  href="#skills" aria-current="page">Skills</a></h5>
                        </li>
                        <li class="nav-item">
                            <h5><a class="nav-link  text-white" href="#workexperience">Experiencia</a></h5>
                        </li>
                        <li class="nav-item">
                            <h5><a class="nav-link  text-white" href="#projects">Proyectos</a></h5>
                        </li>
                        <li class="nav-item">
                            <h5><a class="nav-link  text-white" href="#contactme">Contáctame</a></h5>
                        </li>
                    </ul>
            </div>
            <div  class="custom-shape-divider-top-1689175466">
                
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
        </header>
    )
}

export default Header;
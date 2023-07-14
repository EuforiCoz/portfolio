



const Header = () => {
    return(
        <header id="header" className="" >
            <div style={{backgroundColor: "#1190CB"}}>
                <nav class="navbar navbar-expand-lg navbar-light bg-light w-75 mx-auto" style={{backgroundColor: "#1190CB", margin: 0, padding:0}}>
                    <div class="container-fluid py-3" style={{backgroundColor: "#1190CB"}}>
                        <div class="" aria-label="Logo" style={{width: "100px", height: "100px"}}>
                            <img class="img-fluid" src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/709/8465804709_05344d56-ee1b-4b5a-a160-3ecf6a59bc5e.png?cb=1689174898"  alt="" role="none"/>
                        </div>
                            <div class="hamburger" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>
                            </div>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul class="navbar-nav d-flex justify-content-end">
                                <li class="nav-item text-center">
                                    <h5><a class="nav-link" aria-current="page" href="#aboutme">Sobre mí</a></h5>
                                </li>
                                <li class="nav-item text-center">
                                    <h5><a class="nav-link" href="#skills">Skills</a></h5>
                                </li>
                                <li class="nav-item text-center">
                                    <h5><a class="nav-link" href="#workexperience">Experiencia</a></h5>
                                </li>
                                <li class="nav-item text-center">
                                    <h5><a class="nav-link" href="#projects">Proyectos</a></h5>
                                </li>
                                <li class="nav-item text-center">
                                    <h5><a class="nav-link" href="#contactme">Contáctame</a></h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
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
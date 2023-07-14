


const Carousel = ({carrouselId, img1, img2, img3}) =>{
    const carrousel = "#" + carrouselId;
    return(
        <div id={carrouselId} class="carousel slide" data-bs-ride="carousel">
            <ol class="carousel-indicators">
                <li data-bs-target={carrousel} data-bs-slide-to="0" class="active" aria-current="true" aria-label="First slide"></li>
                <li data-bs-target={carrousel} data-bs-slide-to="1" aria-label="Second slide"></li>
                <li data-bs-target={carrousel} data-bs-slide-to="2" aria-label="Third slide"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <img src={img1} class="w-75 d-block mx-auto" style={{height: "300px"}} alt="First slide"/>
                </div>
                <div class="carousel-item">
                    <img src={img2} class="w-75 d-block mx-auto" style={{height: "300px"}} alt="Second slide"/>
                </div>
                <div class="carousel-item">
                    <img src={img3} class="w-75 d-block mx-auto" style={{height: "300px"}} alt="Third slide"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target={carrousel} data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target={carrousel} data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;
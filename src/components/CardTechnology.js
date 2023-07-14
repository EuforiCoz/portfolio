


const CardTechnology = ({img, title}) => {
    return(
        <div class="card" style={{backgroundColor: "#1190CB", border: 0}}>
            <img class="card-img-top mx-auto" style={{width: "100px"}} src={img} alt="Card image cap"/>
            <div class="card-body">
                <h4 class="card-title text-white">{title}</h4>
            </div>
        </div>
    )
}

export default CardTechnology;
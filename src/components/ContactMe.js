


const ContactMe = () => {
    return(
        <div id="contactme" className="py-5">
            <h1 className="text-center mb-4">Contáctame</h1>
            <form className="w-50 mx-auto" action="https://formsubmit.co/pecohades@gmail.com" method="POST">
                <div class="mb-3">
                  <label for="email" class="form-label">Email*:</label>
                  <input type="email" class="form-control" name="email" id="email" required aria-describedby="emailHelpId" placeholder="abc@mail.com"/>
                </div>
                <div class="mb-3">
                  <label for="asunto" class="form-label">Asunto*:</label>
                  <input type="text" class="form-control" name="asunto" id="asunto" required aria-describedby="emailHelpId" placeholder="Asunto"/>
                </div>
                <div class="mb-3">
                  <label for="mensaje" class="form-label">Mensaje*:</label>
                  <textarea class="form-control" name="mensaje" id="mensaje" required rows="8"></textarea>
                </div>
                <div className="text-center">
                    <input type="submit" value="Enviar" className="btn text-white fs-5 " style={{backgroundColor: "#1190CB"}}/>
                </div>
            </form>
        </div>
    )
}

export default ContactMe;
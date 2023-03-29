import './about-us-style.css'

function AboutUs(){
    return(
        <div className="mainPageDiv">
            <div className="videoDiv">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/y9j-BL5ocW8"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen> Video imobiliare
                </iframe>
            </div>
            <div className="informationDiv">
                &nbsp;&nbsp;&nbsp;&nbsp;<b>Imobiliare pentru tine</b> nu este o agentie, ci este un portal pe care vei găsi cele mai multe anunţuri
                imobiliare din România, venite atât de la agenţii, dar şi de particularii care preferă să îşi vândă singuri
                locuinţa.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Astăzi, peste 500 de agenţii imobiliare beneficiază de serviciile noastre, înregistram peste 100.000 de
                vizitatori unici lunar, promovăm cele mai noi ansambluri rezidenţiale şi comerciale.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<b>Imobiliare pentru tine</b> facilitează găsirea ofertelor imobiliare aducând
                laolaltă toate ofertele disponibile pe internet în România, pentru o căutare mai ușoară și compararea
                ofertelor. Zeci de mii de oferte cu proprietăți imobiliare de vânzare sau de închiriat din România pot
                fi găsite în orice moment pe site-ul nostru.
            </div>

        </div>
    );
}
export default AboutUs;
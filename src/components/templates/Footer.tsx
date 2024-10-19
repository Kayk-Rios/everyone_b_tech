import Instagram from "../Imgames_logos/Instagram";
import Linkedin from "../Imgames_logos/Linkedin";




interface PropsFooter {

}
export function Footer(props : PropsFooter){
    return(
        <>

        <div className="flex justify-around items-center h-[134px]">
            <span>  © 2024 Green Ice. Todos os direitos reservados.  </span>
            <div className="flex flex-col">
                <h2>Desenvolvedores</h2>
                <a href="https://www.linkedin.com/in/kayk-dario/" target="_blank" className="underline">Kayk Dario</a>
                <a href="https://www.linkedin.com/in/ale-pru/"
                className="underline">Alessandro de Licena</a>
                <a href="https://www.linkedin.com/in/vitor-cavalcante-318362298/"
                className="underline">Vitor Cavalcante</a>
                <a href="#">João Gabriel</a>
            </div>
            <div className="flex gap-3">
               <Instagram/>
               <Linkedin/>
            </div>
        </div>
        
        </>
    )
}
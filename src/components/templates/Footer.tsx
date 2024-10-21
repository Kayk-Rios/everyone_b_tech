import Instagram from "../Imgames_logos/Instagram";
import Linkedin from "../Imgames_logos/Linkedin";

interface FooterProps {
  cor: string;
}

export function Footer({ cor }: FooterProps) {
  return (
    <>
      <div
        className="flex justify-evenly items-center h-[134px]  text-slate-200 "
        style={{ backgroundColor: cor }}
      >
        <span> © 2024 Green Ice. Todos os direitos reservados. </span>
        <div className="flex flex-col">
          <h2>Desenvolvedores</h2>
          <a
            href="https://www.linkedin.com/in/kayk-dario/"
            target="_blank"
            className="underline"
          >
            Kayk Dario
          </a>
          <a href="https://www.linkedin.com/in/ale-pru/" className="underline">
            Alessandro de Licena
          </a>
          <a
            href="https://www.linkedin.com/in/vitor-cavalcante-318362298/"
            className="underline"
          >
            Vitor Cavalcante
          </a>
          <a href="#">João Gabriel</a>
        </div>
        <div className="flex flex-col gap-3">
          <Instagram />
          <Linkedin />
        </div>
      </div>
    </>
  );
}

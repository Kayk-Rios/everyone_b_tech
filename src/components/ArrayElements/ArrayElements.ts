import Logo from "../assets/cola.png";
import Logo2 from "../assets/cpu.png";
import Logo3 from "../assets/nuvembd.png";
import Log4 from "../assets/golbal.png";
import Logo5 from "../assets/onda.png";
interface Item {
  id: number;
  titulo: string;
  imagem: any;   
  descricao: string;
}

const meusItens: Item[] = [
  {
    id: 1,
    titulo: "Red-Cola",
    imagem: Logo,
    descricao:
      "A consultoria nos ajudou a migrar para a nuvem e implementar políticas de diversidade de gênero. O resultado? Uma equipe mais inclusiva e inovadora, além de descontos em novos serviços tecnológicos que otimizaram nossos recursos.",
  },
  {
    id: 2,
    titulo: "TechUp",
    imagem: Logo2,
    descricao:
      "Com o suporte da plataforma, conseguimos aumentar a presença de mulheres em cargos de liderança em 20%. Isso nos abriu portas para serviços de auditoria de segurança cibernética e treinamentos que elevaram ainda mais a eficiência do nosso time.",
  },
  {
    id: 3,
    titulo: "EcoData",
    imagem: Logo3,
    descricao:
      "Alcançamos as metas de diversidade e, com isso, ganhamos treinamentos gratuitos em tecnologias de ponta. Aumentamos em 30% a retenção de talentos femininos e estamos mais competitivos no mercado.",
  },
  {
    id: 4,
    titulo: "GlobalNet",
    imagem: Log4,
    descricao:
      "Graças à promoção de mais mulheres em cargos de decisão, recebemos serviços de desenvolvimento de software que melhoraram a escalabilidade e a segurança de nossas operações, com custos acessíveis.",
  },
  {
    id: 5,
    titulo: "BlueWave",
    imagem: Logo5,
    descricao:
      "Ao implementarmos as metas de igualdade de gênero, tivemos acesso a um serviço gratuito de monitoramento de infraestrutura. Isso nos permitiu otimizar o desempenho dos nossos servidores e reduzir o tempo de inatividade, o que foi crucial para nossa expansão.",
  },
];

export default meusItens;
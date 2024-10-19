"use client";

import ImagePrimary from "@/components/Imgames_logos/ImagePrimary";
import ModalOrcamento from "@/components/modal/ModalOrcamento";
import Pagina from "@/components/templates/Pagina";
import Patters from "@/components/templates/Patthers";
import { useState } from "react";


export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Pagina>
        <div className="h-5 separacao"></div>
      <div className="flex mt-9 items-center justify-around h-[500px] sobre ">
        <section className="jus flex-col w-[729px]">
          <h1>
          Em nossa plataforma, oferecemos soluções tecnológicas personalizadas que vão desde migrações de servidores on-premise para a nuvem até consultorias em TI e auditorias de segurança. Além disso, incentivamos a implementação de políticas de igualdade de gênero, oferecendo serviços exclusivos para empresas que atingem metas de diversidade. Com nosso suporte, sua empresa pode acessar treinamentos, desenvolvimento de software sob medida e monitoramento de infraestrutura, tudo isso enquanto promove uma cultura mais inclusiva e preparada para o futuro. Transforme sua organização em um exemplo de inovação e igualdade com nossos serviços especializados.

          </h1>
          <button
            className="ml-[20%] mt-[5%] button rounded-xl"
            onClick={() => setShowModal(true)}
          >
            Realizar Orçamento
          </button>
          {showModal && <ModalOrcamento setShowModal={setShowModal} />}
        </section>
        <ImagePrimary />
        
      </div>
      <Patters />
    </Pagina>
  );
}

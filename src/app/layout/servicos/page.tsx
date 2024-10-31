"use client";
import ImagemCoroa from "@/components/Imgames_logos/ImagemCoroa";
import ModalOrcamento from "@/components/modal/ModalOrcamento";
import ModalProgressBarService from "@/components/modal/ModalProgressBarService";
import CardsServicos from "@/components/templates/CardsServicos";
import CardsServicosPlus from "@/components/templates/CardsServicosPlus";
import { Footer } from "@/components/templates/Footer";
import { useState } from "react";
export default function Servicos() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className=" flex flex-col justify-center items-center servico pb-[200px] ">
        <h1 className="mt-[30px]">SERVIÇOS BASICOS</h1>
        <section>
          <CardsServicos />
        </section>
        <div className="flex items-start justify-center">
          <ModalProgressBarService />
          <h1 className="flex gap-5 items-center">
            Serviços E Benefícios <ImagemCoroa />{" "}
          </h1>
        </div>
        <section>
          <CardsServicosPlus />
        </section>
        <button
          className=" mt-[5%] button rounded-xl"
          onClick={() => setShowModal(true)}
        >
          Realizar Orçamento
        </button>
        {showModal && <ModalOrcamento setShowModal={setShowModal} />}
      </div>
      <Footer cor="#E7A176" />
    </>
  );
}

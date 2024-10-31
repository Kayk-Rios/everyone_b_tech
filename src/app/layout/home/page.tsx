'use client'
import { useState } from "react";
import ModalProgressBar from "@/components/modal/ModalProgressBar";
import ModalTicketCreation from "@/components/modal/ModalTicketCreation";
import { Footer } from "@/components/templates/Footer";
import NavUnic from "@/components/templates/NavUnic";
import Add from "@/components/ui/add";

export default function Home() {
  const [showModalTicketCreation, setShowModalTicketCreation] = useState(false);

  return (
    <>
      <div>
        <NavUnic />
        <section className="h-[600px] corLogado p-9">
          <div className="flex justify-around">
            <h1 className="flex items-center">
              Tickets
              <span
                className="bg-green-400 rounded-full text-lg ml-8 cursor-pointer"
                onClick={() => setShowModalTicketCreation(true)}
              >
                <Add />
              </span>
            </h1>
            <article>
              <h2>Metas de Igualdade</h2>
              <ModalProgressBar />
            </article>
          </div>
        </section>
        <Footer cor="#203543" />

        {/* ModalTicketCreation */}
        {showModalTicketCreation && (
          <ModalTicketCreation setShowModal={setShowModalTicketCreation} />
        )}
      </div>
    </>
  );
}

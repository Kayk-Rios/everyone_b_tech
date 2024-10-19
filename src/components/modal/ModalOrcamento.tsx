import Link from "next/link";

interface ModalOrcamentoProps {
  setShowModal: (show: boolean) => void;
}

export default function ModalOrcamento({ setShowModal }: ModalOrcamentoProps) {
  return (
    <div
      id="static-modal"
      data-modal-backdrop="static"
      tabIndex={-1}
      aria-hidden="true"
      className="   flex justify-center items-center fixed top-0 right-0 left-0 z-50 w-full h-full "
    >
      <div className="  relative p-4 w-full max-w-xl">
        <div className="   buttonModal bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700">
          <h1 className="text-xl font-semibold mb-4 w-[200px]">Orçamento</h1>
          <p className="mb-4 rounded-md">
          É com grande satisfação que convidamos você a conhecer as soluções inovadoras da Everyone B Tech, uma empresa especializada em projetos de tecnologia e implementação de culturas de Igualdade de Gênero personalizada.
          </p>
          <input
            type="text"
            name="empresa"
            id="empresa"
            placeholder="Digite o nome da sua empresa"
            className="w-full mb-3 p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite um e-mail de contato do domínio de sua empresa"
            className="w-full mb-3 p-2 border rounded"
          />
          <textarea
            name="historiaEmpresa"
            id="historiaEmpresa"
            placeholder="Descreva brevemente a sua empresa..."
            className="w-full mb-3 p-2 border rounded"
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setShowModal(false)}
              type="button"
              className="  btn text-white rounded-lg px-4 py-2"
            >
               <Link href="/layout/cadastro">
              Enviar
          </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

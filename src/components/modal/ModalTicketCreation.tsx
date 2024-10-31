import Link from "next/link";

interface ModalTicketCreationProps {
  setShowModal: (show: boolean) => void;
}

export default function ModalTicketCreation({
  setShowModal,
}: ModalTicketCreationProps) {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 w-full h-full">
      <div
        id="static-modal"
        data-modal-backdrop="static"
        tabIndex={-1}
        aria-hidden="true"
        className="   flex justify-center items-center fixed top-0 right-0 left-0 z-50 w-full h-full "
      >
        <div className="  relative p-4 w-full max-w-xl">
          <div className="   buttonModal bg-white rounded-lg shadow-lg p-6 dark:bg-gray-700">
            <h1 className="text-xl font-semibold mb-4 w-[250px]">
              {" "}
              Cadastrar ticket
            </h1>
            <label>Tipo de serviço</label>
            <input
              type="text"
              name="empresa"
              id="empresa"
              placeholder="Digite o nome da sua empresa"
              className="w-full mb-3 p-2 border rounded"
            />
            <label>Descrição</label>
            <textarea
              name="historiaEmpresa"
              id="historiaEmpresa"
              placeholder="Descreva o problema ou serviço requisitado..."
              className="w-full mb-3 p-2 border rounded"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                type="button"
                className="  btn text-white rounded-lg px-4 py-2"
              >
                <Link
                  href="/layout/home"
                  onClick={() => setShowModal(false)}
                  className="mt-4 px-4 py-2 text-white rounded-lg"
                >
                  CADASTRAR
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

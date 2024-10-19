import { Footer } from "@/components/templates/Footer";
import NavPrimary from "@/components/templates/NavPrimary3";

export default function Cadastro() {
  return (
    <>
      <NavPrimary />
      <div className="login flex flex-col text-center h-[600px] cormeio  ">
        <h1 className="submit mt-2">CADASTRO</h1>
        <div className="flex justify-center items-center cadastro">
          <form className="flex flex-col   text-start  gap-2 w-[600px] ">
            <label>EMAIL</label>
            <input type="email" id="email" name="email" />

            <label>SENHA</label>
            <input type="password" id="password" name="senha" />
            <label>REPITA SUA SENHA</label>
            <input type="password" id="password" name="senha" />
            <label>CNPJ</label>
            <input type="number" id="number" name="cnpj" />
            <label>TELEFONE</label>
            <input type="tel" id="tel" name="tel" />

            <input type="submit" value="CADASTRAR" className="submit mt-[40px]" />
          </form>
        </div>
      </div>
      <Footer cor="#203543"/>
    </>
  );
}

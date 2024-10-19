import { Footer } from "@/components/templates/Footer";
import NavPrimary2 from "@/components/templates/NavPrimary2";

 

 
export default function Login(){
    return(
        <>
       
            <NavPrimary2/>
            <div className="login flex flex-col text-center  ">
            <h1>LOGIN</h1>   
            <div className="flex justify-center items-center h-[400px]">
                <form className="flex flex-col text-start  gap-1 w-[600px] ">
                    <label  >EMAIL / CNPJ</label>
                    <input type="email" id="email" name="email"/>
                
                    <label >SENHA</label>
                <input type="password" id="password" name="senha"/>
                
                <input type="submit" value="ENTRAR" className="mt-[40px]"/>
                </form>
            </div>
        </div> 
        <Footer  cor="#203543"/>    
        </>
    )
}
import { Footer } from "@/components/templates/Footer";
import NavPrimary2 from "@/components/templates/NavPrimary2";
import Link from "next/link";

 

 
export default function Login(){
    return(
        <>
       
            <NavPrimary2/>
           
            <div className="login flex flex-col text-center   ">
            <h1>LOGIN</h1>   
            <div className="flex justify-center items-center h-[400px]">
                <form className="flex flex-col text-start  gap-1 w-[600px] p-5   ">
                    <label  >EMAIL / CNPJ</label>
                    <input type="email" id="email" name="email"/>
                
                    <label >SENHA</label>
                <input type="password" id="password" name="senha"/>
                
                <Link href="/layout/home"><input type="submit" value="ENTRAR" className="mt-[40px] ml-[38%]"/></Link>
                </form>
            </div>
        </div> 
        <Footer  cor="#203543"/>    
        </>
    )
}
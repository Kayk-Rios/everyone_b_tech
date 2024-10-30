import { Footer } from "@/components/templates/Footer";
import NavUnic from "@/components/templates/NavUnic";
import Add from "@/components/ui/add";

export default function Home(){
    return(
        <>
        <div>
            <NavUnic/>
            <section className="h-[600px] corLogado p-9 ">
                <div className=" flex justify-around">
                    <h1 className="flex items-center">Tickets <span className="bg-green-400 rounded-full text-lg ml-8 cursor-pointer"><Add/></span></h1>
                    <article><h2>Metas de Igualdade</h2>
                      {/* Aqui ficara a barra de status  */}
                    </article>
                  
                </div>

                {/* Aqui ficara a lista de tickets */}
            </section>
            <Footer cor="#203543" />
        </div>
        </>
    )
}
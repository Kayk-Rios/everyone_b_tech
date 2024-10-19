import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

 
export default function CardsServicos( ){
    return(
        <>
        <div className="grid grid-cols-3 gap-4 m-10">
        <Accordion type="single" collapsible  >
            <AccordionItem value="item-1" className="bg-white  rounded-md ">
              <AccordionTrigger>Consultoria de tecnologia</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                quos? Dolore iusto totam provident repellat accusamus similique
                aliquam necessitatibus voluptate eaque, adipisci animi officia,
                iste officiis, repellendus temporibus tempore magnam.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="bg-white rounded-md">
              <AccordionTrigger>
                Consultoria de adoção de práticas que promovem a igualdade de
                gênero
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                quos? Dolore iusto totam provident repellat accusamus similique
                aliquam necessitatibus voluptate eaque, adipisci animi officia,
                iste officiis, repellendus temporibus tempore magnam.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="bg-white  rounded-md">
              <AccordionTrigger>
                Manutenção de sistemas já existentes
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                quos? Dolore iusto totam provident repellat accusamus similique
                aliquam necessitatibus voluptate eaque, adipisci animi officia,
                iste officiis, repellendus temporibus tempore magnam.{" "}
              </AccordionContent>
            </AccordionItem>
          </Accordion>



          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="bg-white  rounded-md">
              <AccordionTrigger>
                Planejamento de sistemas a serem criados
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                quos? Dolore iusto totam provident repellat accusamus similique
                aliquam necessitatibus voluptate eaque, adipisci animi officia,
                iste officiis, repellendus temporibus tempore magnam.{" "}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="bg-white  rounded-md">
              <AccordionTrigger>Consultoria de tecnologia</AccordionTrigger>
              <AccordionContent>
                Oferecimento de soluções especializadas em áreas como
                infraestrutura de TI, segurança cibernética, transformação
                digital e gerenciamento de projetos tecnológicos, garantindo que
                nossos clientes utilizem as melhores ferramentas para alcançar
                seus objetivos.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="bg-white  rounded-md">
              <AccordionTrigger>Treinamento de tecnologias</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                quos? Dolore iusto totam provident repellat accusamus similique
                aliquam necessitatibus voluptate eaque, adipisci animi officia,
                iste officiis, repellendus temporibus tempore magnam.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        </>
    )
}
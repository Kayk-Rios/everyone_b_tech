import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ImagemCoroa from "../Imgames_logos/ImagemCoroa";

export default function CardsServicos() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 m-10">
        <Accordion type="single" collapsible>
          <ImagemCoroa className="w-[25px]" />
          <AccordionItem value="item-1" className="bg-white  rounded-md ">
            <AccordionTrigger>
              Auditoria de segurança da informação
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
          {" "}
          <ImagemCoroa className="w-[25px]" />
          <AccordionItem value="item-1" className="bg-white rounded-md">
            <AccordionTrigger>
              Busca de vulnerabilidades em sistemas
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
          <ImagemCoroa className="w-[25px]" />
          <AccordionItem value="item-1" className="bg-white  rounded-md">
            <AccordionTrigger>
              Desenvolvimento de sistemas completos
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
          <ImagemCoroa className="w-[25px]" />
          <AccordionItem value="item-1" className="bg-white  rounded-md">
            <AccordionTrigger>
              Treinamento de sistemas feitos pela Everybody B tech e de outras
              empresas como PowerBi, excel, figma e outros
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
          <ImagemCoroa className="w-[25px]" />
          <AccordionItem value="item-1" className="bg-white  rounded-md">
            <AccordionTrigger>Cashback e desconto </AccordionTrigger>
            <AccordionContent>
              Cashback Em serviços futuros, treinamentos gratuitos e mais.
              exclusivo caso para clientes que alcancem as metas de igualdade
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

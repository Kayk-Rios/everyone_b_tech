import Image from "next/image";
import ImagemCoroa from "@/components/assets/Coroa.png";
interface ImagemCoroaProps{
  className?: string;
}
export default function Coroa(props: ImagemCoroaProps ) {
  return (
    <>
        <Image src={ImagemCoroa} width={40} height={70} alt="Picture of the author" className={props.className}/>
    </>
  );
}

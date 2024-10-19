import Image from "next/image";
import Instagram from "@/components/assets/instagram.png";
export default function Intagram() {
  return (
    <>
        <Image src={Instagram} width={40} height={70} alt="Picture of the author" />
    </>
  );
}

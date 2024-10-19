import Image from "next/image";
import Linkedin from "@/components/assets/linkedin.png";
export default function linkedin() {
  return (
    <>
        <Image src={Linkedin} width={40} height={70} alt="Picture of the author" />
    </>
  );
}

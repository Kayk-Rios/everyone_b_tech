import Image from "next/image";
import Logo from "@/components/assets/logo.png";
export default function ComponentName() {
  return (
    <>
        <Image src={Logo} width={260} height={75} alt="Picture of the author" />
    </>
  );
}

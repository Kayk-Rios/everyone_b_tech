import Image from "next/image";
import Logo from "@/components/assets/logo.png";

export default function ComponentName() {
  return (
    <>
      <div className="w-[260px] sm:w-[200px] md:w-[240px] lg:w-[260px] xl:w-[260px] 2xl:w-[260px]">
        <Image src={Logo} alt="Picture of the author" layout="responsive" width={260} height={75} />
      </div>
    </>
  );
}

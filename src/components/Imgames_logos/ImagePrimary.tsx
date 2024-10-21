import Image from "next/image";
import ImagePrimary from "@/components/assets/imagemPrimary.png";
export default function ComponentName() {
  return (
    <>
        <div className="  lg:w-[460px] xl:w-[597px] 2xl:w-[597px] md:block hidden">
          <Image src={ImagePrimary} width={597} height={373} alt="Picture of the author" />
        </div>
    </>
  );
}

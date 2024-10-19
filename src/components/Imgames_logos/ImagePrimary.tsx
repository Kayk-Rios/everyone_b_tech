import Image from "next/image";
import ImagePrimary from "@/components/assets/imagemPrimary.png";
export default function ComponentName() {
  return (
    <>
        <Image src={ImagePrimary} width={597} height={373} alt="Picture of the author" />
    </>
  );
}

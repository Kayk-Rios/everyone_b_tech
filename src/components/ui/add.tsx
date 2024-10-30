
import Image from "next/image";
import Logo from "@/components/assets/370092_add_plus_create_new_icon.svg";
 
export default function Adds(){
    return (
      <>
        <div>
          
            <Image
              src={Logo}
              alt="Picture of the author"
              layout="responsive"
              width={30}
              height={30}
            />
         
        </div>
      </>
    );
}
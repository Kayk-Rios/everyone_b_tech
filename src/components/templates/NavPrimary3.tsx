import ImageLogo from "@/components/Imgames_logos/ImageLogo";
import Link from "next/link";


 

interface PropsNav {}
export default function NavPrimary(props: PropsNav) {
  return (
    <>
      <nav className="nav flex justify-evenly items-center h-[102px]">
       <a href="/"><ImageLogo/></a>
        <div className="flex gap-40 navPrimaryAflex">
       
          <Link href="/">
          Sobre
          </Link>
        
          <Link href="/layout/servicos">
          Serviços
          </Link>
          
          <Link href="/layout/login">
          Login
          </Link>
        </div>
      </nav>
    </>
  );
}

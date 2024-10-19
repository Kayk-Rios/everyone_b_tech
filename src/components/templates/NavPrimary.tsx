import ImageLogo from "@/components/Imgames_logos/ImageLogo";

 

interface PropsNav {}
export default function NavPrimary(props: PropsNav) {
  return (
    <>
      <nav className="nav flex justify-evenly items-center h-[102px]">
       <a href="/"><ImageLogo/></a>
        <div className="flex gap-40 navPrimaryAflex">
          <a href="">Sobre</a>
          <a href="">Serviços</a>
          <a href="">Login</a>
          <a href="">Cadastro</a>
        </div>
      </nav>
    </>
  );
}

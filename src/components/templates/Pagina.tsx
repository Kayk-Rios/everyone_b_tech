import { Footer } from "./Footer";
import NavBar from "./NavBar";

export default function ComponentName(props: any) {
  return (
    <>
      <div>
        <NavBar />
        
        <div>
          <main>{props.children}</main>
        </div>

        <Footer />
      </div>
    </>
  );
}

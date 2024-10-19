import { Footer } from "./Footer";

import NavPrimary from "./NavPrimary";

export default function ComponentName(props: any) {
  return (
    <>
      <div>
        <NavPrimary />
        
        <div>
          <main>{props.children}</main>
        </div>

        <Footer cor="#203543" />
      </div>
    </>
  );
}

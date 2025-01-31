import { withoutAuth } from "@context/Auth";

import { Hero } from "./components";

import Navbar from "@components/Navbar";
import Schedule from "@components/Schedule";
import Footer from "@components/Footer";

function Index() {
  return (
    <Navbar bgColor="tertiary" button="quinary" fgColor="white">
      <Hero />
      <Schedule color="tertiary" detailed={true}>
        <div className="pb-24" />
      </Schedule>
      <Footer color="tertiary" />
    </Navbar>
  );
}

export default withoutAuth(Index);

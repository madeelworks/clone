import Image from "next/image";
import Expertise from "@/components/Expertise"
import ImpactSection from "@/components/Expertise";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Expertise/>
      <ImpactSection/>
      <Footer/>

    </div>

  );
}

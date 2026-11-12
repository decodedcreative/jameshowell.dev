import { Hero } from "@/components/home/hero";
import {
  Contact,
  Experience,
  HowIWork,
  JigsawProduct,
  Problems,
  ProofStrip,
  Work,
} from "@/components/home/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <Problems />
      <Work />
      <JigsawProduct />
      <HowIWork />
      <Experience />
      <Contact />
    </>
  );
}

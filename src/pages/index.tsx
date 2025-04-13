import Spline from "@splinetool/react-spline";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

import AboutMe from "@/components/AboutMe";
import DefaultLayout from "@/layouts/default";
import Projects from "@/components/Projects";
import MyStack from "@/components/MyStack";
import ContactForm from "@/components/Contact";
import PortfolioFooter from "@/components/PortfolioFooter";
export default function IndexPage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <DefaultLayout>
      {/* NO ABSOLUTE! Let layout flow naturally */}
      <div>
        <div className="m-auto h-[55vh] mt-[20%] flex items-center justify-center flex-col relative">
          <Spline
            className="absolute z-10 top-0 left-0 hidden md:block"
            scene="https://prod.spline.design/nZ0pka3yDK90O9Ux/scene.splinecode"
          />
          <div className="w-full h-full md:h-[24vh] z-20 rounded-xl absolute top-0 lg:-top-10 left-0 overflow-hidden flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold text-warning">
              Zakyouse Okoth
            </h2>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold font-oswald">
              PORTFOLIO
            </h1>
          </div>
          <div className="hidden lg:block bg-black absolute h-12 w-40 z-30 bottom-4 right-4" />
        </div>
        <AboutMe />
        <Projects />
        <MyStack />
        <ContactForm />
        <PortfolioFooter />
      </div>
    </DefaultLayout>
  );
}

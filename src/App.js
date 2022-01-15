import React, { useEffect } from "react";
import Paths from "./router/Paths";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
// import AnimatedCursor from "react-animated-cursor";

const App = () => {
  // this for animation
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="255, 160, 1"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      /> */}
      <ScrollToTop />
      <Paths />
    </>
  );
};

export default App;
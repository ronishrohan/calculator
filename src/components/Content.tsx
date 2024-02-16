import Scene from "./Scene";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const config = { damping: 20 };

function Content() {
  const mouse = {
    x: useSpring(useMotionValue(-0.8), config),
    y: useSpring(useMotionValue(-0.5), config),
  };
  useEffect(() => {
    function handleMove(e) {
      const tempY = e.clientX / window.innerWidth - 0.5;
      const tempX = e.clientY / window.innerHeight - 0.5;
      mouse.y.set(tempY);
      mouse.x.set(tempX);
    }
    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
  
  const xtrans = useTransform(mouse.x, [-0.5, 0.5], [-20,20])
  const ytrans = useTransform(mouse.y, [-0.5, 0.5], [-20,20])

  return (
    <section className="h-full w-full flex justify-center items-center">
      <motion.div
      initial={{scale: 0}}
      animate={{scale: 1}}
      transition={{delay: 1.5, duration: 1}}
        style={{ y: xtrans, x: ytrans }}
        className="h-80 w-80 absolute rounded-full z-10 bg-[#161616]"
      ></motion.div>
      <Scene mouse={mouse}></Scene>
    </section>
  );
}

export default Content;

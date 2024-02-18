import Scene from "./Scene";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import Result from "./Result";


const config = { damping: 20 };
const offsetx2 = 100;
const offsety2 = 40;
const arrow = (
  <svg
    width={512}
    height={461}
    viewBox="0 0 512 461"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M210.076 13.6286C223.635 28.7976 258.912 38.0141 291.121 43.4267C332.611 50.4734 375.12 50.9831 416.52 43.362C447.561 37.6456 482.428 27.6262 502.03 10.1041M502.03 10.1041C482.428 27.6262 468.555 61.1739 459.427 91.3632C447.246 131.673 443.003 173.972 445.334 215.949C447.132 248.582 452.386 284.709 465.909 299.837M502.03 10.1041L9.91644 449.99"
      stroke="#212121"
      strokeWidth={27}
    />
  </svg>
);

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
    function resetMouse(e) {
      mouse.y.set(-0.5);
      mouse.x.set(-0.8);
    }
    document
      .getElementById("main-canvas")
      .addEventListener("mousemove", handleMove);
    document
      .getElementById("main-canvas")
      .addEventListener("mouseleave", resetMouse);

    return () => {
      document
        .getElementById("main-canvas")
        .removeEventListener("mousemove", handleMove);
      document
        .getElementById("main-canvas")
        .removeEventListener("mouseleave", resetMouse);
    };
  }, []);

  const xtrans = useTransform(mouse.x, [-0.5, 0.5], [-20, 20]);
  const ytrans = useTransform(mouse.y, [-0.5, 0.5], [-20, 20]);
  const xtrans2 = useTransform(
    mouse.x,
    [-0.5, 0.5],
    [-10 + offsetx2, 10 + offsetx2]
  );
  const ytrans2 = useTransform(
    mouse.y,
    [-0.5, 0.5],
    [-10 + offsety2, 10 + offsety2]
  );

  return (
    <section
      id="main-canvas"
      className="h-full w-full flex justify-center items-center relative overflow-hidden"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ y: xtrans, x: ytrans }}
        className="h-80 w-80 absolute rounded-full z-10 bg-[#161616]"
      ></motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 2, ease: "anticipate", type: "tween" }}
        style={{ y: xtrans2, x: ytrans2 }}
      >
        {arrow}
      </motion.div>
      <Result offset={{x:280, y:-140}} mouse={mouse} ></Result>
      <Scene mouse={mouse}></Scene>
    </section>
  );
}

export default Content;

import { useEffect, useState } from "react";
import { icons } from "../util/icons";
import { motion } from "framer-motion";

const title: string = "calculator";

function Header() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    console.log(width);
  }, []);
  useEffect(() => {
    console.log(Math.floor(width / 90));
  }, [width]);
  return (
    <header className="flex-col h-[100px]">
      <motion.div
        initial={{
          borderBottomLeftRadius: "50%",
          borderBottomRightRadius: "50%",
          y: "-100%",
        }}
        animate={{
          y: 0,
          borderBottomLeftRadius: "0%",
          borderBottomRightRadius: "0%",
        }}
        transition={{
          duration: 1.4,
          type: "tween",
          ease: [0.85, 0, 0.15, 1],
        }}
        className="bg-[#161616] z-10 relative w-full h-[85px] overflow-hidden flex text-white font items-center p-5 justify-between"
      >
        <div className="flex text-3xl font-extrabold overflow-hidden leading-[1.8rem]">
          {title.split("").map((char, index) => {
            return (
              <motion.span
                initial={{ y: "120%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 0.4 + 0.03 * index,
                  duration: 2,
                  type: "tween",
                  ease: [0.85, 0, 0.15, 1],
                }}
                key={index}
              >
                {char}
              </motion.span>
            );
          })}
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.2 }}
            className="text-orange-500"
          >
            .
          </motion.span>
        </div>
        <motion.a
          href="https://github.com/ronishrohan"
          target="_blank"
          className="cursor-pointer bg-black p-2 px-4 rounded-3xl flex gap-3 items-center border-2 border-transparent hover:border-white transition-all duration-75"
        >
          <span className="text-sm font-bold">github</span>
          <span className="text-2xl items-center text-center flex">
            {icons.github}
          </span>
        </motion.a>
      </motion.div>
      <motion.div
        initial={{ y: "-100%", visibility: "hidden" }}
        animate={{ y:0, visibility: "visible" }}
        transition={{
          delay: 2.2,
          duration: 1.2,
          type: "tween",
          ease: "anticipate",
        }}
        className="h-[15px] z-0 bg-orange-500 overflow-hidden relative flex w-max min-w-full items-center overflow-hidden"
      >
        <motion.span
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            type: "tween",
            duration: width / 30,
          }}
          className="text-[15px] flex justify-between font-black leading-[15px] w-full absolute"
        >
          {new Array(Math.floor(width / 60)).fill(null).map((_, index) => {
            return <span>demo</span>;
          })}
        </motion.span>
        <motion.span
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            type: "tween",
            duration: width / 30,
            delay: width / 60,
          }}
          className="text-[15px] flex justify-between font-black leading-[15px] w-full absolute"
        >
          {new Array(Math.floor(width / 60)).fill(null).map((_, index) => {
            return <span>demo</span>;
          })}
        </motion.span>
      </motion.div>
    </header>
  );
}

export default Header;

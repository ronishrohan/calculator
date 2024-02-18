import React from "react";
import { motion } from "framer-motion";

function Random() {
  return (
    <div className="absolute font-black flex flex-col select-none text-[#1d1d1d] text-[25vh] leading-[20vh]">
      {new Array(5).fill(null).map((_, index) => {
        return (
          <motion.span
            initial={{ x: Math.random() > 0.5 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{
              duration: 3,
              delay: Math.random(),
              type: "tween",
              ease: [0.22, 1, 0.36, 1],
              opacity: {
                duration: 1,
              }
            }}
            key={index}
          >
            {Math.floor(Math.random() * 1000000000000000)}
          </motion.span>
        );
      })}
    </div>
  );
}

export default Random;

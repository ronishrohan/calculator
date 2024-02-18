import { useTransform } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import { results, calcs } from "../store/calculation";
import { useAtomValue } from "jotai";

function Result({ mouse, offset }) {
  const transX = useTransform(
    mouse.x,
    [-0.5, 0.5],
    [-15 + offset.y, 15 + offset.y]
  );
  const transY = useTransform(
    mouse.y,
    [-0.5, 0.5],
    [-15 + offset.x, 15 + offset.x]
  );
  const resultsData: Array<string> = useAtomValue(results);
  const calcsData: Array<string> = useAtomValue(calcs);
  return (
    <motion.div
      className="absolute flex-col left-[50%] top-[50%] z-50 select-none"
      style={{ x: transY, y: transX }}
    >
      <div className="text-orange-500 font-extrabold italic text-[22px] leading-[22px] overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{
            delay: 2,
            duration: 1,
            type: "tween",
            ease: "anticipate",
          }}
        >
          result
        </motion.div>
      </div>
      {resultsData.length > 0 ? (
        <>
          <div className="flex flex-row gap-4 items-baseline">
            <div className="text-[38px] font-extrabold text-[#ffffff]">
              {resultsData[resultsData.length - 1]}
            </div>
            <div className="text-[24px] font-extrabold text-[#8e8e8e] ">
              {calcsData[calcsData.length - 1]}
            </div>
          </div>
          <div className="flex flex-col mt-1 gap-1">
            {Array.from(resultsData)
              .reverse()
              .splice(1)
              .map((result, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-4 flex-row font-extrabold items-baseline"
                  >
                    <div className="text-[#505050]">{result}</div>
                    <div className="text-[#3a3a3a] text-[12px]">
                      {Array.from(calcsData).reverse().splice(1)[index]}
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <>
          <div className="text-[16px] font-black text-[#8e8e8e] leading-[16px] overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{
                delay: 1.8,
                duration: 1,
                type: "tween",
                ease: "anticipate",
              }}
            >
              none
            </motion.div>
          </div>
        </>
      )}
    </motion.div>
  );
}

export default Result;

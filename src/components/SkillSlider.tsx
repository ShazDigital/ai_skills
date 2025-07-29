import React, { useMemo, useState } from "react";
import { Skill } from "../types";
import { Slider } from "@/components/ui/slider";
import { motion } from "motion/react";
import { isMobile } from "react-device-detect";

interface SkillSliderProps {
  skill: Skill;
  onChange: (id: string, value: number) => void;
  color: string[];
}

const SkillSlider: React.FC<SkillSliderProps> = ({
  skill,
  onChange,
  color,
}) => {
  const POWER = 100;

  const [mouseOver, setMouseOver] = useState(false);

  const handleChange = (value: number[]) => {
    onChange(skill.id, Math.ceil(value[0] / POWER));
  };

  const showContent = useMemo(() => isMobile || mouseOver, [mouseOver]);

  return (
    <div
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      className="bg-white aspect-[6/4] md:aspect-[6/5] xl:aspect-[6/3] 2xl:aspect-[6/4] flex flex-col justify-between "
      style={{
        backgroundColor: color[0],
        // filter: `grayscale(${(5 - skill.value) / 4})`,
      }}
    >
      {/*  */}
      <div
        className="w-full p-6 flex flex-col"
        style={{
          color: color[1],
        }}
      >
        <motion.h2
          className="text-2xl md:text-3xl w-3/4 md:w-1/2 font-bold mb-2 origin-top-left"
          initial={{
            scale: 1.5,
          }}
          animate={{
            scale: showContent ? 1 : 1.5,
          }}
        >
          {skill.name}
        </motion.h2>
        <motion.p
          className="text-sm w-full md:w-3/4 xl:w-2/3"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: showContent ? 1 : 0,
            y: showContent ? 0 : 30,
          }}
        >
          {skill.description}
        </motion.p>
      </div>
      {/*  */}
      <div className="flex flex-col">
        {/*  */}

        <div className="px-4 mb-4 h-1.5 bg-muted relative">
          <div
            className="w-6 h-full bg-black absolute top-0 left-0"
            style={{ backgroundColor: color[1] }}
          />

          <Slider
            onValueChange={handleChange}
            defaultValue={[skill.value * POWER]}
            min={1}
            max={5 * POWER}
            step={1}
            foregroundColor={color[1]}
            active={showContent}
          />
        </div>
        <div
          className="flex w-full mb-6 md:mb-16 px-4 justify-between"
          style={{
            color: color[1],
          }}
        >
          <motion.span
            className="text-2xs md:text-xs uppercase"
            initial={{
              opacity: 0,
              y: -5,
            }}
            animate={{
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : -5,
            }}
          >
            novice
          </motion.span>
          <motion.span
            className="text-2xs md:text-xs uppercase"
            initial={{
              opacity: 0,
              y: -5,
            }}
            animate={{
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : -5,
            }}
          >
            pro
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default SkillSlider;

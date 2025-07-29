import React, { useMemo } from "react";
import SkillSlider from "./SkillSlider";
import { useSkillContext } from "../context/SkillContext";

const COLOR_PAIRS = [
  ["#e0c4e7", "#f1263e"],
  ["#cbeafe", "#ea2026"],
  ["#1c73fe", "#f4cade"],
  ["#9dcd74", "#1d2d6e"],
  ["#edd2dd", "#331190"],
  ["#c8d9ef", "#142e8f"],
  ["#5b26ab", "#ddeab6"],
  ["#6315d0", "#ffc9e6"],
  ["#f0f1a1", "#582fab"],
  ["#f6d8d1", "#612cdd"],
  ["#63e64b", "#030b9d"],
  ["#172193", "#f19646"],

  // ["#ceb7f9", "#ee130b"],

  // ["#79c606", "#102a71"],
  // ["#f9da9c", "#0d026a"],
  // ["#b0c298", "#0c2d6b"],
  // ["#d2ddd1", "#6820cd"],
  // ["#121599", "#ead4db"],
  // ["#f76606", "#dddbd4"],
  // ["#abd32a", "#1b0467"],
  // ["#1bde25", "#fbfd95"],
  // ["#c8cdeb", "#150191"],
  // ["#e7cff7", "#251b6a"],
  // ["#022689", "#ddec90"],
  // ["#8951cc", "#f3fabf"],
  // ["#7dbe95", "#322189"],
  // ["#0c0b71", "#e9db85"],
  // ["#b3d1ab", "#182f73"],
  // ["#b9c9e6", "#2c2495"],
  // ["#1e9acf", "#e5e194"],
  // ["#19a229", "#f2fd91"],
  // ["#9de49a", "#0c3a77"],
  // ["#e9c7eb", "#1b2b90"],
  // ["#1f208b", "#96c79a"],
  // ["#112b7f", "#2fe895"],
  // ["#f9fc3f", "#162f55"],
  // ["#d50917", "#f9fc9c"],
  // ["#f4cad3", "#fa0115"],
  // ["", ""],
];

const SkillsContainer: React.FC = () => {
  const { skills, setSkillValue } = useSkillContext();

  const colors = useMemo(() => COLOR_PAIRS.sort(() => Math.random() - 0.5), []);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 ">
        {skills.map((skill, index) => (
          <SkillSlider
            key={skill.id}
            skill={skill}
            onChange={setSkillValue}
            color={colors[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsContainer;

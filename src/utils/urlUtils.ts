import { Skill } from "../types";
import { DEFAULT_SKILLS } from "../data/skillsData";

export const parseSkillsFromUrl = (): Skill[] | null => {
  if (typeof window === "undefined") return null;

  const params = new URLSearchParams(window.location.search);

  const encoded = params.get("s");

  // if (!encoded) return null;

  if (encoded) {
    try {
      const values = encoded.split("").map((c) => parseInt(c, 36));
      if (values.length !== DEFAULT_SKILLS.length) return null;

      return DEFAULT_SKILLS.map((skill, i) => ({
        ...skill,
        value: values[i] >= 1 && values[i] <= 5 ? values[i] : skill.value,
      }));
    } catch {
      return null;
    }
  } else {
    return DEFAULT_SKILLS.map((skill) => {
      const urlVal = params.get(skill.id);
      return {
        ...skill,
        value: urlVal ? parseInt(urlVal) : skill.value,
      };
    });
  }
};

export const generateShareUrl = (skills: Skill[]): string => {
  const encoded = skills.map((skill) => skill.value.toString(36)).join("");

  return `${window.location.origin}${window.location.pathname}?s=${encoded}`;
};

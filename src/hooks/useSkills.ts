import { useState, useCallback, useEffect } from "react";
import { Skill } from "../types";
import { DEFAULT_SKILLS } from "../data/skillsData";
import { parseSkillsFromUrl } from "../utils/urlUtils";

export const useSkills = () => {
  const [skills, setSkills] = useState<Skill[]>(() => {
    // Try to parse skills from URL on initial load
    const urlSkills = parseSkillsFromUrl();
    return urlSkills || [...DEFAULT_SKILLS];
  });

  // Effect to update URL when skills change
  useEffect(() => {
    const params = new URLSearchParams();
    skills.forEach((skill) => {
      params.set(skill.id, String(skill.value));
    });

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }, [skills]);

  const setSkillValue = useCallback((id: string, value: number) => {
    setSkills((prev) =>
      prev.map((skill) => (skill.id === id ? { ...skill, value } : skill))
    );
  }, []);

  const resetSkills = useCallback(() => {
    setSkills([...DEFAULT_SKILLS]);
  }, []);

  return {
    skills,
    setSkillValue,
    resetSkills,
  };
};

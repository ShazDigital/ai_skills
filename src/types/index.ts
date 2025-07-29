export interface Skill {
  id: string;
  name: string;
  value: number;
  description?: string;
}

export interface SkillState {
  skills: Skill[];
  setSkillValue: (id: string, value: number) => void;
  resetSkills: () => void;
}

export interface SkillContextProps {
  children: React.ReactNode;
}
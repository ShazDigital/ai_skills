import React, { createContext, useContext } from 'react';
import { useSkills } from '../hooks/useSkills';
import { SkillState, SkillContextProps } from '../types';

const SkillContext = createContext<SkillState | undefined>(undefined);

export const SkillProvider: React.FC<SkillContextProps> = ({ children }) => {
  const skillsState = useSkills();
  
  return (
    <SkillContext.Provider value={skillsState}>
      {children}
    </SkillContext.Provider>
  );
};

export const useSkillContext = (): SkillState => {
  const context = useContext(SkillContext);
  
  if (context === undefined) {
    throw new Error('useSkillContext must be used within a SkillProvider');
  }
  
  return context;
};
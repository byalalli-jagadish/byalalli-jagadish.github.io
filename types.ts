
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Skill {
  subject: string;
  level: number;
  fullMark: number;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

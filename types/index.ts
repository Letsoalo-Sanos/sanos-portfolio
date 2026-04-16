export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github_url?: string;
  live_url?: string;
  featured: boolean;
  created_at?: string;
}

export interface VisitorMessage {
  id?: number;
  name: string;
  email: string;
  subject?: string;
  message: string;
  ip_address?: string;
  user_agent?: string;
  created_at?: string;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency?: number; // 0–100
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  description: string;
  credential_url?: string;
}
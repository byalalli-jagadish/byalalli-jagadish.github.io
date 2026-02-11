
import { Project, Experience, Skill, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Byalalli Jagadish",
  role: "Software Developer",
  bio: "Software Developer with 1+ years of experience building scalable backend systems. I specialize in Java, Spring Boot, and AWS, delivering high-performance microservices for global automotive leaders like GMF, BMW, and Honda. Passionate about clean architecture, performance optimization, and AI-driven innovation.",
  location: "Bangalore, India",
  email: "bjagadish1810@gmail.com",
  github: "https://github.com/Jagadish-Byalalli18",
  linkedin: "https://www.linkedin.com/in/bjagadish01",
  twitter: "https://twitter.com/jagadish",
  leetcode: "https://leetcode.com/u/coder_Jagadish/",
  resume: "https://drive.google.com/file/d/1UBc9x7bL5_Dwso76GTFhbp6fvOoEMGza/view?usp=drive_link", 
  // Using the direct link for your Google Drive photo
  profileImage: "https://lh3.googleusercontent.com/d/1_dQoSQ_vYw3pPhbah2lEr-vfcAWzzA4y"
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Job Application Portal",
    description: "Architected a scalable Microservices system implementing a Database per service strategy and Circuit Breaker patterns for high availability. Optimized inter-service orchestration using Feign Client to ensure seamless communication and fault tolerance.",
    tags: ["Java", "Spring Boot", "Microservices", "Circuit Breaker", "Feign Client", "Database per service"],
    link: "#",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?fit=crop&w=800&q=80"
  },
  {
    id: "2",
    title: "Airline Reservation System",
    description: "End-to-end reservation system featuring secure JWT authentication. Optimized data handling across complex relational entities using Repository Design Patterns with JPA/Hibernate.",
    tags: ["Java", "Spring Boot", "MySQL", "Vue.js", "JWT"],
    link: "#",
    // Updated with a high-quality laptop booking interface image that matches the visual theme you provided
    image: "https://d3lc2v4pocabbd.cloudfront.net/wp-content/uploads/2022/08/online-booking-traveling-plane-flight-concept_53876-133675.webp"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Amiti Software Technologies",
    role: "Software Developer",
    period: "Apr 2025 – Present",
    description: "Architected 5+ high-performance RESTful APIs using Spring Boot with 99.9% stability. Enhanced performance 5x using Spring EhCache. Engineered AWS Lambda functions for GMF vehicle clickstream data processing. Resolved 20+ critical defects for enterprise clients including GMF, BMW, Volkswagen, Honda, and Toyota. Automated database seeding, improving workflow efficiency by 20%."
  },
  {
    company: "MediBuddy",
    role: "Software Engineering Intern",
    period: "Jan 2025 – Apr 2025",
    description: "Executed workflow automations using n8n and Bubble.io, streamlining API integrations and reducing manual business process work by 90%. Collaborated with cross-functional teams to enhance digital healthcare solutions."
  }
];

export const RADAR_SKILLS: Skill[] = [
  { subject: 'Java / Spring Boot', level: 95, fullMark: 100 },
  { subject: 'AWS (Lambda/EC2)', level: 90, fullMark: 100 },
  { subject: 'Microservices', level: 92, fullMark: 100 },
  { subject: 'System Design', level: 85, fullMark: 100 },
  { subject: 'API Design', level: 94, fullMark: 100 },
  { subject: 'Automations (n8n)', level: 82, fullMark: 100 },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Java", "Python (Basic)", "SQL", "Object-Oriented Programming (OOP)"]
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Microservices", "Java EE (J2EE)", "Hibernate", "MyBatis", "RESTful APIs", "JUnit", "Design Pattern"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, RDS, Lambda, CloudWatch, EKS, Secret Manager, API Gateway)", "Docker", "Kubernetes", "Azure DevOps", "CI/CD", "Redis"]
  },
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "Vue.js", "React.js (Intermediate)"]
  },
  {
    title: "Tools",
    skills: ["MySQL", "Oracle", "Git", "GitHub", "Maven", "Postman", "IntelliJ IDEA", "Eclipse", "Apache Tomcat"]
  }
];

// src/data/skills.js
// Keahlian dikelompokkan per kategori — tampil sebagai badge di About.
// tone: 'amber' | 'sage' | 'clay' menentukan warna badge.

import { 
  SiJavascript, SiTypescript, SiHtml5, SiC,
  SiReact, SiReactrouter, SiNodedotjs, SiExpress, SiTailwindcss, SiSpringboot, SiSpringsecurity, SiVite,
  SiMysql, SiPostgresql, SiSupabase,
  SiGit, SiGithub, SiDocker, SiVercel, SiRailway, SiRender, SiXampp
} from 'react-icons/si'
import { FaJava, FaCss3Alt } from 'react-icons/fa'
import { TbApi, TbServerCog, TbLayoutSidebarRightCollapse, TbLockSquareRounded, TbCreditCard, TbRoute } from 'react-icons/tb'

export const skillGroups = [
  {
    category: { id: 'Bahasa Pemrograman', en: 'Programming Languages' },
    tone: 'amber',
    items: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'C', icon: SiC, color: '#A8B9CC' },
      { name: 'Java', icon: FaJava, color: '#007396' },
    ],
  },
  {
    category: { id: 'Framework & Library', en: 'Frameworks & Libraries' },
    tone: 'clay',
    items: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'React Router', icon: SiReactrouter, color: '#CA4245' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#000000', darkColor: '#FFFFFF' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'Spring Security', icon: SiSpringsecurity, color: '#6DB33F' },
      { name: 'Vite', icon: SiVite, color: '#646CFF' },
    ],
  },
  {
    category: { id: 'Database & Backend as a Service', en: 'Database & Backend as a Service' },
    tone: 'sage',
    items: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
    ],
  },
  {
    category: { id: 'Tools & Platform Deployment', en: 'Tools & Deployment Platforms' },
    tone: 'amber',
    items: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717', darkColor: '#FFFFFF' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Vercel', icon: SiVercel, color: '#000000', darkColor: '#FFFFFF' },
      { name: 'Railway', icon: SiRailway, color: '#0B0D0E', darkColor: '#FFFFFF' },
      { name: 'Render', icon: SiRender, color: '#46E3B7' },
      { name: 'XAMPP', icon: SiXampp, color: '#FB7A24' },
    ],
  },
  {
    category: { id: 'Arsitektur & Konsep', en: 'Architecture & Concepts' },
    tone: 'clay',
    items: [
      { name: 'REST API', icon: TbApi, color: '#6366F1' },
      { name: 'Microservices', icon: TbServerCog, color: '#8B5CF6' },
      { name: 'API Gateway', icon: TbRoute, color: '#EC4899' },
      { name: 'OOP', icon: TbLayoutSidebarRightCollapse, color: '#F59E0B' },
      { name: 'JWT & RBAC', icon: TbLockSquareRounded, color: '#D946EF' },
      { name: 'Payment Gateway', icon: TbCreditCard, color: '#10B981' },
    ],
  },
]

export const softSkills = [
  { id: 'Kolaborasi Tim & Kepemimpinan', en: 'Team Collaboration & Leadership' },
  { id: 'Pemecahan Masalah', en: 'Problem Solving' },
  { id: 'Komunikasi Efektif', en: 'Effective Communication' },
  { id: 'Manajemen Waktu', en: 'Time Management' },
  { id: 'Adaptabilitas & Pembelajaran Berkelanjutan', en: 'Adaptability & Continuous Learning' },
]

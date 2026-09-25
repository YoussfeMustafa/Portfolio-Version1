export interface Project {
  id: string;
  title: string;
  type?: string;
  date?: string;
  description: string;
  technologies: string[];
  features: string[];
  liveDemoUrl: string; // Placeholder to be replaced with actual URL
  githubUrl: string; // Placeholder to be replaced with actual URL
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description: string;
  skills: string[];
}

export interface Internship {
  title: string;
  organization: string;
  location: string;
  date: string;
  type: string;
  description: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  date: string;
  grade: string;
  description: string;
}

export interface Certificate {
  title: string;
  organization: string;
  date: string;
  description: string;
  additional: string;
}

export const PERSONAL_INFO = {
  name: "Youssef Mustafa Abdelrahman",
  shortName: "Youssef Mustafa",
  role: "Front-End Developer | React.js / Next.js",
  location: "Al Qalubyia, Egypt",
  email: "mustafa202youssef@gmail.com",
  phone: "01092770504",
  heroDescription:
    "Front-End Developer focused on building clean, responsive, and user-friendly web interfaces using modern web technologies.",
  aboutText:
    "Aspiring Front-End Developer with strong knowledge of HTML, CSS, JavaScript, and responsive web design. Passionate about building clean, user-friendly, and high-performance web interfaces. Eager to contribute technical skills, learn continuously, and grow within a professional development team.",
  socialPlaceholders: {
    // Exact GitHub profile link
    github: "https://github.com/youssfemustafa",
    // PLACEHOLDER: Replace with your actual LinkedIn profile link when available
    linkedin: "https://linkedin.com/in/your-username",
  },
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Core",
    iconName: "Code2",
    description: "Foundational front-end technologies and modern frameworks",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Responsive Web Design",
      "Bootstrap",
      "React.js",
      "Next.js",
    ],
  },
  {
    category: "Styling & UI",
    iconName: "Palette",
    description: "Layout systems, modern design techniques, and utility CSS",
    skills: [
      "Flexbox",
      "CSS Grid",
      "Animations",
      "Mobile-First Design",
      "Tailwind CSS",
    ],
  },
  {
    category: "Tools & Version Control",
    iconName: "GitBranch",
    description: "Source code management, task tracking, and deployment platforms",
    skills: ["Git", "GitHub", "Jira", "Chrome DevTools", "Vercel"],
  },
  {
    category: "Software Development",
    iconName: "Cpu",
    description: "Engineering methodologies, code quality, and testing practices",
    skills: [
      "Requirements Analysis",
      "Problem Solving",
      "Debugging",
      "Software Testing",
      "AI-Assisted Coding",
    ],
  },
  {
    category: "Project & Teamwork",
    iconName: "Users",
    description: "Collaboration models, sprint execution, and delivery planning",
    skills: [
      "Project Planning",
      "Project Management",
      "Team Collaboration",
      "Agile / Sprint Planning",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "dashboard-web-app",
    title: "Dashboard Web Application",
    type: "Team Project",
    description:
      "Collaborated with a teammate to customize and develop a responsive dashboard web application.",
    technologies: ["HTML", "Pug", "Sass/SCSS", "JavaScript", "Bootstrap 5", "Gulp"],
    features: [
      "Dashboard components",
      "Charts",
      "Tables",
      "User-interface features",
      "Responsive design",
    ],
    // Exact Dashboard Live URL provided by user
    liveDemoUrl: "https://youssef-dashboard-v3-hgun4vc3d-youssef-mustafa-s-projects.vercel.app",
    githubUrl: "https://github.com/youssfemustafa",
  },
  {
    id: "ecommerce-marketplace",
    title: "E-Commerce Marketplace Web Application",
    date: "April 2026 - May 2026",
    description:
      "Built a full-featured e-commerce marketplace using Next.js, TypeScript, and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    features: [
      "Product listing",
      "Product details",
      "Shopping cart",
      "Add/remove products",
      "Quantity updates",
      "Persisted cart state",
      "REST API integration",
      "Loading and error states",
      "User registration",
      "Login / Logout",
      "Form validation",
      "Responsive layouts",
    ],
    // Exact FreshCart / E-Commerce Live URL provided by user
    liveDemoUrl: "https://app1-one-blush.vercel.app",
    githubUrl: "https://github.com/youssfemustafa",
  },
  {
    id: "cosmos-space-dashboard",
    title: "Cosmos Space Dashboard",
    description:
      "Built an interactive space-themed dashboard using HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Interactive dashboard",
      "Space-themed UI",
      "Responsive design",
      "Mobile / tablet / desktop optimization",
    ],
    // Exact Cosmos Space Dashboard Live URL and repository provided by user
    liveDemoUrl: "https://youssfemustafa.github.io/Cosmos-Space-Dashboard-v1/",
    githubUrl: "https://github.com/youssfemustafa/Cosmos-Space-Dashboard-v1",
  },
];

export const INTERNSHIP_EXPERIENCE: Internship = {
  title: "Technology Training Intern",
  organization: "iCareer",
  location: "Nile City Towers, Cairo, Egypt",
  date: "September 2026",
  type: "Training / Internship",
  description:
    "Received hands-on training in requirements analysis, Jira, Git, GitHub, AI-assisted coding, debugging, and software testing.",
  highlights: [
    "Learned how to plan, manage, and deliver a complete project from initial requirements through final testing and delivery.",
    "Collaborated with a team to develop and deliver a complete project using professional teamwork and project-management practices.",
  ],
};

export const EDUCATION_DATA: Education = {
  degree: "Bachelor's Degree in Computer Science and Information Systems",
  institution: "HICMIS",
  location: "First Settlement, Cairo, Egypt",
  date: "September 2021 - June 2025",
  grade: "Very Good",
  description:
    "Computer Science and Information Systems graduate with a focus on web development.",
};

export const CERTIFICATE_DATA: Certificate = {
  title: "Front-End Web Development Diploma",
  organization: "Route Academy",
  date: "March 2026",
  description:
    "Completed a Front-End Web Development Diploma covering HTML, CSS, JavaScript, TypeScript, Bootstrap, Tailwind CSS, React.js, Next.js, and responsive web design.",
  additional:
    "Built multiple collaborative projects and used Git and GitHub for version control and deployment.",
};

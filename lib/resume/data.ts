// CV Nguyễn Văn An - Full-Stack Developer
import type { ResumeData } from "./types";

const defaultResume: ResumeData = {
  personal: {
    name: "Nguyễn Văn An",
    title: "Full-Stack Developer",
    email: "gasoqua1707@gmail.com",
    phone: "0866844150",
    location: "Hà Nội, Việt Nam",
    github: "https://github.com/annguyen-1707",
    linkedin: "https://www.linkedin.com/in/nguy%E1%BB%85n-an-181a1535b",
    website: null,
  },
  summary:
    "Software Engineering senior passionate about building scalable web applications and learning across the fullstack ecosystem. Experienced with backend development using Spring Boot and frontend/mobile development using ReactJS and React Native. Interested in modern web technologies, AI integration, and product-oriented engineering. Eager to contribute, learn quickly, and adapt in fast-paced startup environments.",
  education: [
    {
      institution: "FPT University",
      degree: "Software Engineering",
      location: "Hà Nội, Việt Nam",
      graduationYear: "Now (Expected 2026)",
      startYear: "2022",
      gpa: undefined,
      bullets: [],
    },
  ],
  experience: [
    {
      company: "Công ty CP Đầu tư Công nghệ Hoàng Huy",
      position: "Intern Developer",
      location: "Hà Nội, Việt Nam",
      startDate: "July 2025",
      endDate: "January 2026",
      achievements: [
        "Participated in developing the Hospital Canteen Management System, including authentication, authorization, and user/department management features, while also improving the UI of the D-office mobile HR management application.",
      ],
      projects: [
        {
          name: "D-office Mobile Application",
          role: "React Native Developer",
          period: "July 2025 – January 2026",
          techStack: ["React Native"],
          link: "https://play.google.com/store/apps/details?id=udsjsc.doffice",
          achievements: [
            "Developed and redesigned mobile UI based on Figma designs using React Native.",
            "Implemented screens for attendance, leave requests, tasks, and employee information management.",
          ],
        },
        {
          name: "Hospital Canteen Management System",
          role: "Backend + Frontend",
          period: "July 2025 – January 2026",
          achievements: [
            "Developed QR code scanning and ticket printing workflow.",
            "Built frontend interfaces for meal management and scan history tracking.",
          ],
        },
      ],
    },
  ],
  skills: [
    {
      category: "Core Skills",
      items: [
        "Spring Boot",
        "NodeJS",
        "ReactJS",
        "React Native",
        "Flutter",
        "Java",
        "JavaScript",
        "Kafka",
        "Microservices architecture",
        "Microsoft SQL Server",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Github",
      ],
    },
    { category: "Soft Skills", items: ["Communication", "Teamwork"] },
    { category: "Languages", items: ["English (Intermediate)"] },
  ],
  projects: [
    {
      title: "Hương Vân Trà",
      role: "Backend + Frontend",
      period: "May 2026 – Present",
      location: "Hà Nội, Việt Nam",
      githubUrl: "https://github.com/ThaiDuisss/Huong-Van-Tra-",
      url: "/projects/huong-van-tra",
      achievements: [
        "Developed a Microservices-based Tea Chain Management and POS Sales System supporting real-time order processing, Bill of Materials (BOM) management, inventory control, and revenue reporting across multiple branches.",
        "Built the Bill of Materials (BOM) management module and automated production workflows that deduct raw material inventory from corresponding shelf locations.",
        "Developed the POS web application for sales and branch inventory management.",
        "Technologies: Spring Boot, Spring Cloud (Gateway, Discovery), Spring Security, Keycloak, OAuth2, Spring Data JPA, Hibernate, MySQL, Flyway, Kafka (Avro), Redis, ReactJS, TypeScript, Tailwind CSS.",
      ],
    },
    {
      title: "Personalized Japanese Learning System (FU OHAYO)",
      role: "Backend + Frontend",
      period: "May 2025 – September 2025",
      githubUrl: "https://github.com/annguyen-1707/Personalized-Learning-System",
      url: "/projects/fu-ohayo",
      achievements: [
        "Created a web-based Japanese learning platform supporting personalized learning paths integrated with AI for speaking and vocabulary practice.",
        "Developed security and authentication features using Spring Security and JWT.",
        "Implemented speaking practice and pronunciation scoring using Azure Speech Service.",
        "Integrated Spring AI and Gemini AI to generate exercises and quiz questions based on vocabulary and grammar.",
        "Technologies: Spring Boot, MySQL, ReactJS, Azure Speech Service, Gemini AI, VNPay.",
      ],
    },
  ],
  codingProfiles: [],
  certifications: [
    "Project Management Principles and Practices Specialization – University of California, Irvine (01/2026)",
    "Software Development Lifecycle Specialization – University of Minnesota (01/2025)",
    "User Experience Research and Design – University of Michigan (10/2024)",
    "Web Design for Everybody: Basics of Web Development & Coding Specialization – University of Michigan (09/2024)",
  ],
  achievements: [],
};

export const resumes: Record<string, ResumeData> = {
  default: defaultResume,
};

export const resumeData = resumes.default;

/** Finds a top-level project by title. */
export function findProject(title: string) {
  return resumeData.projects.find((p) => p.title === title) ?? null;
}

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
      position: "Developer",
      location: "Hà Nội, Việt Nam",
      startDate: "July 2025",
      endDate: "January 2026",
      achievements: [
        "Participated in developing the Hospital Canteen Management System, including authentication, authorization, and user/department management features, while also developing RESTful APIs for the D-office web application.",
      ],
      projects: [
        {
          name: "D-office Web Application",
          role: "Backend Developer",
          period: "July 2025 – January 2026",
          link: "https://office.uds.com.vn",
          achievements: [
            "Developed and maintained RESTful APIs for the D-office project.",
            "Investigated and fixed bugs to improve system stability and functionality.",
            "Performed API testing, debugging, and validation to ensure features met project requirements.",
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
      category: "Back-end stack",
      items: [
        "Java",
        "Spring Boot",
        "Multithreading",
        "Spring WebFlux",
        "Spring Security",
        "Spring Data JPA",
        "REST API",
        "Microservices",
        "JWT",
        "OAuth2",
        "Kafka",
        "Resilience4J",
        "FeignClient",
        "WebSocket",
        "SSE",
        "NodeJs",
      ],
    },
    {
      category: "Front-end stack",
      items: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Bootstrap"],
    },
    {
      category: "Database",
      items: ["MySQL", "Oracle", "SQL Server", "MongoDB (basic)", "Redis"],
    },
    {
      category: "Tools/DevOps",
      items: ["Git", "Maven/Gradle", "Docker", "Postman", "Swagger"],
    },
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
        "Tech: Spring Boot • Spring Cloud • Spring Security • Keycloak • MySQL • Kafka • Debezium • Redis • SSE • Swagger",
        "Developed a multi-branch POS and management platform using a microservices architecture.",
        "Implemented centralized authentication and authorization using Keycloak, Spring Security, and API Gateway, with trusted user context securely propagated to internal services.",
        "Integrated Redis caching with TTL for frequently accessed data and idempotency management, reducing repeated database queries and improving API response performance.",
        "Applied Saga Orchestration, Kafka, Debezium CDC, Transactional Outbox, and Inbox patterns to ensure reliable and idempotent distributed processing for optimizing order and payment flows.",
      ],
    },
    {
      title: "Personalized Japanese Learning System (FU OHAYO)",
      role: "Backend + Frontend",
      period: "May 2025 – September 2025",
      githubUrl: "https://github.com/annguyen-1707/Personalized-Learning-System",
      url: "/projects/fu-ohayo",
      achievements: [
        "Tech: Spring Boot • MySQL • ReactJS • Azure Speech Service • Gemini AI • VNPay",
        "Created a web-based Japanese learning platform supporting personalized learning paths integrated with AI for speaking and vocabulary practice.",
        "Developed security and authentication features using Spring Security and JWT.",
        "Implemented speaking practice and pronunciation scoring using Azure Speech Service.",
        "Integrated Spring AI and Gemini AI to generate exercises and quiz questions based on vocabulary and grammar.",
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

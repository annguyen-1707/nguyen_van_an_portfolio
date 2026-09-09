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
    "Software Engineering senior passionate about building scalable web applications with Spring Boot, ReactJS, and React Native. Experienced in backend, frontend, and mobile development, with a strong interest in modern web tech, AI integration, and fast-paced startup environments.",
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
      position: "Fullstack Developer",
      location: "Hà Nội, Việt Nam",
      startDate: "July 2025",
      endDate: "July 2026",
      projects: [
        {
          name: "D-office Web Application",
          role: "Fullstack Developer",
          period: "July 2025 – Dec 2026",
          link: "https://office.uds.com.vn",
          achievements: [
            "Built backend micro-features and RESTful APIs using Spring Boot (Java 17) with Spring Security and JWT for employee check-in and authentication.",
            "Implemented complex attendance business logic: work-hour computation, multi-shift scheduling, location geofencing validation, and handling edge cases like duplicate punches or out-of-frame time records.",
            "Designed schema collections and query structures in MongoDB (Spring Data MongoDB) to efficiently store and query high-frequency timesheet audit logs.",
            "Developed cross-platform mobile check-in screens, personal dashboards, and shift calendar views using React Native and TypeScript with offline caching mechanisms.",
          ],
        },
        {
          name: "Hospital Canteen Management System",
          role: "Fullstack Developer",
          period: "January 2026 – July 2027",
          achievements: [
            "Built automated workflows for QR code scanning, ticket printing, and real-time meal slip generation, including hardware integration to manage and communicate with paired scanners and printers via Serial Port (COM Port) connections.",
            "Implemented dynamic meal configuration features that automatically compute eligible meal dates by subtracting weekends and national holidays.",
            "Designed and implemented responsive frontend interfaces for meal management, scan history tracking",
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
    // {
    //   category: "Mobile stack",
    //   items: ["React-Native", "Flutter"],
    // },
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
      title: "Hương Vân Trà – Client Project ",
      role: "Fullstack Developer",
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
      role: "Fullstack Developer",
      period: "March 2025 – July 2025",
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
  languages: ["TOEIC - 550"],
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

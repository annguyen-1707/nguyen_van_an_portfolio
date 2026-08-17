import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectPageShell from "@/components/projects/ProjectPageShell";
import { findProject } from "@/lib/resume/data";

const PROJECT_TITLE = "Hương Vân Trà";

export const metadata: Metadata = {
  title: PROJECT_TITLE,
};

export default function HuongVanTraPage() {
  const project = findProject(PROJECT_TITLE);
  if (!project) notFound();

  const actions = [
    project.githubUrl && { label: "GitHub Repository", href: project.githubUrl, icon: "github" as const },
    project.liveUrl && { label: "Live Demo", href: project.liveUrl, icon: "external" as const },
  ].filter((a): a is { label: string; href: string; icon: "github" | "external" } => Boolean(a));

  return (
    <ProjectPageShell
      eyebrow="Highlight Project"
      title={project.title}
      description="A Microservices-based Tea Chain Management and POS Sales System supporting real-time synchronization of order processing, Bill of Materials (BOM) management, inventory control, and revenue reporting across multiple branches."
      meta={[
        project.role && { label: "Role", value: project.role },
        project.period && { label: "Timeline", value: project.period },
        project.location && { label: "Location", value: project.location },
      ].filter((m): m is { label: string; value: string } => Boolean(m))}
      actions={actions}
      techStack={[
        "Spring Boot",
        "Spring Cloud",
        "Spring Security",
        "Keycloak",
        "OAuth2",
        "MySQL",
        "Kafka",
        "Redis",
        "ReactJS",
        "TypeScript",
        "Tailwind CSS",
      ]}
      highlights={project.achievements}
      footerNote={`${PROJECT_TITLE} · Nguyễn Văn An Portfolio`}
    />
  );
}

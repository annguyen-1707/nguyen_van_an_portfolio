import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectPageShell from "@/components/projects/ProjectPageShell";
import { findProject } from "@/lib/resume/data";

const PROJECT_TITLE = "Personalized Japanese Learning System (FU OHAYO)";

export const metadata: Metadata = {
  title: PROJECT_TITLE,
};

export default function FuOhayoPage() {
  const project = findProject(PROJECT_TITLE);
  if (!project) notFound();

  const actions = [
    project.githubUrl && { label: "GitHub Repository", href: project.githubUrl, icon: "github" as const },
    project.liveUrl && { label: "Live Demo", href: project.liveUrl, icon: "external" as const },
  ].filter((a): a is { label: string; href: string; icon: "github" | "external" } => Boolean(a));

  return (
    <ProjectPageShell
      eyebrow="Personal Project"
      title={project.title}
      description="A web-based Japanese learning platform supporting personalized learning paths integrated with AI to practice speaking, pronunciation, grammar, and vocabulary."
      meta={[
        project.role && { label: "Role", value: project.role },
        project.period && { label: "Timeline", value: project.period },
        project.location && { label: "Location", value: project.location },
      ].filter((m): m is { label: string; value: string } => Boolean(m))}
      actions={actions}
      highlights={project.achievements}
      footerNote={`${PROJECT_TITLE} · Nguyễn Văn An Portfolio`}
    />
  );
}

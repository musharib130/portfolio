"use client";

import Projects from "@/components/projects/Projects";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
    return <Projects projects={projects} />
}

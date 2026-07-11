"use client";

import { useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";
import { Project } from "@/lib/projects";

interface ProjectsProps {
    projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div style={{ paddingTop: '32px' }} className="h-full flex flex-col overflow-hidden">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center flex-shrink-0">Projects</h1>
            <div className="flex flex-wrap gap-3 sm:gap-6 overflow-y-auto flex-1 min-h-0 items-start py-8">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        onViewDetails={setSelectedProject}
                    />
                ))}
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
}

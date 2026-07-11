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
        <div className="h-full flex flex-col overflow-hidden">
            <h1 className="text-3xl font-bold mb-6 text-center flex-shrink-0">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto flex-1 min-h-0 items-start py-8">
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

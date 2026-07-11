"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
    project: Project;
    onViewDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
    return (
        <div className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)] bg-card rounded-lg flex flex-col overflow-hidden transition-shadow hover:shadow-lg pt-3 sm:pt-4 px-3 sm:px-4">
            <div className="relative w-full aspect-[2.4/1] sm:aspect-video rounded-md overflow-hidden">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#a9835c] text-sm">
                        No preview
                    </div>
                )}
            </div>

            <div className="flex flex-col flex-1 py-3 sm:py-4">
                <h2
                    className="text-lg font-bold text-[#4b2e1e] text-center"
                    style={{ fontFamily: "Cinzel, serif" }}
                >
                    {project.title}
                </h2>
                <p className="mt-3 sm:mt-4 text-sm text-[#5c4a3a] line-clamp-2 sm:line-clamp-3 flex-1">
                    {project.description.join(" ")}
                </p>

                <div className="mt-2 sm:mt-4 flex items-center justify-between">
                    {project.github ? (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                        >
                            <FaGithub className="h-6 w-6" />
                        </a>
                    ) : (
                        <span />
                    )}

                    <button
                        onClick={() => onViewDetails(project)}
                        className="px-4 py-1.5 rounded-full text-sm font-medium text-[#4b2e1e] bg-gradient-to-b from-[#f3e0b3] to-[#d9b382] shadow-[inset_0_0_8px_rgba(0,0,0,0.15)] hover:brightness-105 transition cursor-pointer"
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}

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
        <div className="bg-card rounded-lg flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
            <div className="relative w-full aspect-video bg-[#f3e0b3]">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#a9835c] text-sm">
                        No preview
                    </div>
                )}
            </div>

            <div className="flex flex-col flex-1 p-4">
                <h2
                    className="text-lg font-bold text-[#4b2e1e] truncate"
                    style={{ fontFamily: "Cinzel, serif" }}
                >
                    {project.title}
                </h2>
                <p className="mt-2 text-sm text-[#5c4a3a] line-clamp-3 flex-1">
                    {project.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                    {project.github ? (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View on GitHub"
                            className="flex items-center justify-center w-8 h-8 rounded-full bg-[#5c3a21] text-[#fefcf7] hover:bg-[#4b2e1e] transition-colors"
                        >
                            <FaGithub size={16} />
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

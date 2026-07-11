"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/lib/projects";

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-card border border-[#d4b886] rounded-lg max-w-lg w-full max-h-[85vh] overflow-y-auto p-6 relative"
                    >
                        <button
                            onClick={onClose}
                            aria-label="Close"
                            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#5c3a21] text-[#fefcf7] flex items-center justify-center hover:bg-[#4b2e1e] transition-colors cursor-pointer"
                        >
                            ✕
                        </button>

                        <h2
                            className="text-2xl font-bold text-[#4b2e1e] pr-10"
                            style={{ fontFamily: "Cinzel, serif" }}
                        >
                            {project.title}
                        </h2>

                        {project.image && (
                            <div className="relative w-full aspect-video rounded overflow-hidden border border-[#d4b886] mt-4">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        <p className="mt-4 text-[#5c4a3a] whitespace-pre-line">
                            {project.description}
                        </p>

                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#4b2e1e] bg-gradient-to-b from-[#f3e0b3] to-[#d9b382] shadow-[inset_0_0_8px_rgba(0,0,0,0.15)] hover:brightness-105 transition"
                            >
                                <FaGithub size={16} />
                                View on GitHub
                            </a>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

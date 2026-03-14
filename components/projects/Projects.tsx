"use client";

import Image from "next/image";

interface Project {
    name: string;
    description: string;
    image?: string;
    github?: string;
}

export default function Projects() {

    const projects: Project[] = [
        {
    name: "Forensics - eDiscovery Collection Platform",
    description:
      "Built a desktop app using ElectronJS and Angular to generate and analyze iOS device backups. Used Python and C to overcome Node.js limitations and handle performance-critical tasks like data parsing and extraction. Leveraged child processes and IPC for seamless communication between processes and efficient system-level operations. Leveraged multi-threading to perform CPU intensive tasks such as decryption. Designed custom logic to locate and extract key data such as SMS from iOS backup files.",
    },
    {
        name: "Content Aware AI Powered Chatbot",
        description:
        "Designed and developed using Python, LangChain, LangGraph, Chroma, and OpenAI API. The application accepts a PDF document which is indexed using RAG. Users enter a query and the system responds according to the content of the provided PDF.",
    },
    {
        name: "Role Based Access Control Solution",
        description:
        "Designed and implemented a modular RBAC system for ExpressJS applications. Created a normalized database schema using MySQL to manage users, roles, and permissions efficiently. Enabled dynamic configuration of roles and permissions for flexible access control. Integrated Redis caching to boost performance, with custom cache invalidation to ensure data consistency. Built as a plug-and-play solution for easy integration into existing ExpressJS projects. Later redesigned and rewritten for FastAPI and MongoDB.",
        github: "https://github.com/user/rbac-solution",
    },
    {
        name: "Web Monitoring System",
        description:
        "Developed a real-time web monitoring system using ExpressJS and vanilla JavaScript. Tracked and logged user actions through WebSockets for live session monitoring. Processed activity data to generate and display real-time site statistics for admins. Implemented a live chat feature for admins to send direct messages to active users. Integrated Stripe for secure and seamless payment processing.",
        github: "https://github.com/user/web-monitoring",
    },
    ];

    return (
        <div className="h-full overflow-y-auto">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            <div className="flex flex-col gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row bg-yellow-50 shadow-md rounded-lg p-6 items-center md:items-start h-48"
                    >
                        <div className="flex-1 flex flex-col justify-between">
                            <h2 className="text-xl font-semibold">{project.name}</h2>
                            <p className="mt-2 text-gray-700 line-clamp-3">{project.description}</p>
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 inline-block text-blue-600 hover:underline"
                                >
                                    GitHub
                                </a>
                            )}
                        </div>
                        {project.image && (
                            <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    width={150}
                                    height={150}
                                    className="rounded-md object-cover"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

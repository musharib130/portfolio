export interface Project {
    title: string;
    description: string;
    image?: string;
    github?: string;
}

export const projects: Project[] = [
    {
        title: "Forensics - eDiscovery Collection Platform",
        description:
            "Built a desktop app using ElectronJS and Angular to generate and analyze iOS device backups. Used Python and C to overcome Node.js limitations and handle performance-critical tasks like data parsing and extraction. Leveraged child processes and IPC for seamless communication between processes and efficient system-level operations. Leveraged multi-threading to perform CPU intensive tasks such as decryption. Designed custom logic to locate and extract key data such as SMS from iOS backup files.",
    },
    {
        title: "Content Aware AI Powered Chatbot",
        description:
            "Designed and developed using Python, LangChain, LangGraph, Chroma, and OpenAI API. The application accepts a PDF document which is indexed using RAG. Users enter a query and the system responds according to the content of the provided PDF.",
    },
    {
        title: "Role Based Access Control Solution",
        description:
            "Designed and implemented a modular RBAC system for ExpressJS applications. Created a normalized database schema using MySQL to manage users, roles, and permissions efficiently. Enabled dynamic configuration of roles and permissions for flexible access control. Integrated Redis caching to boost performance, with custom cache invalidation to ensure data consistency. Built as a plug-and-play solution for easy integration into existing ExpressJS projects. Later redesigned and rewritten for FastAPI and MongoDB.",
        github: "https://github.com/user/rbac-solution",
    },
    {
        title: "Web Monitoring System",
        description:
            "Developed a real-time web monitoring system using ExpressJS and vanilla JavaScript. Tracked and logged user actions through WebSockets for live session monitoring. Processed activity data to generate and display real-time site statistics for admins. Implemented a live chat feature for admins to send direct messages to active users. Integrated Stripe for secure and seamless payment processing.",
        github: "https://github.com/user/web-monitoring",
    },
];

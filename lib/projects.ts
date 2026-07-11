export interface Project {
    title: string;
    description: string[];
    image?: string;
    github?: string;
}

export const projects: Project[] = [
    {
        title: "Forensics - eDiscovery Collection Platform",
        description: [
            "Built a desktop app using ElectronJS and Angular to generate and analyze iOS device backups.",
            "Used Python and C to overcome Node.js limitations and handle performance-critical tasks like data parsing and extraction.",
            "Leveraged child processes and IPC for seamless communication between processes and efficient system-level operations.",
            "Leveraged multi-threading to perform CPU intensive tasks such as decryption.",
            "Designed custom logic to locate and extract key data such as SMS from iOS backup files.",
        ],
        image: "/project_images/ediscovery.jpg",
    },
    {
        title: "AI-Powered Face Clustering & Photo Organization Platform",
        description: [
            "Built a cross-platform desktop application using Python and PyWebView to automatically detect, identify, and organize people across large image collections.",
            "Implemented face detection using the SCRFD model and generated facial embeddings using ArcFace for accurate identity matching.",
            "Applied facial landmark alignment and normalization techniques to improve embedding consistency and recognition accuracy across different poses and image conditions.",
            "Designed clustering algorithms to automatically group images belonging to the same person without requiring manual labeling.",
            "Integrated GPU acceleration for high-performance inference with automatic CPU fallback to ensure compatibility across different hardware configurations.",
            "Developed an image processing pipeline capable of scanning large photo libraries, extracting faces, generating embeddings, and organizing results efficiently.",
            "Built a desktop user interface with PyWebView, combining web technologies with native Python capabilities for a seamless user experience.",
            "Optimized model loading, inference workflows, and resource utilization to support local, privacy-preserving AI processing without requiring cloud services.",
            "Architected the application with a clear separation between frontend and backend components to improve maintainability and scalability.",
        ],
        image: "/project_images/photo_organizer.jpg",
    },
    {
        title: "Role Based Access Control Solution",
        description: [
            "Designed and implemented a modular RBAC system for ExpressJS applications.",
            "Created a normalized database schema using MySQL to manage users, roles, and permissions efficiently.",
            "Enabled dynamic configuration of roles and permissions for flexible access control.",
            "Integrated Redis caching to boost performance, with custom cache invalidation to ensure data consistency.",
            "Built as a plug-and-play solution for easy integration into existing ExpressJS projects.",
            "Later redesigned and rewritten for FastAPI and MongoDB.",
        ],
        image: "/project_images/rbac.jpg",
        github: "https://github.com/user/rbac-solution",
    },
    {
        title: "Web Monitoring System",
        description: [
            "Developed a real-time web monitoring system using ExpressJS and vanilla JavaScript.",
            "Tracked and logged user actions through WebSockets for live session monitoring.",
            "Processed activity data to generate and display real-time site statistics for admins.",
            "Implemented a live chat feature for admins to send direct messages to active users.",
            "Integrated Stripe for secure and seamless payment processing.",
        ],
        image: "/project_images/web_monitoring_system.jpg",
        github: "https://github.com/user/web-monitoring",
    },
];

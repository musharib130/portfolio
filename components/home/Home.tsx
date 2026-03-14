import Image from "next/image";

export default function Home() {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center mb-4">
            <Image src="/musharib.png" alt="me" width={500} height={500}/>
            <p className="text-center mb-2">Hi, I'm Musharib!</p>
            <p className="text-center max-w-[80%]">
                Software Engineer experienced across diverse languages, frameworks, and technology stacks, with a 
                strong belief that solid fundamentals and engineering principles matter more than any specific 
                technology. While proficient in modern tools such as Angular, NextJs, Electron, Node.js, FastApi, and 
                relational databases, my primary focus is on software architecture, system design, and application 
                security. I approach every project with an emphasis on building scalable, secure, and maintainable 
                systems that balance immediate business goals with long-term sustainability. 
            </p>
        </div>
    );
}
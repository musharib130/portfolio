import Image from "next/image";

export default function Home() {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center mb-4">
            <Image
                src="/musharib.png"
                alt="Musharib Ayub"
                width={500}
                height={500}
                className="mb-4"
            />

            <p className="text-lg font-semibold text-center mb-1 text-gray-900">
                Hi, I’m Musharib Ayub
            </p>

            <p className="text-sm font-semibold text-center max-w-[80%] text-gray-800">
                Software Engineer | Architecture & System Design
            </p>

            <p className="text-xs text-center text-gray-600 max-w-[75%] mt-2">
                Passionate about building scalable, well-structured systems with clean and maintainable design.
            </p>
        </div>
    );
}
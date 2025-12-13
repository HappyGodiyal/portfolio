
const Projects = () => {

    const projects = [
        {
            title: "Pair-Program",
            description:
                "Discuss, solve, and code together with your friends in real-time.",
            tech: "Web Sockets (ws), CRDT (Yjs), Livekit, Gemini, Express + TypeScript, Next.js + Tailwind CSS",
            image: "https://www.nikkhil.tech/_next/image?url=%2FpairProgram.png&w=828&q=75",
            link: "#",
        },
        {
            title: "Centralised Exchange (Backend)",
            description:
                "A centralised exchange using typescript, redis queues, pub subs and postgres",
            tech:
                "Redis, Node.js, TypeScript, Express, Singleton Pattern, Postgres, Pub subs",
            image: "https://www.nikkhil.tech/_next/image?url=%2FcfdExchange.jpeg&w=828&q=75",
            link: "#",
        },
        {
            title: "Maker – AI website builder",
            description:
                "Make websites using a simple prompt, using AI",
            tech: "Next.js, tRPC, Gemini, Inngest, E2B",
            image: "https://www.nikkhil.tech/_next/image?url=%2Fmaker.png&w=828&q=75",
            link: "#",
        },
        {
            title: "MusicBlocks Git Backend",
            description:
                "Backend for versioning music projects, similar to Git.",
            tech: "Node.js, Express, TypeScript, Octokit.js",
            image: "https://www.nikkhil.tech/_next/image?url=%2FmusicBlocks.png&w=828&q=75",
            link: "#",
        },
    ];

    return (
        <section className="max-w-[38rem] mx-auto px-4 py-3">
            <h2 className="text-base font-[500] text-[#1A1A1A] mb-4">Stuff I built</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projects.map((p, i) => (
                    <div
                        key={i}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                    >
                        <img
                            src={p.image}
                            alt={p.title}
                            className="rounded-md mb-4 w-full"
                        />

                        <h3 className="text-sm font-medium text-[#1A1A1A]">{p.title}</h3>
                        <p className="text-xs text-gray-500 mb-2">{p.description}</p>

                        <p className="text-xs text-gray-400 mb-2">{p.tech}</p>

                        <a
                            href={p.link}
                            className="text-xs text-gray-600 hover:text-black"
                        >
                            View Project →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

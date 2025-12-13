
const Skills = () => {

    const skills = [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Redux",
        "Node.js",
        "Tailwind CSS",
        "Prisma",
        "MongoDB",
        "PostgreSQL",
        "Docker",
    ];

    return (
        <section className="max-w-[38rem] mx-auto px-4 py-3">
            <h2 className="text-base font-[500] text-[#1A1A1A] mb-4">Skills</h2>

            <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Skills;

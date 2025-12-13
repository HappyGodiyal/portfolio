import React from 'react'

const Contributions = () => {

    const contributions = [
        {
            name: "Open Source (Upcoming)",
            description:
                "Actively preparing to contribute to frontend-focused open source projects (React, UI, accessibility).",
            link: "#",
            icon: "🚀",
        },
        {
            name: "Personal Projects",
            description:
                "Built and shipped multiple frontend projects using React, Tailwind, Redux, and modern UI patterns.",
            link: "#",
            icon: "💻",
        },
    ];

    return (
        <section className="max-w-[38rem] mx-auto px-4 py-5">
            <h2 className="text-base font-[500] text-[#1A1A1A] mb-4">
                Cool places I’ve contributed
            </h2>

            <div className="space-y-3">
                {contributions.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 hover:bg-gray-50 transition"
                    >
                        <div className="flex items-start gap-3">
                            <span className="text-lg">{item.icon}</span>
                            <div>
                                <p className="text-sm font-medium text-[#1A1A1A]">
                                    {item.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {item.description}
                                </p>
                            </div>
                        </div>

                        <a
                            href={item.link}
                            className="text-xs text-gray-500 hover:text-gray-800"
                        >
                            Link
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Contributions
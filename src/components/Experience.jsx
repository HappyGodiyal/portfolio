import React from 'react'

const experience = [
    {
        role: "Frontend Developer",
        company: "Meon Technologies",
        duration: "May 2025 - Dec 2025",
        description: ["Built production-grade frontend applications using React.js with a modern, scalable UI architecture.",
            "Improved performance by optimizing re-renders and bundle size, while delivering reusable, cross-browser, and responsive components in collaboration with cross-functional teams."
        ],
        link: "#",
    },
    {
        role: "Software Developer",
        company: "B-IOT Solutions",
        duration: "April 2024 - May 2025",
        description: ["Built scalable, responsive UIs with React.js using advanced components like tooltips, toasts, and interactive charts.",
            "Boosted performance by 28% via lazy loading, debouncing and API optimizations, implemented real-time data updates, and managed state with Redux."
        ],
        link: "#",
    },
];

const Experience = () => {
    return (
        <section className="max-w-[38rem] mx-auto px-4 py-3">
            <h2 className="text-base font-[500] text-[#1A1A1A] mb-3">Experience</h2>

            <div className="space-y-3">
                {experience.map((exp, i) => (
                    <div
                        key={i}
                        className="flex justify-between gap-4 border border-gray-200 rounded-lg px-4 py-3 hover:bg-gray-50 transition"
                    >
                        <div>
                            <p className="text-sm font-medium text-[#1A1A1A]">
                                {exp.role} · {exp.company}
                            </p>

                            <p className="text-xs text-gray-500">{exp.duration}</p>

                            <div className='mt-1'>
                                {
                                    exp.description.map((des) => (
                                        <p className="text-xs text-gray-600 mt-0.5">
                                            {des}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;

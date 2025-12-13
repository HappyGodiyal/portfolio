import React from 'react'

const Education = () => {

    const education = [
        {
            institute: "Guru Gobind Singh Indraprastha University",
            details: "B.Tech, Computer Science | 2020 – 2024 | GPA: 8.1",
            description:
                "Started my journey into computer science, built multiple projects, and actively participated in tech communities.",
        },
        {
            institute: "Soami Nagar Model School",
            details: "High School | 2016 – 2020 | 12th: 92%, 10th: 85%",
            description:
                "Represented school in volley ball, participated in debates, anchoring, and extracurricular activities.",
        },
    ];

    return (
        <section className="max-w-[38rem] mx-auto px-4 py-3">
            <h2 className="text-base font-[500] text-[#1A1A1A] mb-4">
                Education
            </h2>

            <div className="space-y-3">
                {education.map((edu, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-lg px-4 py-3 hover:bg-gray-50 transition"
                    >
                        <p className="text-sm font-medium text-[#1A1A1A]">
                            {edu.institute}
                        </p>
                        <p className="text-xs text-gray-500">
                            {edu.details}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                            {edu.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Education



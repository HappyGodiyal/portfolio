import projectManagement from '../assets/projectmanagement.png'
import giphy from '../assets/giphy.png'
import rabbit from '../assets/rabbit.png'
import maker from '../assets/maker.webp'
import justdrop from '../assets/justdrop.png'

const Projects = () => {

    const projects = [
        {
            title: "Project Management",
            description:
                "A project management platform to organize projects, create and assign tasks, and track team progress efficiently & much more..",
            tech:
                "React.js, Redux, Node.js, Express, Clerk, Inngest, PostgreSQL(Neon), Prisma, Brevo",
            image: projectManagement,
            link: "https://project-mgmt-one.vercel.app",
        },
        {
            title: "Rabbit",
            description:
                "An online store for trending men’s and women’s clothing with smooth shopping and checkout experience.",
            tech: "MERN Stack, Paypal Gateway, Jwt, Tailwind CSS, Cloudinary, ",
            image: rabbit,
            link: "https://github.com/HappyGodiyal/eKart",
        },
        {
            title: "JustDrop",
            description:
                "Price Drop Tracker - Web Scraping & Alert System",
            tech: "Next Js, Tailwind CSS, Supabase, Resend",
            image: justdrop,
            link: "https://justdrop.vercel.app",
        },
        {
            title: "My Giphy",
            description:
                "GIF Search & Sharing Web App",
            tech: " React Js, Tailwind CSS, Context API, REST API, Javascript",
            image: giphy,
            link: "https://happygiphy.netlify.app",
        },
        {
            title: "Maker - AI website builder",
            description:
                "Make websites using a simple prompt, using AI",
            tech: "Next.js, tRPC, Gemini, Inngest, E2B",
            image: maker,
            link: "#",
        },
    ];

    return (
        <section className="max-w-[38rem] mx-auto px-4 py-3">
            <h2 className="text-base font-[500] text-[#1A1A1A] mb-3">Stuff I built</h2>

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

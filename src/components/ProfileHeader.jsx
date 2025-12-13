import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profileImg from '../assets/happyimgg.jpeg'

const ProfileHeader = () => {
    return (
        <section className="max-w-[38rem] mx-auto px-4 py-5">
            {/* Top Row */}
            <div className="flex items-start gap-4">
                {/* Avatar */}
                <img
                    src={profileImg}
                    alt="Profile"
                    className="w-14 h-14 rounded-md object-cover"
                />

                {/* Name & Info */}
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-lg font-semibold text-gray-900">
                                Happy Godiyal
                            </h1>
                            <p className="text-sm text-gray-500">
                                Frontend Developer, 23-something year old
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 text-gray-400">
                            <a
                                href="https://github.com/HappyGodiyal"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-gray-700 transition"
                            >
                                <FaGithub size={16} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/happy-godiyal-4897291a9"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-gray-700 transition"
                            >
                                <FaLinkedin size={16} />
                            </a>
                            <a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-gray-700 transition"
                            >
                                <FaTwitter size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <hr className="mb-2 mt-0.5 border-gray-200" />

            {/* Description */}
            <div className="space-y-1 text-gray-700 text-[14px] leading-relaxed">
                <p>
                    I make things. Web, apps, frontends, whatever needs building.
                </p>
                <p>
                    I work remotely, jump into projects I like, and build stuff along the
                    way. Outside of work, I explore new tech, improve UI/UX, hit the gym,
                    and enjoy learning from people with stories to tell.
                </p>
            </div>
        </section>
    )
}

export default ProfileHeader


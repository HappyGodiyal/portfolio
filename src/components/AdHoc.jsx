const items = [
    {
        title: "Unexpected validation",
        description:
            "Paras Chopra commented on one of my projects: 'Sell this and you will be rich.'",
    },
    {
        title: "Contributions that got me into GSoC",
        description:
            "Major work in pre-GSoC period — bug fixes, test cases, enhancements.",
    },
    {
        title: "Other worthy open source work",
        description:
            "Migrated JS to TS, built PWAs, contributed to random projects.",
    },
    {
        title: "Podcast with Walter Bender",
        description:
            "Discussed technology, learning and building projects.",
    },
    {
        title: "Hackathon win",
        description:
            "Hashnode AI hackathon — built my first internet dollar project.",
    },
    {
        title: "I write",
        description: "Sometimes I write.",
    },
];

const AdHoc = () => {
    return (
        <section className="max-w-[38rem] mx-auto px-4 py-3">
            <h2 className="text-base font-semibold mb-4">Ad-hoc</h2>

            <div className="space-y-3">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="flex justify-between rounded-lg px-4 py-3 border border-gray-200  hover:bg-gray-50 transition"
                    >
                        <div>
                            <p className="text-sm font-[500] text-[#1A1A1A]">{item.title}</p>
                            <p className="text-xs text-gray-500">{item.description}</p>
                        </div>

                        <a className="text-xs mx-1 text-gray-600 hover:text-black">Link</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AdHoc;

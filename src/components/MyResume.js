const ResumeSection = ({ title, experiences }) => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <ul>
                {experiences.map((experience) => {
                    <li className="bg-[#FF003C] rounded-lg shadow-md p-4 hover:shadow-lg my-5">
                        <span>
                            {experience.company}
                        </span>
                    </li>
                })}
            </ul>
        </div>
    );
};

const Resume = ({ sections }) => {
    return (
        <div className="px-4">
            <h1 className="text-3xl font-bold mb-6">Resume</h1>
            {sections.map((section) => (
                <ResumeSection key={section.title} title={section.title} experiences={section.experiences}>
                </ResumeSection>
            ))}
        </div>
    );
};

const test = [
    {
        title: "Experience",
        experiences: [{
            company: "Acme Co.",
            period: "2019 - Present",
            description: "Made amazing UIs for the company's products",
            role: "Front-end Developer",
        },
        {
            company: "XYZ Inc.",
            period: "2017 - 2019",
            description: "Made amazing UIs for the company's products",
            role: "Back-end Developer",
        }]
    },
    {
        title: "Education",
        experiences: [{
            company: "UNESC",
            period: "2013 - 2017",
            description: null,
            role: "B.S. in Production Engineering",
        },
        {
            company: "University of Debrecen",
            period: "2018 - 2020",
            description: null,
            role: "M.S. in Engineering Management",
        }]
    }

]
const sections = [
    {
        title: "Experience",
        content: (
            <ul>
                <li className="bg-[#FF003C] rounded-lg shadow-md p-4 hover:shadow-lg my-5">
                    <span>
                        Front-end Developer at Acme Co.
                    </span>
                </li>
                <li className="bg-[#FF003C] rounded-lg shadow-md p-4 hover:shadow-lg my-5">
                    Back-end Developer at XYZ Inc.
                </li>
            </ul>
        ),
    },
    {
        title: "Education",
        content: (
            <ul>
                <li>B.S. in Production Engineering from UNESC</li>
                <li>M.S. in Engineering Management from University of Debrecen</li>
            </ul>

        ),
    },
];

const MyResume = () => {
    return <Resume sections={test} />;
};

export default MyResume;
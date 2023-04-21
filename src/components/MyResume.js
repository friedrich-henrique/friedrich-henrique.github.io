const ResumeSection = ({ title, children }) => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            {children}
        </div>
    );
};

const Resume = ({ sections }) => {
    return (
        <div className="px-4">
            <h1 className="text-3xl font-bold mb-6">Resume</h1>
            {sections.map((section) => (
                <ResumeSection key={section.title} title={section.title}>
                    {section.content}
                </ResumeSection>
            ))}
        </div>
    );
};


const sections = [
    {
        title: "Skills",
        content: (
            <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
            </ul>
        ),
    },
    {
        title: "Experience",
        content: (
            <ul>
                <li>Front-end Developer at Acme Co.</li>
                <li>Back-end Developer at XYZ Inc.</li>
            </ul>
        ),
    },
    {
        title: "Education",
        content: (
            <ul>
                <li>B.S. in Production Enginee from UNESC</li>
                <li>M.S. in Engineering Management from University of Debrecen</li>

            </ul>

        ),
    },
];

const MyResume = () => {
    return <Resume sections={sections} />;
};

export default MyResume;
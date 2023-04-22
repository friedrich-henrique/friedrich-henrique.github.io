const ExperienceSection = ({ experience }) => {
    const activities = experience.description ? experience.description.split(".") : null
    return (
        <li className="bg-[#FF003C] rounded-lg shadow-md p-4 hover:shadow-lg my-5">
            <h3 className="font-bold">
                {experience.company}
            </h3>
            <p className="my-3 font-semibold">
                <span>
                    {experience.role}, {experience.period}
                </span>
            </p>
            {
                activities && activities.map((activity, index) => {
                    return (
                        <p key={index}>
                            {activity}
                        </p>
                    )
                })
            }
        </li>
    )
}


const ResumeSection = ({ title, experiences }) => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <ul>
                {experiences.map((experience, index) => (
                    <ExperienceSection key={index} experience={experience}/>
                ))}
            </ul>
        </div>
    );
};

const Resume = ({ sections }) => {
    return (
        <div className="px-4">
            <h1 className="text-3xl font-bold mb-6">Resume</h1>
            {sections.map((section, index) => (
                <ResumeSection key={index} title={section.title} experiences={section.experiences} />
            ))}
        </div>
    );
};

const sections = [
    {
        title: "Experience",
        experiences: [{
            company: "Logpiper kft",
            period: "2020 - Present",
            description: "Creating a new web platform software. Development and testing of an existing mobile app. Business decisions for the created company",
            role: "Co-Founder",
        },
        {
            company: "thyssenkrupp",
            period: "2019 - 2020",
            description: "Performed production data analysis reports. Created a new process routine for the product quality control process. Monitored production KPIs.",
            role: "Planning Analyst",
        },
        {
            company: "La Moda",
            period: "2017 - 2018",
            description: "Developed reports with production analysis. Data extraction and analysis using SAP, Excel (Pivot tables, charts, graphs, formulas, macro), and PowerPoint. Monitored and presented the main Supply Chain KPIs to the Board of Directors. Daily follow-up of the production priorities.",
            role: "Planning Analyst",
        }]
    },
    {
        title: "Education",
        experiences: [
            {
                company: "University of Debrecen",
                period: "2018 - 2020",
                description: null,
                role: "M.S. in Engineering Management",
            },
            {
                company: "UNESC",
                period: "2013 - 2017",
                description: null,
                role: "B.S. in Production Engineering",
            },
        ]
    },
    {
        title: "Awards",
        experiences: [
            {
                company: "University of Debrecen",
                period: "2020",
                description: "The State Examination Board awarded the prize for outstanding performance in the state exam and thesis development.",
                role: "Diploma Prize",
            },
            {
                company: "UNESC",
                period: "2014",
                description: "The Production Engineer course awarded me with this prize for the first position on the Engineering Knowledge Examination.",
                role: "Merit Award",
            },
        ]
    }

]

const MyResume = () => {
    return <Resume sections={sections} />;
};

export default MyResume;
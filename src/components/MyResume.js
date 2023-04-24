const ExperienceSection = ({ experience }) => {
    const activities = experience.description ? experience.description.split(".") : null
    return (
        <li className="bg-[#FF003C] rounded-lg shadow-md hover:shadow-lg">
            <div className="my-5 p-4">
                <h3 className="font-bold">
                    {experience.company}
                </h3>
                <div>

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
                    {
                        experience.skills && experience.skills.length > 0 &&
                        <div className="mt-4 mb-2">
                            {experience.skills.map((skill, index) => {
                                return (
                                    <span className="bg-black text-white rounded-lg py-1 px-2 text-sm font-semibold mr-2 my-2 hover:bg-white hover:text-[#FF003C]" key={index}>
                                        {skill}
                                    </span>
                                )
                            })}
                        </div>
                    }
                </div>
            </div>







        </li>
    )
}


const ResumeSection = ({ title, experiences }) => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <ol class="relative">
                {experiences.map((experience, index) => (
                    <ExperienceSection key={index} experience={experience} />
                ))}
            </ol>
        </div>
    );
};

const Resume = ({ sections }) => {
    return (
        <div className="px-4">
            <h1 className="text-3xl font-bold">Resume</h1>
            <div className="my-6">
                <p className='leading-loose'>
                    During my career I have worked in different areas, such as production, planning, and software development.
                    Additionally, my academical studies gave me a solid background in logical thinking which I even bring to live.
                </p>
                <p className='leading-loose'>
                    During the opportunities I had I always tried to learn as much as possible, and I am always looking for new challenges.
                </p>
                <p className='leading-loose'>
                    Bellow I list the main experiences I had during my career with an overview of the main responsibilities I had and the skills I could gain or improve.
                </p>
            </div>

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
            skills: ['PHP', 'Laravel', 'Vue', 'PostgreSQL', 'Docker', 'GCP', 'Git', 'DAML', 'Excel', 'Planning'],
            role: "Co-Founder",
        },
        {
            company: "thyssenkrupp",
            period: "2019 - 2020",
            description: "Performed production data analysis reports. Created a new process routine for the product quality control process. Monitored production KPIs.",
            skills: ['Python', 'Excel', 'Power Point', 'Data analysis', 'Planning', 'SQL'],
            role: "Planning Analyst",
        },
        {
            company: "La Moda",
            period: "2017 - 2018",
            description: "Developed reports with production analysis. Data extraction and analysis using SAP, Excel (Pivot tables, charts, graphs, formulas, macro), and PowerPoint. Monitored and presented the main Supply Chain KPIs to the Board of Directors. Daily follow-up of the production priorities.",
            skills: ['Excel', 'Power Point', 'Data analysis', 'Planning', 'SAP'],
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
                skills: ['Excel', 'Planning', 'Power Point', 'Lean', 'Six Sigma', 'Project Management', 'Data analysis'],
                role: "M.S. in Engineering Management",
            },
            {
                company: "UNESC",
                period: "2013 - 2017",
                description: null,
                skills: ['Excel', 'Planning', 'Power Point', 'Lean', 'Six Sigma', 'Locial thinking', 'Leadership'],
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
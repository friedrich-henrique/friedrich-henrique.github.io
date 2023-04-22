import { getRepos } from "../utils/github"
import { useEffect, useState } from "react"

export default function Projects() {
    const [repositories, setRepositories] = useState([]);
    const icons = {
        PHP: <i className="devicon-php-plain"></i>,
        JavaScript: <i className="devicon-javascript-plain"></i>,
        Python: <i className="devicon-python-plain"></i>,
    }
    useEffect(() => {
        getRepos("friedrich-henrique")
            .then((repos) => {
                setRepositories(repos);
            })
            .catch((error) => {
                console.error("Error fetching repositories:", error);
            });
    }, []);
    
    return (
        <div className="px-4">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {repositories.map((repo, index) => {
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg"
                        >
                            <h2 className="text-xl text-black font-bold mb-2">{repo.name}</h2>
                            <p className="text-gray-700 text-base mb-4">{repo.description}</p>
                            {repo.language &&
                                <p className="text-black">
                                    <span className="mr-2">{icons[repo.language]}</span>
                                    <span className="text-gray-700 text-base mb-4 ml-2">
                                        {repo.language}
                                    </span>
                                </p>
                            }

                            
                            <div className="flex justify-end">
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    className="text-[#FF003C] hover:text-blue-700"
                                >
                                    View on GitHub &rarr;
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
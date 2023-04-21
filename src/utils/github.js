import { Octokit } from "octokit"

const octokit = new Octokit({
    auth: process.env.TOKEN
  });

  export async function getRepos(username) {
    const result = await octokit.request("GET /users/{username}/repos", {
        username: username,
      });
      return result.data; 
  }


import { Octokit } from "octokit"

const octokit = new Octokit({
    auth: process.env.TOKEN
  });

export async function getRepositoryInfo(owner, repo) {
    try {
        const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
            owner: owner,
            repo: repo,
          });
          return result.data;      
      } catch (error) {
        console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
      }
  }


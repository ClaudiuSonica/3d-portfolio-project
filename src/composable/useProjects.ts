// @ts-ignore
import {onMounted, ref} from 'vue';
// @ts-ignore
import axios from 'axios';

// 🔥 GitHub Username (Replace with yours)
const GITHUB_USERNAME = "ClaudiuSonica";

export function useProjects() {
    const githubProjects = ref([]);

    // 🔥 Fetch GitHub Projects
    const fetchGitHubProjects = async () => {
        try {
            const response = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);

            githubProjects.value = response.data
                .filter((repo: { fork: any; }) => !repo.fork) // Exclude forks
                .map((repo: { name: string; description: any; topics: any; homepage: any; html_url: any; }) => ({
                    title: repo.name.replace(/-/g, " "),
                    description: repo.description || "No description available.",
                    tech: repo.topics || [],
                    image: "/projects/default-github.png",
                    live: repo.homepage || null,
                    repo: repo.html_url
                }));
        } catch (error) {
            console.error("Failed to fetch GitHub projects:", error);
        }
    };

    // Run function on mount
    onMounted(fetchGitHubProjects);

    return {githubProjects};
}

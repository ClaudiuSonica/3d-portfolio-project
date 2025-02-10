// @ts-ignore
import {onMounted, ref} from "vue";
// @ts-ignore
import axios from "axios";

// 🔥 GitHub Credentials
const GITHUB_USERNAME: string = "ClaudiuSonica";
// @ts-ignore
const SCREENSHOT_API_KEY = import.meta.env.VITE_SCREENSHOT_API_KEY || ""; // ✅ Get API Key from .env
const GITHUB_API_URL = `https://api.github.com/search/repositories?q=topic:portfolio+user:${GITHUB_USERNAME}`;

export function useProjects() {
    const githubProjects = ref([]);

    // ✅ Function to Fetch Screenshot
    const getScreenshot = async (url: string): Promise<string | null> => {
        try {
            const response = await axios.get(`https://shot.screenshotapi.net/screenshot`, {
                params: {
                    token: SCREENSHOT_API_KEY,
                    url,
                    output: "json",
                    file_type: "png"
                }
            });

            return response.data.screenshot || null;
        } catch (error) {
            console.error("Failed to fetch screenshot for:", url, error);
            return null;
        }
    };

    // 🔥 Fetch GitHub Projects
    const fetchGitHubProjects = async () => {
        try {
            const response = await axios.get(GITHUB_API_URL);

            githubProjects.value = await Promise.all(
                response.data.items
                    .filter((repo: { fork: boolean }) => !repo.fork) // Exclude forks
                    .map(async (repo: {
                        name: string;
                        description: string;
                        topics: string[];
                        homepage: string;
                        html_url: string
                    }) => {
                        // ✅ Default Image: OpenGraph
                        let image = `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`;

                        // ✅ If homepage exists, try using Screenshot API
                        if (repo.homepage && SCREENSHOT_API_KEY) {
                            const screenshot = await getScreenshot(repo.homepage);
                            if (screenshot) {
                                image = screenshot; // ✅ Update image if screenshot is available
                            }
                        }

                        return {
                            title: repo.name.replace(/-/g, " "),
                            description: repo.description || "No description available.",
                            tech: repo.topics || [],
                            image, // ✅ Uses Screenshot API first, falls back to OpenGraph
                            live: repo.homepage || null,
                            repo: repo.html_url
                        };
                    })
            );
        } catch (error) {
            console.error("Failed to fetch GitHub projects:", error);
        }
    };

    // Run function on mount
    onMounted(fetchGitHubProjects);

    return {githubProjects};
}

// @ts-ignore
import {onMounted, onUnmounted, ref} from "vue";
// @ts-ignore
import axios from "axios";

// 🔥 GitHub Credentials
const GITHUB_USERNAME: string = "ClaudiuSonica";
// @ts-ignore
const GITHUB_API_URL = `https://api.github.com/search/repositories?q=topic:portfolio+user:${GITHUB_USERNAME}`;


export function useProjects() {
    const githubProjects = ref([]);

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
                        html_url: string;
                    }) => {
                        // ✅ Default Image: OpenGraph
                        let image = `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`;

                        const formatTitle = (title: string): string => {
                            return title
                                .replace(/[-_]/g, " ")      // Replace hyphens or underscores with spaces
                                .replace(/\s+/g, " ")       // Remove duplicate spaces if any
                                .split(" ")                // Split into words
                                .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
                                .join(" ");
                        };

                        return {
                            title: formatTitle(repo.name),
                            description: repo.description || "No description available.",
                            tech: (repo.topics || []).filter((topic: string) => topic.toLowerCase() !== "portfolio"),
                            image, // ✅ Uses Screenshot API first, falls back to OpenGraph
                            live: repo.homepage || null,
                            repo: repo.html_url
                        };
                    })
            );
        } catch (error) {
            // Check if the error is due to a canceled request
            if (axios.isCancel(error)) {
                console.log("GitHub projects request canceled");
            } else {
                console.error("Failed to fetch GitHub projects:", error);
            }
        }
    };

    // Run function on mount and clean up on unmount to cancel pending requests
    onMounted(fetchGitHubProjects);

    return {githubProjects};
}

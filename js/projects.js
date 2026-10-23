async function getGithubUser() {
    try {
        const response = await fetch("https://api.github.com/users/morenorodri/repos");
        if (!response.ok) throw new Error("kunde inte hämta användare");
        const data = await response.json();

    } catch (error) {
        console.error("Ett fel uppstod:", error);
    }
}
getGithubUser()
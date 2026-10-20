export async function fetchGames() {
    try {
        // 1. Fetch the list of file paths from the manifest
        const manifestResponse = await fetch('./data/games-manifest.json');
        if (!manifestResponse.ok) throw new Error("Could not load games manifest");

        const filePaths = await manifestResponse.json();

        // 2. Fetch all individual game JSON files in parallel
        const gamePromises = filePaths.map(async (path) => {
            const res = await fetch(path);
            if (!res.ok) throw new Error(`Failed to load game file: ${path}`);
            return await res.json();
        });

        // 3. Wait for all requests to finish and return the array of games
        const games = await Promise.all(gamePromises);
        return games;

    } catch (error) {
        console.error("Error fetching games:", error);
        return []; // Return empty array if something fails
    }
}

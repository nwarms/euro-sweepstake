import { countries } from '@/Data/Countries';
export function createId(competitors:Competitor[]): number {
    let id = competitors.length;
    let found = false;
    do {
        const anyFound = competitors.some(value => value.id === id);
        if (anyFound) {
            id++;
        } else {
            found = true;
        }
    } while (!found)
    return id;
}

export function assignTeamsToCompetitors(competitors:Competitor[], countries:Country[]): Map<Country, Competitor[]> {
    const teamCompetitorMap = new Map<Country, Competitor[]>();

    const shuffledCompetitors = shuffleArray([...competitors]);
    const shuffledTeams = shuffleArray([...countries]);


    const numTeams = shuffledTeams.length;
    const numCompetitors = shuffledCompetitors.length;
    const teamsPerCompetitor = Math.ceil(numTeams / numCompetitors);

    let currentTeamIndex = 0;
    shuffledCompetitors.forEach(competitor => {
        for (let i = 0; i < teamsPerCompetitor; i++) {
            const teamName = shuffledTeams[currentTeamIndex];
            if (!teamCompetitorMap.has(teamName)) {
                teamCompetitorMap.set(teamName, []);
            }
            teamCompetitorMap.get(teamName)?.push(competitor);
            currentTeamIndex = (currentTeamIndex + 1) % numTeams;
        }
    });

    return teamCompetitorMap;
}

function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
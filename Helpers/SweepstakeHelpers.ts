import { Team, User } from '@prisma/client';
import prisma from '@/lib/prisma';
export function createId(competitors: User[]): number {
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

export function assignTeamsToUsers(users: User[], teams: Team[]): Map<Team, User[]> {
    const teamUserMap = new Map<Team, User[]>();

    const shuffledUsers = shuffleArray([...users]);
    const shuffledTeams = shuffleArray([...teams]);

    const numTeams = shuffledTeams.length;
    const numUsers = shuffledUsers.length;
    const teamsPerUser = Math.ceil(numTeams / numUsers);

    let currentTeamIndex = 0;
    shuffledUsers.forEach(user => {
        for (let i = 0; i < teamsPerUser; i++) {
            const teamName = shuffledTeams[currentTeamIndex];
            if (!teamUserMap.has(teamName)) {
                teamUserMap.set(teamName, []);
            }
            teamUserMap.get(teamName)?.push(user);
            currentTeamIndex = (currentTeamIndex + 1) % numTeams;
        }
    });

    return teamUserMap;
}

export async function writeUserMatches(userTeamMap: Map<Team, User[]>, deleteExisting: boolean = false): Promise<User[]> {
    const currentMatches = await prisma.teamAssigned.findMany();
    if (currentMatches.length && deleteExisting) {
        await prisma.teamAssigned.deleteMany();
    }
    if (currentMatches.length && !deleteExisting) {
        return [];
    }
    const usersUpdated:User[] = [];
    for (let entry of userTeamMap) {
        const team = entry[0];
        const users = entry[1];
        users.map(async user => {
            usersUpdated.push((await WriteUserMatch(user, team)));
        });
    }
    return usersUpdated;
}

export async function writeSeedUserMatches(userTeamMap: Map<Team, string>, deleteExisting: boolean = false): Promise<User[]> {
    const currentMatches = await prisma.teamAssigned.findMany();
    if (currentMatches.length && deleteExisting) {
        await prisma.teamAssigned.deleteMany();
    }
    if (currentMatches.length && !deleteExisting) {
        return [];
    }
    const usersUpdated:User[] = [];
    for (let entry of userTeamMap) {
        const team = entry[0];
        const user = entry[1];
        const dbTeam = await prisma.team.findFirstOrThrow({where:{name:team.name}});
        const dbuser = await prisma.user.findFirstOrThrow({where:{username:user}});
        usersUpdated.push((await WriteUserMatch(dbuser, dbTeam)));
    }
    return usersUpdated;
}

export async function WriteUserMatch(user:User, team:Team){
    return prisma.user.update(
        {
            where: { id: user.id },
            data: {
                teamsAssigned: {
                    create: {
                        team_id: team.id,
                    }
                }
            }
        }
    )
}

function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
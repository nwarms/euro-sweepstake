import { MatchFull, TeamWithFullMatches } from "@/Types/prismaExtendedTypes";
import { Match, Team } from "@prisma/client";

export const getAllMatchesForTeam = (team: TeamWithFullMatches): MatchFull[] => {
    return team.homeMatches.concat(team.awayMatches);
}

export const sortMatches = (matches: MatchFull[]): MatchFull[] => {
    return matches.sort((a: MatchFull, b: MatchFull) => new Date(a.matchDate).valueOf() - new Date(b.matchDate).valueOf());
}
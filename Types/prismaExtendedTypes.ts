import { Prisma } from '@prisma/client'
export type MatchWithTeams = Prisma.MatchGetPayload<{ include: { homeTeam: true, awayTeam: true } }>;
export type MatchWithStage = Prisma.MatchGetPayload<{ include: { stage: true } }>;
export type MatchFull = MatchWithStage & MatchWithTeams;

export type TeamWithMatches = Prisma.TeamGetPayload<{ include: { homeMatches: true, awayMatches: true } }>;
export type TeamWithFullMatches = Prisma.TeamGetPayload<{
    include: {
        homeMatches: {
            include: {
                homeTeam: true,
                awayTeam: true,
                stage: true
            }
        },
        awayMatches: {
            include: {
                homeTeam: true,
                awayTeam: true,
                stage: true
            }
        }
    }
}>;

export type TeamAssignedFull = Prisma.TeamAssignedGetPayload<{ include: { user: true, team: true } }>;
export const GroupWithTeamsIncludes = {
    teams: {
        include: {
            homeMatches: {
                include: {
                    homeTeam: true,
                    awayTeam: true,
                    stage: true
                }
            },
            awayMatches: {
                include: {
                    homeTeam: true,
                    awayTeam: true,
                    stage: true
                }
            }
        }
    }
}
export type GroupWithTeams = Prisma.GroupGetPayload<{
    include: {
        teams: {
            include: {
                homeMatches: {
                    include: {
                        homeTeam: true,
                        awayTeam: true,
                        stage: true
                    }
                },
                awayMatches: {
                    include: {
                        homeTeam: true,
                        awayTeam: true,
                        stage: true
                    }
                }
            }
        }
    }
}>;
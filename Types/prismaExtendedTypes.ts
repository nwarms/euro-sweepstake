import {Prisma} from '@prisma/client'
export type MatchWithTeams = Prisma.MatchGetPayload<{include:{homeTeam:true, awayTeam:true}}>;
export type MatchWithStage = Prisma.MatchGetPayload<{include:{stage:true}}>;
export type MatchFull = MatchWithStage & MatchWithTeams;
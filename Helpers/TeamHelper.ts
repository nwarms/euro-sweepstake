import { TeamWithFullMatches } from "@/Types/prismaExtendedTypes";
import { getAllMatchesForTeam } from "./MatchHelper";
import { Match, Stage } from "@prisma/client";

export type TeamScore = {
    points:number,
    wins:number;
    draws:number;
    losses:number;
    goalsFor:number;
    goalsAgainst:number;
    goalDifference:number;
}

const pointsForWin = 3;
const pointsForDraw = 1;

export const calculateScoreForTeam = (team:TeamWithFullMatches, filterToStage?:Stage):TeamScore => {
    const {homeMatches, awayMatches} = team;
    let matches = getAllMatchesForTeam(team).filter(matchHasScore);
    let stageFilter = (match:Match) => true;
    if(filterToStage){
        stageFilter = (match) => match.stageId === filterToStage.id;
    }
    const matchFilter = (match:Match) => matchHasScore(match) && stageFilter(match);
    const wins = homeMatches.filter(matchFilter).filter(({homeTeamScore, awayTeamScore}) => homeTeamScore > awayTeamScore).length + awayMatches.filter(matchFilter).filter(({homeTeamScore, awayTeamScore}) => homeTeamScore < awayTeamScore).length
    const draws = homeMatches.filter(matchFilter).filter(({homeTeamScore, awayTeamScore}) => homeTeamScore === awayTeamScore).length + awayMatches.filter(matchFilter).filter(({homeTeamScore, awayTeamScore}) => homeTeamScore === awayTeamScore).length
    const losses = homeMatches.filter(matchFilter).filter(({homeTeamScore, awayTeamScore}) => homeTeamScore < awayTeamScore).length + awayMatches.filter(matchFilter).filter(({homeTeamScore, awayTeamScore}) => homeTeamScore > awayTeamScore).length

    const goalsFor = homeMatches.filter(matchFilter).reduce<number>((acc, match) => acc+match.homeTeamScore,0) + awayMatches.filter(matchFilter).reduce<number>((acc, match) => acc+match.awayTeamScore,0);
    const goalsAgainst = homeMatches.filter(matchFilter).reduce<number>((acc, match) => acc+match.awayTeamScore,0) + awayMatches.filter(matchFilter).reduce<number>((acc, match) => acc+match.homeTeamScore,0);
    const goalDifference = goalsFor - goalsAgainst;
    const points = (wins * pointsForWin) + (draws * pointsForDraw);
    return {
        points,
        wins,
        draws,
        losses,
        goalsFor,
        goalsAgainst,
        goalDifference
    }
}

const matchHasScore = (match: Match) => {
    return match.homeTeamScore >= 0 && match.awayTeamScore >= 0
}
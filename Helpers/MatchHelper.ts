type Match = {
    id: number;
    matchDate: Date;
    homeTeamScore: number;
    awayTeamScore: number;
    location?: string;
    homeTeamId: number;
    awayTeamId: number;
    stageId: number;
};

type Team = {
    id: number;
    name: string;
};

type Stage = {
    id: number;
    name: string;
};

const stagesList = [
    { id: 1, name: "Group" },
    { id: 2, name: "Round of 16" },
    { id: 3, name: "Quarter Final" },
    { id: 4, name: "Semi Final" },
    { id: 6, name: "Final" }
];

const teamsList = [
    { id: 1, name: "Albania" },
    { id: 2, name: "Austria" },
    { id: 3, name: "Belgium" },
    { id: 4, name: "Croatia" },
    { id: 5, name: "Czechia" },
    { id: 6, name: "Denmark" },
    { id: 7, name: "England" },
    { id: 8, name: "France" },
    { id: 9, name: "Georgia" },
    { id: 10, name: "Germany" },
    { id: 11, name: "Hungary" },
    { id: 12, name: "Italy" },
    { id: 13, name: "Netherlands" },
    { id: 14, name: "Poland" },
    { id: 15, name: "Portugal" },
    { id: 16, name: "Romania" },
    { id: 17, name: "Scotland" },
    { id: 18, name: "Serbia" },
    { id: 19, name: "Slovakia" },
    { id: 20, name: "Slovenia" },
    { id: 21, name: "Spain" },
    { id: 22, name: "Switzerland" },
    { id: 23, name: "Türkiye" },
    { id: 24, name: "Ukraine" }
];

const inputString = `Group stage 
  14 June
  A: Germany 5-1 Scotland (Munich, 21:00)
  15 June
  A: Hungary 1-3 Switzerland (Cologne, 15:00)
  B: Spain 3-0 Croatia (Berlin, 18:00)
  B: Italy 2-1 Albania (Dortmund, 21:00)
  16 June
  D: Poland vs Netherlands (Hamburg, 15:00)
  C: Slovenia vs Denmark (Stuttgart, 18:00)
  C: Serbia vs England (Gelsenkirchen, 21:00)
  17 June
  E: Romania vs Ukraine (Munich, 15:00)
  E: Belgium vs Slovakia (Frankfurt, 18:00)
  D: Austria vs France (Düsseldorf, 21:00)
  18 June
  F: Türkiye vs Georgia (Dortmund, 18:00)
  F: Portugal vs Czechia (Leipzig, 21:00)
  19 June
  B: Croatia vs Albania (Hamburg, 15:00)
  A: Germany vs Hungary (Stuttgart, 18:00)
  A: Scotland vs Switzerland (Cologne, 21:00)
  20 June
  C: Slovenia vs Serbia (Munich, 15:00)
  C: Denmark vs England (Frankfurt, 18:00)
  B: Spain vs Italy (Gelsenkirchen, 21:00)
  21 June
  E: Slovakia vs Ukraine (Düsseldorf, 15:00)
  D: Poland vs Austria (Berlin, 18:00)
  D: Netherlands vs France (Leipzig, 21:00)
  22 June
  F: Georgia vs Czechia (Hamburg, 15:00)
  F: Türkiye vs Portugal (Dortmund, 18:00)
  E: Belgium vs Romania (Cologne, 21:00)
  23 June
  A: Switzerland vs Germany (Frankfurt, 21:00)
  A: Scotland vs Hungary (Stuttgart, 21:00)
  24 June
  B: Croatia vs Italy (Leipzig, 21:00)
  B: Albania vs Spain (Düsseldorf, 21:00)
  25 June
  D: Netherlands vs Austria (Berlin, 18:00)
  D: France vs Poland (Dortmund, 18:00)
  C: England vs Slovenia (Cologne, 21:00)
  C: Denmark vs Serbia (Munich, 21:00)
  26 June
  E: Slovakia vs Romania (Frankfurt, 18:00)
  E: Ukraine vs Belgium (Stuttgart, 18:00)
  F: Czechia vs Türkiye (Hamburg, 21:00)
  F: Georgia vs Portugal (Gelsenkirchen, 21:00)
  Round of 16
  29 June
  38 2A vs 2B (Berlin, 18:00)
  37 1A vs 2C (Dortmund, 21:00)
  30 June
  40 1C vs 3D/E/F (Gelsenkirchen, 18:00)
  39 1B vs 3A/D/E/F (Cologne, 21:00)
  1 July
  42 2D vs 2E (Düsseldorf, 18:00)
  41 1F vs 3A/B/C (Frankfurt, 21:00)
  2 July
  43 1E vs 3A/B/C/D (Munich, 18:00)
  44 1D vs 2F (Leipzig, 21:00)
  Quarter Final
  5 July
  45 W39 vs W37 (Stuttgart, 18:00)
  46 W41 vs W42 (Hamburg, 21:00)
  6 July
  48 W40 vs W38 (Düsseldorf, 18:00)
  47 W43 vs W44 (Berlin, 21:00)
  Semi Final
  9 July
  49 W45 vs W46 (Munich, 21:00)
  10 July
  50 W47 vs W48 (Dortmund, 21:00)
  Final
  14 July
  51 TW49 vs W50 (Berlin, 21:00)`;

let matchId = 1;
const matches: Match[] = [];

const parseDate = (day: string, month: string, time: string): Date => {
    const monthMap: Record<string, number> = {
        'June': 5,
        'July': 6
    };
    const date = new Date(2024, monthMap[month], parseInt(day), parseInt(time.split(':')[0]), parseInt(time.split(':')[1]));
    return date;
};

const getTeamId = (name: string): number => {
    const team = teamsList.find(team => team.name.toLowerCase() === name.toLowerCase());
    if (!team) {
        throw new Error(`Team not found: ${name}`);
    }
    return team.id;
};

const getStageId = (name: string): number => {
    let stageName = name;
    if (name.startsWith('Group')) {
        stageName = 'Group';
    }
    const stage = stagesList.find(stage => stage.name.toLowerCase() === stageName.toLowerCase());
    if (!stage) {
        throw new Error(`Stage not found: ${name}`);
    }
    return stage.id;
};

// B: Croatia vs Albania (Hamburg, 15:00)
const processMatch = (stage: string, day: string, month: string, matchString: string) => {
    const [teamsPart, locationPart] = matchString.split('(');
    const [group, homeTeam, vs, awayTeam] = teamsPart.split(' ');
    const [location, time] = locationPart.split(',');
    const homeTeamId = getTeamId(homeTeam);
    const awayTeamId = getTeamId(awayTeam);
    const matchDate = parseDate(day, month, time.split(')')[0].trim());

    matches.push({
        id: matchId++,
        matchDate,
        homeTeamScore: -1, // Placeholder score
        awayTeamScore: -1, // Placeholder score
        location: location.trim(),
        homeTeamId,
        awayTeamId,
        stageId: getStageId(stage)
    });
};

//  A: Germany 5-1 Scotland (Munich, 21:00)
const processMatchWithScore = (stage: string, day: string, month: string, matchString: string) => {
    const [teamsPart, locationPart] = matchString.split('(');
    const [group, homeTeam, score, awayTeam] = teamsPart.split(' ');
    const [homeTeamScore, awayTeamScore] = score.split('-');
    const [location, time] = locationPart.split(',');

    const homeTeamId = getTeamId(homeTeam.trim());
    const awayTeamId = getTeamId(awayTeam.trim());
    const matchDate = parseDate(day, month, time.split(')')[0].trim());

    matches.push({
        id: matchId++,
        matchDate,
        homeTeamScore: parseInt(homeTeamScore),
        awayTeamScore: parseInt(awayTeamScore),
        location: location.trim(),
        homeTeamId,
        awayTeamId,
        stageId: getStageId(stage)
    });
};
// 38 2A vs 2B (Berlin, 18:00)
const processLaterMatch = (stage: string, day: string, month: string, matchString: string) => {
    const [teamsPart, locationPart] = matchString.split('(');
    const [location, time] = locationPart.split(',');
    const matchDate = parseDate(day, month, time.split(')')[0].trim());
 
    matches.push({
        id: matchId++,
        matchDate,
        homeTeamScore: -1, // Placeholder score
        awayTeamScore: -1, // Placeholder score
        location: location.trim(),
        homeTeamId: 0, // Placeholder team ID
        awayTeamId: 0, // Placeholder team ID
        stageId: getStageId(stage)
    });
};

const processInput = (input: string) => {
    const lines = input.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    let currentStage = '';
    let currentDay = '';
    let currentMonth = '';

    for (const line of lines) {
        console.log(line)
        if (line.match(/^\d+ \w+ vs \w+/)) {
            processLaterMatch(currentStage, currentDay, currentMonth, line);
        } else if (line.match(/\d+-\d+/)) {
            processMatchWithScore(currentStage, currentDay, currentMonth, line);
        } else if (line.match(/vs/)) {
            processMatch(currentStage, currentDay, currentMonth, line);
        } else if (line.match(/^\d{1,2} \w+$/)) {
            [currentDay, currentMonth] = line.split(' ');
        } else {
            currentStage = line.trim();
        }
    }
};

processInput(inputString);

console.log(matches);

import { Team, TeamAssigned, User } from "@prisma/client";

const teamsAssigned: TeamAssigned[] = [
    { id: 1, team_id: 10, user_id: 10 },
    { id: 2, team_id: 22, user_id: 2 },
    { id: 3, team_id: 21, user_id: 12 },
    { id: 4, team_id: 12, user_id: 11 },
    { id: 5, team_id: 7, user_id: 3 },
    { id: 6, team_id: 6, user_id: 13 },
    { id: 7, team_id: 8, user_id: 9 },
    { id: 8, team_id: 13, user_id: 8 },
    { id: 9, team_id: 3, user_id: 4 },
    { id: 10, team_id: 24, user_id: 5 },
    { id: 11, team_id: 15, user_id: 7 },
    { id: 12, team_id: 23, user_id: 1 },
    { id: 13, team_id: 17, user_id: 5 },
    { id: 14, team_id: 17, user_id: 6 },
    { id: 15, team_id: 11, user_id: 8 },
    { id: 16, team_id: 4, user_id: 13 },
    { id: 17, team_id: 1, user_id: 11 },
    { id: 18, team_id: 20, user_id: 10 },
    { id: 19, team_id: 18, user_id: 1 },
    { id: 20, team_id: 14, user_id: 12 },
    { id: 21, team_id: 2, user_id: 2 },
    { id: 22, team_id: 19, user_id: 9 },
    { id: 23, team_id: 16, user_id: 7 },
    { id: 24, team_id: 5, user_id: 4 },
    { id: 25, team_id: 9, user_id: 3 },
]

export default teamsAssigned;
import { Team, TeamAssigned, User } from "@prisma/client";

const teamsAssigned: TeamAssigned[] = [
    { id: 1, teamId: 10, userId: 10 },
    { id: 2, teamId: 22, userId: 2 },
    { id: 3, teamId: 21, userId: 12 },
    { id: 4, teamId: 12, userId: 11 },
    { id: 5, teamId: 7, userId: 3 },
    { id: 6, teamId: 6, userId: 13 },
    { id: 7, teamId: 8, userId: 9 },
    { id: 8, teamId: 13, userId: 8 },
    { id: 9, teamId: 3, userId: 4 },
    { id: 10, teamId: 24, userId: 5 },
    { id: 11, teamId: 15, userId: 7 },
    { id: 12, teamId: 23, userId: 1 },
    { id: 13, teamId: 17, userId: 5 },
    { id: 14, teamId: 17, userId: 6 },
    { id: 15, teamId: 11, userId: 8 },
    { id: 16, teamId: 4, userId: 13 },
    { id: 17, teamId: 1, userId: 11 },
    { id: 18, teamId: 20, userId: 10 },
    { id: 19, teamId: 18, userId: 1 },
    { id: 20, teamId: 14, userId: 12 },
    { id: 21, teamId: 2, userId: 2 },
    { id: 22, teamId: 19, userId: 9 },
    { id: 23, teamId: 16, userId: 7 },
    { id: 24, teamId: 5, userId: 4 },
    { id: 25, teamId: 9, userId: 3 },
]

export default teamsAssigned;
import { Group, Stage, Team, TeamAssigned, User, Match } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import teams from '@/Data/Teams';
import Users from '@/Data/Users';
import groups from '@/Data/Groups';
import teamsAssigned from '@/Data/TeamsAssigned';
import stages from '@/Data/Stages';
import matches from '@/Data/Matches';
const prismaClient = new PrismaClient()
const main = async () => {
    const groupUpserts = groups.map((group) => prismaClient.group.upsert({where:{id:group.id}, create:group, update:group}));
    const teamUpserts = teams.map((team) => prismaClient.team.upsert({where:{id:team.id}, create:team, update:team}));
    const userUpserts = Users.map((user) => prismaClient.user.upsert({where:{id:user.id}, create:user, update:user}));
    const TeamAssignedUpserts = teamsAssigned.map((teamAssigned) => prismaClient.teamAssigned.upsert({where:{id:teamAssigned.id}, create:teamAssigned, update:teamAssigned}));
    const stageUpserts = stages.map((stage) => prismaClient.stage.upsert({where:{id:stage.id}, create:stage, update:stage}));
    const matchUpserts = matches.map((match) => prismaClient.match.upsert({where:{id:match.id}, create:match, update:match}));
    const groupResults = await Promise.all<Group>(groupUpserts);
    console.log("Groups updated %d", groupResults.length);
    const teamResults = await Promise.all<Team>(teamUpserts);
    console.log("Teams updated %d", teamResults.length);
    const userResults = await Promise.all<User>(userUpserts);
    console.log("Users updated %d", userResults.length);
    const teamAssignedResults = await Promise.all<TeamAssigned>(TeamAssignedUpserts);
    console.log("TeamsAssigned updated %d", teamAssignedResults.length);
    const stageResults = await Promise.all<Stage>(stageUpserts);
    console.log("Stages updated %d", stageResults.length);
    const matchResults = await Promise.all<Match>(matchUpserts);
    console.log("Matches updated %d", matchResults.length);

}

main()
    .then(async () => {
        console.log("Database seeded successfully!")
        await prismaClient.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prismaClient.$disconnect()
        process.exit(1)
    })
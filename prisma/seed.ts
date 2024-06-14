import { Prisma, PrismaClient } from '@prisma/client';
import { teams } from '@/Data/Teams';
import { Users } from '@/Data/Users';
import { assignTeamsToUsers, writeUserMatches } from '@/Helpers/SweepstakeHelpers';
const prismaClient = new PrismaClient()
const main = async () => {
    const teamsData = await prismaClient.team.createMany({
        data: teams.map<Prisma.TeamCreateManyInput>((team) => ({ name: team.name, icon_url: team.icon }))
    });
    console.log('Teams updated %d', teamsData.count);
    const users = await prismaClient.user.createMany({
        data: Users.map<Prisma.UserCreateManyInput>((user) => ({ username: user }))
    });
    console.log('Users updated %d', users.count);
    const matches = await writeUserMatches(assignTeamsToUsers(await prismaClient.user.findMany(), await prismaClient.team.findMany()), true);
    console.log('Matches updated %d', matches.length)
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
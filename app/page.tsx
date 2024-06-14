import Button from "@/Components/Button";
import UserComponent from "@/Components/UserComponent";
import TeamComponent from "@/Components/TeamComponent";
import Grid from "@/Components/Grid";
import { writeUserMatches, assignTeamsToUsers } from "@/Helpers/SweepstakeHelpers";
import prisma from "@/lib/prisma";

export default async function Home() {
  const users = await prisma.user.findMany();
  const teams = await prisma.team.findMany();
  const matches = await prisma.teamAssigned.findMany();
  return (
    <main className="flex flex-col">
      <div className='flex flex-row gap-5'>
        <div className='w-30% flex flex-col'>
          <div>
            <h2>Countries</h2>
            <ul>
              <Grid>
                {teams.map(team => {
                  return (
                    <li key={team.name}><TeamComponent team={team} /></li>
                  )
                })}
              </Grid>
            </ul>
          </div>
          <div>
            <h2>
              Users
            </h2>
            <Grid>
              {users.map(item => {
                return <UserComponent key={item.id} user={item} />
              })}
            </Grid>
          </div>
        </div>
        <div>
          <h2>
            Drawn list
          </h2>
          <Grid>
            {matches.map(item => {
              return <div key={item.id} className=" hover:bg-slate-600 p-2">
                <UserComponent user={users.find(user => user.id === item.user_id)} />
                <TeamComponent team={teams.find(team => team.id === item.team_id)} />
              </div>
            })}
          </Grid>
        </div>
      </div>
    </main>
  );
}

import UserComponent from "@/Components/UserComponent";
import TeamComponent from "@/Components/TeamComponent";
import prisma from "@/lib/prisma";

export default async function Home() {
  const matches = await prisma.teamAssigned.findMany({include:{team:true, user:true}});
  return (
    <main className="flex flex-col">
      <div className='flex flex-row gap-5'>
        <div>
          <h2>
            Drawn list
          </h2>
          <div className="grid grid-cols-4 md:grid-cols-8">
            {matches.map(item => {
              return <div key={item.id} className="p-2">
                <UserComponent user={item.user} />
                <TeamComponent team={item.team} />
              </div>
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

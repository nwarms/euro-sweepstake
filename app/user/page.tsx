import Grid from "@/Components/Grid";
import TeamComponent from "@/Components/TeamComponent";
import UserComponent from "@/Components/UserComponent";
import Link from "next/link";

export default async function Page() {
    const user = await prisma.user.findMany({include:{
        teamsAssigned:true,
        
    }});
    return (
        <div><h2>Users</h2>
            <ul>
                <Grid>
                    {user.map(user => {
                        return (
                            <Link href={`/user/${user.id}`} key={user.id}><UserComponent user={user} /></Link>
                        )
                    })}
                </Grid>
            </ul></div>
    );
}
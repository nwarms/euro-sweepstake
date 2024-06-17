import Grid from "@/Components/Grid";
import TeamComponent from "@/Components/TeamComponent";

export default async function Page() {
    const teams = await prisma.team.findMany();
    return (
        <div><h2>Teams</h2>
            <ul>
                <Grid>
                    {teams.map(team => {
                        return (
                            <li key={team.name}><TeamComponent team={team} /></li>
                        )
                    })}
                </Grid>
            </ul></div>
    );
}
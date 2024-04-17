'use client';
import React, { useState } from 'react'
import Grid from './Grid';
import Country from './Country';
import { countries } from "@/Data/Countries";
import CompetitorInput from './CompetitorInput';
import Competitor from './Competitor';
import Button from './Button';
import { assignTeamsToCompetitors, createId } from '@/Helpers/SweepstakeHelpers';

type Props = {}

export default function Sweepstake({ }: Props) {
    const [competitors, setCompetitors] = useState<Competitor[]>([]);
    const [drawnList, setDrawnList] = useState<Map<Country, Competitor[]>>(new Map<Country, Competitor[]>());

    const addCompetitor = (competitor: string) => {
        const id = createId(competitors);
        setCompetitors([...competitors, { name: competitor, id }])
    }
    function removeCompetitor(id: number): void {
        const filteredCompetitors = competitors.filter(value => value.id !== id);
        setCompetitors(filteredCompetitors);
    }

    function drawNames(): void {
        setDrawnList(assignTeamsToCompetitors(competitors, countries));
    }
    
    return (<>
        <h1>Euro 2024 Sweepstake</h1>
        <Button onClick={drawNames}>Draw</Button>
        <div className='flex flex-row gap-5'>
            <div className='w-50%'>
                <h2>Countries</h2>
                <ul>
                    <Grid>
                        {countries.map(country => {
                            return (
                                <li key={country.name}><Country country={country} /></li>
                            )
                        })}
                    </Grid>
                </ul>
            </div>
            <div>
                <h2>
                    Competitors
                </h2>
                <CompetitorInput submitCompetitor={addCompetitor} />
                <div className='flex flex-col overflow-auto max-h-80 gap-2'>
                    {competitors.map(item => {
                        return <Competitor key={item.id} competitor={item} canRemove={true} removeCompetitor={removeCompetitor} />
                    })}
                </div>
            </div>
            <div>
                <h2>
                    Drawn list
                </h2>
                <Grid>
                    {[...drawnList.keys()].map(key =>
                        <div key={key.name}>
                            <Country country={key} />
                            {drawnList.get(key)?.map(value => <Competitor key={value.id} competitor={value} canRemove={false} />)}
                        </div>
                    )}
                </Grid>
            </div>
        </div>
    </>
    )
}
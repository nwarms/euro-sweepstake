import React from 'react'
import Button from './Button';

type Props = {
    competitor: Competitor;
    canRemove: boolean;
    removeCompetitor?: (id: number) => void
}

export default function Competitor({ competitor, canRemove, removeCompetitor }: Props) {
    return (
        <div key={competitor.id} className='flex justify-between'>
            {competitor.name}<span className='italic text-gray-200'>{competitor.id}</span>
            {canRemove && removeCompetitor != undefined ? <Button onClick={() => removeCompetitor(competitor.id)}>Remove</Button> : <></>}
        </div>
    )
}
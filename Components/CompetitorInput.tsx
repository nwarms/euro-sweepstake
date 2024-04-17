import React, { KeyboardEventHandler, useState } from 'react'

type Props = {
    submitCompetitor:(input:string)=> void
}

export default function CompetitorInput({ submitCompetitor }: Props) {
    const [input, setInput] = useState<string>('');
    const handleKeyDown = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && input.length > 0) {
            submitCompetitor(input);
            setInput('');
        }
    }
    return (
        <input type="text" onKeyDown={handleKeyDown} placeholder='Enter name' value={input} onInput={e => setInput(e.currentTarget.value)}/>
    )
}
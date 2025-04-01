import Input from "./Input";

import { useState } from "react";

export default function NewMatch({onCreate}) {
    const [inputValues, setInputValues] = useState({homeTeam: 'Team 1', guestTeam: 'Team 2'});

    function handleChange(key ,value) {
        setInputValues(prevInputValues => {
            return {
                ...prevInputValues,
                [key]: value
            }
        })
    }

    function handleClick() {
        setInputValues(() => {return {homeTeam: 'Team 1', guestTeam: 'Team 2'}});
        onCreate(inputValues.homeTeam, inputValues.guestTeam);
    }

    return (
        <div id="new-match">
            <Input label='Home team' title='homeTeam' value={inputValues.homeTeam} onChange={(event) => handleChange('homeTeam', event.target.value)} />
            <Input label='Guest team' title='guestTeam' value={inputValues.guestTeam} onChange={(event) => handleChange('guestTeam', event.target.value)} />
            <button onClick={() => handleClick()}>Create new match</button>
        </div>
    )
}
import Input from "./Input";

import { useState } from "react";

export default function NewMatch({onCreate, matchList}) {
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
        const valueIsEmpty = inputValues.homeTeam !== '' && inputValues.guestTeam !== '' && inputValues.homeTeam !== inputValues.guestTeam;
        let matchExists = false;
        for (let i = 0; i < matchList.length; i++) {
            const match = matchList[i];
            // checking is name combination exists, will return true if both team names exist, regardless to home or guest team.
            // giving the option for a team to play multipel games, but only 1 against a specific team
            const teamNameTaken = (match.homeTeam.name === inputValues.homeTeam && match.guestTeam.name === inputValues.guestTeam) || (match.homeTeam.name === inputValues.guestTeam && match.guestTeam.name === inputValues.homeTeam)
            if (teamNameTaken) {
                matchExists = true
            }
        }
        if (valueIsEmpty && !matchExists) {
            setInputValues(() => { return { homeTeam: '', guestTeam: '' } });
            onCreate(inputValues.homeTeam, inputValues.guestTeam);
        }
    }

    return (
        <div id="new-match">
            <Input label='Home team' title='homeTeam' value={inputValues.homeTeam} onChange={(event) => handleChange('homeTeam', event.target.value)} />
            <Input label='Guest team' title='guestTeam' value={inputValues.guestTeam} onChange={(event) => handleChange('guestTeam', event.target.value)} />
            <button className="button" onClick={() => handleClick()}>Start a new match</button>
        </div>
    )
}
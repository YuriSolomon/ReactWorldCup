import Input from "./Input";

import { useState } from "react";

export default function UpdateScores({onUpdate, match}) {
    const initialScore = {homeTeam: {name: match.homeTeam.name ,score: match.homeTeam.score}, guestTeam: {name: match.guestTeam.name, score: match.guestTeam.score}}
    const [inputValues, setInputValues] = useState(initialScore);
    function handleChange(key ,value) {
        setInputValues(prevInputValues => {
            if (key === 'homeTeam') {
                return {
                    ...prevInputValues,
                    homeTeam: {...prevInputValues.homeTeam ,score: +value}
                }
            } else {
                return {
                    ...prevInputValues,
                    guestTeam: {...prevInputValues.guestTeam ,score: +value}
                }
            }
        })
    }

    function handleClick() {
        if (inputValues.homeTeam.score >= match.homeTeam.score && inputValues.guestTeam.score >= match.guestTeam.score) {
            onUpdate(inputValues);
        }
    }

    return (
        <div id="new-match">
            <Input label='Home team score' type="number" title='homeTeamScore' value={inputValues.homeTeam.score} onChange={(event) => handleChange('homeTeam', event.target.value)} />
            <Input label='Guest team score' type="number" title='guestTeamScore' value={inputValues.guestTeam.score} onChange={(event) => handleChange('guestTeam', event.target.value)} />
            <button onClick={() => handleClick()}>Create new match</button>
        </div>
    )
}
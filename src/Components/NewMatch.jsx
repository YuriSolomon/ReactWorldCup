import Input from "./Input";

import { useState } from "react";

export default function NewMatch({onCreate}) {
    const [inputValues, setInputValues] = useState({homeTeam: undefined, guestTeam: undefined});

    function handleChange(key ,value) {
        setInputValues(prevInputValues => {
            return {
                ...prevInputValues,
                [key]: value
            }
        })
        console.log(inputValues)
    }

    return (
        <div id="new-match">
            <Input label='Home team' title='homeTeam' onChange={(event) => handleChange('homeTeam', event.target.value)} />
            <Input label='Guest team' title='guestTeam' onChange={(event) => handleChange('guestTeam', event.target.value)} />
            <button onClick={() => onCreate(inputValues.homeTeam, inputValues.guestTeam)}>Create new match</button>
        </div>
    )
}
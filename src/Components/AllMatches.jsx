import NewMatch from "./NewMatch";
import MatchList from "./MatchList";

import { useState } from "react";

export default function AllMatches() {
    const [matchList, setMatchList] = useState([]);

    function handleCreate(homeTeam, guestTeam) {
        setMatchList(prevMatchList => {
            const updatedMatchList = [
                {
                    duration: 0,
                    active: true,
                    selected: true,
                    homeTeam: {name: homeTeam, score: 0},
                    guestTeam: {name: guestTeam, score: 0}
                },
                ...prevMatchList
            ];
            return updatedMatchList;
        })
    }

    return (
        <div id="match-list">
            CURRENT MATCH component
                team component --- home team - score, visiting team - score
                finish match button
            UPDATE CURRENT MATCH
                inputs scores
                submit button

            <NewMatch onCreate={handleCreate} />
            
            <MatchList matchList={matchList} />

            LIVE MATCH LIST component
                team component --- matches sorted by highest score, and later by match duration
        </div>
    )
}
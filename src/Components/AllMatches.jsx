import NewMatch from "./NewMatch";
import MatchList from "./MatchList";

import { useState } from "react";

const initialMatches = [
    {
        duration: 0,
        active: true,
        selected: true,
        homeTeam: {name: 'Spain', score: 6},
        guestTeam: {name: 'Brazil', score: 6}
    },
    {
        duration: 1,
        active: true,
        selected: true,
        homeTeam: {name: 'Uruguay', score: 2},
        guestTeam: {name: 'Italy', score: 10}
    },
    {
        duration: 2,
        active: true,
        selected: true,
        homeTeam: {name: 'Mexico', score: 6},
        guestTeam: {name: 'Canada', score: 10}
    }
]

export default function AllMatches() {
    const [matchList, setMatchList] = useState(initialMatches);

    function handleCreate(homeTeam, guestTeam) {
        setMatchList(prevMatchList => {
            const updatedListDuration = prevMatchList.map(match => {
                return {
                    ...match,
                    duration: match.duration + 1,
                    selected: false
                }
            } )
            const updatedMatchList = [
                {
                    duration: 0,
                    active: true,
                    selected: true,
                    homeTeam: {name: homeTeam, score: 0},
                    guestTeam: {name: guestTeam, score: 0}
                },
                ...updatedListDuration
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
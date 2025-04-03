import NewMatch from "./NewMatch";
import MatchList from "./MatchList";
import Currentmatch from "./CurrentMatch";

import { useState } from "react";

const initialMatches = [
    {
        duration: 0,
        active: true,
        selected: true,
        homeTeam: { name: 'Spain', score: 6 },
        guestTeam: { name: 'Brazil', score: 6 }
    },
    {
        duration: 1,
        active: true,
        selected: false,
        homeTeam: { name: 'Uruguay', score: 2 },
        guestTeam: { name: 'Italy', score: 10 }
    },
    {
        duration: 2,
        active: true,
        selected: false,
        homeTeam: { name: 'Mexico', score: 6 },
        guestTeam: { name: 'Canada', score: 10 }
    }
];

function findSelectedMatch(matchList) {
    let selectedMatch;
    for (let i = 0; i < matchList.length; i++) {
        const match = matchList[i];
        if (match.selected) {
            selectedMatch = match;
            break;
        }
    };
    return selectedMatch;
}

export default function AllMatches() {
    const [matchList, setMatchList] = useState(initialMatches);

    const selectedMatch = findSelectedMatch(matchList);

    function handleCreate(homeTeam, guestTeam) {
        setMatchList(prevMatchList => {
            const updatedListDuration = prevMatchList.map(match => {
                return {
                    ...match,
                    duration: match.duration + 1,
                    selected: false
                }
            })
            const updatedMatchList = [
                {
                    duration: 0,
                    active: true,
                    selected: true,
                    homeTeam: { name: homeTeam, score: 0 },
                    guestTeam: { name: guestTeam, score: 0 }
                },
                ...updatedListDuration
            ];
            return updatedMatchList;
        })
    }

    function handleUpdate(match) {
        setMatchList(prevMatchList => {
            const updatedListScore = prevMatchList.map(matchItem => {
                return {
                    ...matchItem,
                    duration: matchItem.duration + 1,
                    homeTeam: { ...matchItem.homeTeam, score: (matchItem.homeTeam.name === match.homeTeam.name ? match.homeTeam.score : matchItem.homeTeam.score) },
                    guestTeam: { ...matchItem.guestTeam, score: (matchItem.guestTeam.name === match.guestTeam.name ? match.guestTeam.score : matchItem.guestTeam.score) }
                }
            })
            return updatedListScore;
        })
    }

    function handleFinish(match) {
        setMatchList(prevMatchList => {
            let updatedListActive = prevMatchList.map(matchItem => {
                let activeState = matchItem.active;
                return {
                    ...matchItem,
                    selected: false,
                    active: (match.homeTeam.name === matchItem.homeTeam.name ? false : activeState),
                    duration: matchItem.duration + 1,
                }
            })
            for (let i = 0; i < updatedListActive.length; i++) {
                const matchItem = updatedListActive[i];
                if (matchItem.active) {
                    matchItem.selected = true;
                    break;
                }
            }
            return updatedListActive;
        })
    }

    return (
        <div id="match-list">
            <Currentmatch onUpdate={handleUpdate} match={selectedMatch} onFinish={handleFinish} />
            <NewMatch onCreate={handleCreate} />
            <MatchList matchList={matchList} />
        </div>
    )
}
import Team from "./Team";

function checkIfItemsAreActive(matches) {
    let activeItems = false;
    for (let i = 0; i < matches.length; i++) {
        const match = matches[i];
        if (match.active) {
            activeItems = true;
            break;
        }
    }
    return activeItems;
}

export default function MatchList({ matchList, onSelect }) {
    const sortedMatches = matchList.sort((a, b) =>
        (b.homeTeam.score + b.guestTeam.score) - (a.homeTeam.score + a.guestTeam.score) || b.duration.toString().localeCompare(a.duration.toString())
    );

    const itemsAreActive = checkIfItemsAreActive(sortedMatches);

    return (
        <>
            {itemsAreActive && (
                <div id="match-list-wrapper">
                    <h2>Active matches</h2>
                    <ol id="match-list">
                        {sortedMatches.map((match, index) => (
                            <span key={index}>
                                {(match.active && !match.selected) && (
                                    <li>
                                        <button data-testid={match.homeTeam.name + match.guestTeam.name} onClick={(event) => onSelect(match)}>
                                            <Team team={match.homeTeam} /> - <Team team={match.guestTeam} />
                                        </button>
                                    </li>
                                )}
                            </span>
                        ))}
                    </ol>
                    <span className="instruction">Click a match for more details</span>
                </div>
            )}
        </>
    )
}
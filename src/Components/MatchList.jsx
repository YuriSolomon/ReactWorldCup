import Team from "./Team";

export default function MatchList({ matchList, onSelect }) {
    const sortedMatches = matchList.sort((a, b) =>
        (b.homeTeam.score + b.guestTeam.score) - (a.homeTeam.score + a.guestTeam.score) || b.duration.toString().localeCompare(a.duration.toString())
    );

    return (
        <ol id="match-list">
            {sortedMatches.map((match, index) => (
                <span key={index}>
                    {(match.active && !match.selected) && (
                        <li>
                            <button onClick={(event) => onSelect(match)}>
                                <Team team={match.homeTeam} /> - <Team team={match.guestTeam} />
                            </button>
                        </li>
                    )}
                </span>
            ))}
        </ol>
    )
}
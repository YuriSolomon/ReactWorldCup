import Team from "./Team";

export default function MatchList({ matchList, onSelect }) {
    // TO DO: sort list items by total score first, and later by duration
    return (
        <ol id="match-list">
            {matchList.map((match, index) => (
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
import Team from "./Team";

export default function MatchList({ matchList }) {
    // TO DO: sort list items by total score first, and later by duration
    return (
        <ol id="match-list">
            {matchList.map((match, index) => (
                <span key={index}>
                    {(match.active && !match.selected) && (
                        <li>
                            <Team team={match.homeTeam} /> - <Team team={match.guestTeam} />
                        </li>
                    )}
                </span>
            ))}
        </ol>
    )
}
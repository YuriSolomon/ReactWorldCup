import Team from "./Team";

export default function MatchList({ matchList }) {
// TO DO: sort list items by total score first, and later by duration
    return (
        <ol id="match-list">
            {matchList.map((match, index) => (
                <li key={index}>
                    <Team team={match.homeTeam} /> - <Team team={match.guestTeam} />
                </li>
            ))}
        </ol>
    )
}
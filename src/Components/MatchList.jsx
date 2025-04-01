export default function MatchList({matchList}) {
    return (
        <ol id="match-list">
            {matchList.map((match,index) => (
                <li key={index}>
                    {match.homeTeam.name}: {match.homeTeam.score} - {match.guestTeam.name}: {match.guestTeam.score}</li>
                ))}
        </ol>
    )
}
import Team from "./Team";

export default function CurrentMatch({match }) {
    return (
        <>
            {match && (<div id="current-match-wrapper">
                <h2>About match</h2>
                <div id="current-match" data-testid="current-match">
                    <p className="team-info"><span>Home team</span> <Team team={match.homeTeam} /></p>
                    <p>VS.</p>
                    <p className="team-info"><span>Guest team</span> <Team team={match.guestTeam} /></p>
                </div>
            </div>)}
        </>
    )
}
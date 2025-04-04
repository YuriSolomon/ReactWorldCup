import Team from "./Team";
import MatchOptions from "./MatchOptions";

export default function CurrentMatch({ onUpdate, match, onFinish }) {
    return (
        <>
            {match && (<div id="current-match-wrapper">
                <h2>About match</h2>
                <div id="current-match" data-testid="current-match">
                    <p className="team-info"><span>Home team</span> <Team team={match.homeTeam} /></p>
                    <p>VS.</p>
                    <p className="team-info"><span>Guest team</span> <Team team={match.guestTeam} /></p>
                </div>
                <MatchOptions onUpdate={onUpdate} match={match} onFinish={onFinish} />
            </div>)}
            {!match && <p>No active matches</p>}
        </>
    )
}
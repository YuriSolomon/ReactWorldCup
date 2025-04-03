import Team from "./Team";
import MatchOptions from "./MatchOptions";

export default function CurrentMatch({ onUpdate, match, onFinish }) {
    return (
        <>
            {match && (<div id="current-match">
                <p>Home team: <Team team={match.homeTeam} /></p>
                <p>VS.</p>
                <p>Guest team: <Team team={match.guestTeam} /></p>
                <MatchOptions onUpdate={onUpdate} match={match} onFinish={onFinish} />
            </div>)}
            {!match && <p>No active matches</p>}
        </>
    )
}
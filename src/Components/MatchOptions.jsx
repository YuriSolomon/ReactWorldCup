import UpdateScores from "./UpdateScores";

export default function MatchOptions({onUpdate, match, onFinish}) {
    return (
        <>
        <h3>Update scores for this match</h3>
            <UpdateScores onUpdate={onUpdate} match={match}/>
            <button className="button button-finish" onClick={() => onFinish(match)}>Finish match</button>
        </>
    )
}
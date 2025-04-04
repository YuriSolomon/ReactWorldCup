import UpdateScores from "./UpdateScores";

export default function MatchOptions({onUpdate, match, onFinish}) {
    return (
        <>
            <UpdateScores onUpdate={onUpdate} match={match}/>
            <button className="button button-finish" onClick={() => onFinish(match)}>Finish match</button>
        </>
    )
}
import UpdateScores from "./UpdateScores";

export default function MatchOptions({onUpdate, match, onFinish}) {
    return (
        <>
            <UpdateScores onUpdate={onUpdate} match={match}/>
            <button onClick={() => onFinish(match)}>Finish match</button>
        </>
    )
}
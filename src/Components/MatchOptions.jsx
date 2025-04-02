import UpdateScores from "./UpdateScores";

export default function MatchOptions({onUpdate, match}) {
    return (
        <>
            <UpdateScores onUpdate={onUpdate} match={match}/>
            inputs scores
            submit button
            finish match button
        </>
    )
}
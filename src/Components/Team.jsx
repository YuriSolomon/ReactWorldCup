export default function Team({team}) {
    return (
        <>
            <span data-testid={team.name+team.score}>{team.name}: </span><span>{team.score}</span>
        </>
    )
}
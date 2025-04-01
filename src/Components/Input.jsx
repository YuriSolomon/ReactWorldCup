export default function Input({label, type = 'text', ...props}) {
    return (
        <>
            <label>{label}</label>
            <input type={type} {...props} />
        </>
    )
}
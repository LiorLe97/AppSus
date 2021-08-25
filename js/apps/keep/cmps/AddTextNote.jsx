

export function AddTextNote({ type }) {
    return (
        <form className="add-note">
            <input className="note-input" type={type} placeholder="Enter text"/>
        </form>
    )
}
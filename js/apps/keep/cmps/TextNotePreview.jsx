
export function TextNotePreview({ note,onDeleteNote }) {
    return (
        <section className="text-note-preview">
            <h1>{note.info.text}</h1>
            <button className="delete-btn" onClick={()=>{onDeleteNote(note.id)}}>x</button>
        </section>
    )

}
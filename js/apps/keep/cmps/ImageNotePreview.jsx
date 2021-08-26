
export function ImageNotePreview({ note, onDeleteNote }) {
    return (
        <section className="image-note-preview">
            <h1>{note.info.title}</h1>
            <img src={note.info.url} />
            <button className="delete-btn" onClick={() => { onDeleteNote(note.id) }}>x</button>
        </section>
    )
}
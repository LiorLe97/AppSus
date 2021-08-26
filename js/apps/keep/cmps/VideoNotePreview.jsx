

export function VideoNotePreview({ note, onDeleteNote }) {
    return (
        <section className="video-note-preview">
            <iframe src={`https://www.youtube.com/embed/${note.info.urlId}?controls=1"`} frameBorder="0"></iframe>
            <button className="delete-btn" onClick={() => { onDeleteNote(note.id) }}>x</button>

        </section>
    )
}
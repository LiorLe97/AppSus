
export function ImageNotePreview({ note }) {
    return (
        <section className="image-note-preview">
            <h1>{note.info.title}</h1>
            <img src={note.info.url}/>
        </section>
    )
}
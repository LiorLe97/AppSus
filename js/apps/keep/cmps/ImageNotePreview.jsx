
export function ImageNotePreview({ note }) {
    return (
        <section className="image-note-preview">
            <img src={note.info.url} />
        </section>
    )
}
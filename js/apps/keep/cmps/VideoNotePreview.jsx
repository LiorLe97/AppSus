

export function VideoNotePreview({ note }) {
    return (
        <section className="video-note-preview">
            <iframe src={`https://www.youtube.com/embed/${note.info.urlId}?controls=1"`} frameBorder="0"></iframe>

        </section>
    )
}
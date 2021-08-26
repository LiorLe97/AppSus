
import { NotePreview } from './note-preview.jsx'

export function NotesList({ notes, onDeleteNote }) {
    return (
        <section className="notes-list">
            {notes.map(note => <NotePreview key={note.id} note={note} onDeleteNote={onDeleteNote} />)}
        </section>
    )

}

import {NotePreview} from './note-preview.jsx'

export function NotesList({ notes }) {
    return (
        <section className="notes-list">
            {notes.map(note => <NotePreview key={note.id} note={note} />)}
        </section>
    )

}
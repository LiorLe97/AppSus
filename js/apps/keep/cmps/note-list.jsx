
import { NotePreview } from './note-preview.jsx'

export function NotesList({ notes, onDeleteNote, onSetNoteColor,setEditMode,onChangeEditModeType }) {
    return (
        <section className="notes-list">
            {notes.map(note => <NotePreview key={note.id} note={note} onDeleteNote={onDeleteNote} onSetNoteColor={onSetNoteColor} setEditMode={setEditMode} onChangeEditModeType={onChangeEditModeType} />)}
        </section>
    )

}
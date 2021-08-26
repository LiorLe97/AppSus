import { noteService } from '../services/note.service.js'
import { NotesList } from '../cmps/note-list.jsx'
import { NotesFilter } from '../cmps/NotesFilter.jsx'
import { AddTextNote } from '../cmps/AddTextNote.jsx'
import { AddImageNote } from '../cmps/AddImageNote.jsx'
import { AddTodosNote } from '../cmps/AddTodosNote.jsx'
import { AddVideoNote } from '../cmps/AddVideoNote.jsx'

export class KeepApp extends React.Component {
    state = {
        notes: [],
        filterBy: '',
        inputType: 'text'
    }

    componentDidMount() {
        this.loadNotes()

    }

    loadNotes = () => {
        noteService.query(this.state.filterBy)
            .then(notes => { this.setState({ notes }) })
    }
    onChangeNoteType = (type) => {
        this.setState({ inputType: type })

    }
    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadNotes);

    }
    onSaveNote = (ev, noteInfo, noteType) => {
        ev.preventDefault()
        noteService.onSaveNote(noteType, noteInfo)
            .then(this.loadNotes)
    }
    onDeleteNote = (noteId) => {
        noteService.deleteNote(noteId)
            .then(this.loadNotes)

    }
    onSetNoteColor = (noteId, color) => {
        noteService.changeColor(noteId, color)
            .then(this.loadNotes)

    }


    render() {
        const { notes, inputType } = this.state
        const DynamicCmp = (props) => {
            switch (props.type) {
                case 'text':
                    return <AddTextNote {...props} />
                case 'image':
                    return <AddImageNote {...props} />
                case 'todos':
                    return <AddTodosNote {...props} />
                case 'video':
                    return <AddVideoNote {...props} />
            }
        }
        return (
            <section className="note-app">
                <NotesFilter onSetFilter={this.onSetFilter} />
                <div className="pick-notes">
                    <DynamicCmp type={inputType} onSaveNote={this.onSaveNote} />
                    <div className="note-text note-btn" onClick={() => { this.onChangeNoteType('text') }}></div>
                    <div className="note-list note-btn" onClick={() => { this.onChangeNoteType('todos') }}></div>
                    <div className="note-img note-btn" onClick={() => { this.onChangeNoteType('image') }}></div>
                    <div className="note-video note-btn" onClick={() => { this.onChangeNoteType('video') }}></div>
                </div>
                <NotesList notes={notes} onDeleteNote={this.onDeleteNote} onSetNoteColor={this.onSetNoteColor} />

            </section>
        )
    }
}
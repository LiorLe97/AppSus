import { noteService } from '../services/note.service.js'
import { NotesList } from '../cmps/note-list.jsx'
import { AddTextNote } from '../cmps/AddTextNote.jsx'
import { AddImageNote } from '../cmps/AddImageNote.jsx'

export class KeepApp extends React.Component {
    state = {
        notes: [],
        filtedBy: null,
        inputType: 'text'
    }


    componentDidMount() {
        this.loadNotes()

    }

    loadNotes = () => {
        noteService.query()
            .then(notes => { this.setState({ notes }) })
    }
    onChangeNoteType=(type)=>{
        this.setState({inputType:type})

    }

    render() {
        const { notes, inputType } = this.state
        const DynamicCmp = (props) => {
            switch (props.type) {
                case 'text':
                    return <AddTextNote {...props} />
                case 'image':
                    return <AddImageNote {...props} />
            }
        }
        return (
            <section className="note-app">
                <div className="pick-notes">
                    <DynamicCmp type={inputType} />
                    <div className="note-text note-btn" onClick={()=>{this.onChangeNoteType('text')}}>Add note</div>
                    <div className="note-list note-btn">Add list</div>
                    <div className="note-img note-btn" onClick={()=>{this.onChangeNoteType('image')}}>Add image</div>
                    <div className="note-video note-btn">Add video</div>
                </div>
                <NotesList notes={notes} />

            </section>
        )
    }
}
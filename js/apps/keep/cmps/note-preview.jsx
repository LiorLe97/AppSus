
import { TextNotePreview } from './TextNotePreview.jsx'
import { ImageNotePreview } from './ImageNotePreview.jsx'
import { TodosNotePreview } from './TodosNotePreview.jsx'
import { VideoNotePreview } from './VideoNotePreview.jsx'
export class NotePreview extends React.Component {
    render() {
        const { note, onDeleteNote } = this.props
        const DynamicCmp = (props) => {
            switch (props.note.type) {
                case 'note-text':
                    return <TextNotePreview {...props} />
                case 'note-image':
                    return <ImageNotePreview {...props} />
                case 'note-todos':
                    return <TodosNotePreview {...props} />
                case 'note-video':
                    return <VideoNotePreview {...props} />
            }
        }
        return (
            <section className="note-preview" >
                <DynamicCmp note={note} onDeleteNote={onDeleteNote} />
            </section>
        )
    }

}
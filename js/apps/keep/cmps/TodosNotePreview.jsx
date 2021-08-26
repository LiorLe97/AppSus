import { utilService } from "../../../services/util.service.js"
import { NoteTodoPreview } from "./NoteTodoPreview.jsx"


export class TodosNotePreview extends React.Component {

    //note is in props
    render() {
        const { note, onDeleteNote } = this.props

        return (
            <section className="todos-note-preview">
                <h1>{note.info.title}</h1>
                <ul>
                    {note.info.todos.map(todo => <NoteTodoPreview key={utilService.makeId()} todo={todo} />)}
                </ul>
                <button className="delete-btn" onClick={() => { onDeleteNote(note.id) }}>x</button>

            </section>
        )
    }
}
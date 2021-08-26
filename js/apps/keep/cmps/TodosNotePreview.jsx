import { utilService } from "../../../services/util.service.js"
import { NoteTodoPreview } from "./NoteTodoPreview.jsx"
import { ColorPalette } from "./ColorPallette.jsx"


export class TodosNotePreview extends React.Component {
    state = {
        isColorPalette: false
    }

    onOpenColorPalette = () => {
        this.setState(prevState => ({ isColorPalette: !prevState.isColorPalette }))
    }

    //note is in props
    render() {
        const { note, onDeleteNote, style, onSetNoteColor } = this.props
        const { isColorPalette } = this.state

        return (
            <section className="todos-note-preview" style={style}>
                <h1>{note.info.title}</h1>
                <ul>
                    {note.info.todos.map(todo => <NoteTodoPreview key={utilService.makeId()} todo={todo} />)}
                </ul>
                <button className="delete-btn" onClick={() => { onDeleteNote(note.id) }}>x</button>
                <div className="color-palette-icon" onClick={this.onOpenColorPalette}>
                    {isColorPalette && <ColorPalette note={note} onSetNoteColor={onSetNoteColor} />}
                    open color
                </div>


            </section>
        )
    }
}
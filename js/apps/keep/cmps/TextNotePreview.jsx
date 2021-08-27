
import { ColorPalette } from "./ColorPallette.jsx"
import { EditTextNote } from "./EditTextNote.jsx"

export class TextNotePreview extends React.Component {
    state = {
        isColorPalette: false,
        isEditMode: false
    }

    onOpenColorPalette = () => {
        this.setState(prevState => ({ isColorPalette: !prevState.isColorPalette }))
    }
    onOpenEditMode = () => {
        this.setState(prevState => ({ isEditMode: !prevState.isEditMode }))
    }
    render() {
        const { note, onDeleteNote, style, onSetNoteColor, setEditMode, onChangeEditModeType } = this.props
        const { isColorPalette, isEditMode } = this.state
        return (
            <section className="text-note-preview" style={style}>
                <h1>{note.info.text}</h1>
                <button className="delete-btn" onClick={() => { onDeleteNote(note.id) }}>x</button>
                <div className="color-palette-icon" onClick={this.onOpenColorPalette}>
                    {isColorPalette && <ColorPalette note={note} onSetNoteColor={onSetNoteColor} />}
                    open color
                </div>
                <div className="edit-text-note" onClick={() => { setEditMode(note.type,note.id) }} >
                    edit
                </div>
            </section>
        )
    }

}
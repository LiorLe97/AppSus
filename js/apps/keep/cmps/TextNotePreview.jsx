
import { ColorPalette } from "./ColorPallette.jsx"


export class TextNotePreview extends React.Component {
    state = {
        isColorPalette: false
    }

    onOpenColorPalette = () => {
        this.setState(prevState => ({ isColorPalette: !prevState.isColorPalette }))
    }
    render() {
        const { note, onDeleteNote, style, onSetNoteColor } = this.props
        const { isColorPalette } = this.state
        return (
            <section className="text-note-preview" style={style}>
                <h1>{note.info.text}</h1>
                <button className="delete-btn" onClick={() => { onDeleteNote(note.id) }}>x</button>
                <div className="color-palette-icon" onClick={this.onOpenColorPalette}>
                    {isColorPalette && <ColorPalette note={note} onSetNoteColor={onSetNoteColor} />}
                    open color
                </div>
            </section>
        )
    }

}